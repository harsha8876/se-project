"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { CarCard } from "@/components/car-card";
import { Button } from "@/components/ui/button";

export default function SavedCarsList({ initialData }) {
  const [savedCars, setSavedCars] = useState(initialData?.data || []);
  const [loading, setLoading] = useState(!initialData);

  // Fetch saved cars if no initialData provided
  useEffect(() => {
    if (initialData) {
      setLoading(false);
      return;
    }

    const fetchSavedCars = async () => {
      try {
        const res = await fetch("/api/saved-cars");
        const contentType = res.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
          throw new Error("Invalid JSON response");
        }
        const data = await res.json();
        setSavedCars(data.data || []);
      } catch (error) {
        console.error("Error fetching saved cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedCars();
  }, [initialData]);

  // Remove car from wishlist
  const handleRemoveFromWishlist = async (carId) => {
    try {
      await fetch(`/api/saved-cars/${carId}`, { method: "DELETE" });
      setSavedCars((prev) => prev.filter((car) => car.id !== carId));
    } catch (error) {
      console.error("Error removing car:", error);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  // Empty state (from 1st code)
  if (!savedCars || savedCars.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border rounded-lg bg-gray-50">
        <div className="bg-gray-100 p-4 rounded-full mb-4">
          <Heart className="h-8 w-8 text-gray-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">No Saved Cars</h3>
        <p className="text-gray-500 mb-6 max-w-md">
          You haven't saved any cars yet. Browse our listings and click the
          heart icon to save cars for later.
        </p>
        <Button variant="default" asChild>
          <Link href="/cars">Browse Cars</Link>
        </Button>
      </div>
    );
  }

  // Display saved cars (merged logic)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {savedCars.map((car) => (
        <CarCard
          key={car.id}
          car={{ ...car, wishlisted: true }}
          onRemove={handleRemoveFromWishlist}
          showRemoveButton={true}
        />
      ))}
    </div>
  );
}
