"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getDealershipInfo() {
  try {
    let dealership = await db.dealershipInfo.findFirst({
      include: {
        workingHours: {
          orderBy: {
            dayOfWeek: "asc",
          },
        },
      },
    });

    if (!dealership) {
      dealership = await db.dealershipInfo.create({
        data: {
          name: "Vehiql Motors",
          address: "69 Car Street, Autoville, CA 69420",
          phone: "+1 (555) 123-4567",
          email: "contact@vehiql.com",
        },
        include: {
          workingHours: true,
        },
      });
    }

    return { success: true, dealership };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateDealershipHours(formData) {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user || user.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const { dealershipId, hours } = formData;

    for (const hour of hours) {
      await db.workingHour.upsert({
        where: {
          dealershipId_dayOfWeek: {
            dealershipId,
            dayOfWeek: hour.dayOfWeek,
          },
        },
        update: {
          openTime: hour.openTime,
          closeTime: hour.closeTime,
          isOpen: hour.isOpen,
        },
        create: {
          dealershipId,
          dayOfWeek: hour.dayOfWeek,
          openTime: hour.openTime,
          closeTime: hour.closeTime,
          isOpen: hour.isOpen,
        },
      });
    }

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getAllUsers() {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user || user.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { success: true, users };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateUserRole(userId, role) {
  const { userId: authUserId } = await auth();
  if (!authUserId) return { success: false, error: "Unauthorized" };

  const authUser = await db.user.findUnique({
    where: { clerkUserId: authUserId },
  });

  if (!authUser || authUser.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  try {
    await db.user.update({
      where: { id: userId },
      data: { role },
    });

    revalidatePath("/admin/settings");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
