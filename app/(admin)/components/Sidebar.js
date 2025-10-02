"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

const routes = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Cars", icon: Car, href: "/admin/cars" },
  { label: "Test Drives", icon: Calendar, href: "/admin/test-drives" },
  { label: "Settings", icon: Cog, href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-56 bg-blue-800 text-white shadow-lg hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-blue-700">
        <div className="flex items-center space-x-3">
          <span className="material-symbols-outlined text-3xl">dashboard</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <p className="text-blue-300 px-3 text-xs font-medium mb-2 uppercase">Main Menu</p>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center space-x-3 text-white p-3 rounded-lg mb-1 transition-all duration-200",
              pathname === route.href ? "bg-blue-700" : "hover:bg-blue-600"
            )}
          >
            <route.icon className="h-5 w-5" />
            <span>{route.label}</span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-5 border-t border-blue-700">
        <SignOutButton>
          <button className="flex items-center space-x-3 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 w-full">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
