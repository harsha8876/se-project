// lib/checkUser.js
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  let dbUser = await db.user.findUnique({ where: { clerkUserId: user.id } });

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        role: "USER", // default role
      },
    });
  }

  return dbUser;
};
