"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Heart, Car as CarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { toggleSavedCar } from "@/actions/car-listing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";

import Link from "next/link";
import { Star } from "lucide-react";

export const CarCard = ({ car }) => {
  return (
    <div className="flex gap-4 p-4 rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition">
      {/* Car Image */}
      <div className="flex-shrink-0">
        <img
          src={car.image}
          alt={car.name}
          width={150}
          height={100}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Car Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-semibold text-[#30475E]">{car.name}</h2>
          <p className="text-sm text-gray-600">
            {car.year} | {car.status}
          </p>
          {/* ✅ Fixed locale for deterministic SSR */}
          <p className="text-base font-bold text-[#30475E]">
            ${car.price.toLocaleString("en-US")}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-sm text-gray-700">
            <Star className="w-4 h-4 text-green-600 fill-green-600 mr-1" />
            <span className="font-semibold">4.5</span>
            <span className="ml-1 text-gray-500">/5</span>
          </div>
          <Link
            href={`/make/${car.brand}/cars/${car.id}`}
            className="text-sm font-medium text-[#30475E] hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
