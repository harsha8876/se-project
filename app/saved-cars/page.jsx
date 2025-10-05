"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import CarCard from "@/components/car-card"; // Import the CarCard component

export default function SavedCarsPage() {
  const [savedCars, setSavedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call to fetch user's saved cars
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockSavedCars = [
        {
          id: "1",
          brand: "Tesla",
          name: "Tesla Model X",
          year: 2023,
          price: 55000,
          image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
          status: "Available",
          mileage: "24 kmpl",
          bhp: "150 bhp",
          rating: "4.6",
          reviews: 372,
          launchedOn: "Jan 2023",
          savedDate: "2025-03-15"
        },
        {
          id: "2",
          brand: "BMW",
          name: "BMW M5",
          year: 2024,
          price: 72000,
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
          status: "Available",
          mileage: "18 kmpl",
          bhp: "280 bhp",
          rating: "4.8",
          reviews: 520,
          launchedOn: "Feb 2024",
          savedDate: "2025-03-18"
        },
        {
          id: "3",
          brand: "Audi",
          name: "Audi RS7",
          year: 2023,
          price: 68000,
          image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
          status: "Available",
          mileage: "20 kmpl",
          bhp: "250 bhp",
          rating: "4.7",
          reviews: 410,
          launchedOn: "Sep 2023",
          savedDate: "2025-03-20"
        }
      ];
      setSavedCars(mockSavedCars);
      setLoading(false);
    }, 500);
  }, []);

  const handleRemoveFromWishlist = (carId) => {
    // TODO: Call API to remove from wishlist
    setSavedCars(savedCars.filter(car => car.id !== carId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#30475E]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-[#30475E] fill-current" />
            <h1 className="text-4xl font-bold text-[#30475E]">Saved Cars</h1>
          </div>
          <p className="text-gray-600">
            {savedCars.length} {savedCars.length === 1 ? 'car' : 'cars'} in your wishlist
          </p>
        </div>

        {/* Empty State */}
        {savedCars.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Saved Cars Yet</h2>
            <p className="text-gray-600 mb-6">Start exploring and save your favorite cars!</p>
            <Link href="/">
              <button className="bg-[#30475E] text-white px-6 py-3 rounded-xl hover:bg-[#223346] transition-all">
                Browse Cars
              </button>
            </Link>
          </div>
        ) : (
          /* Cars Grid using CarCard component */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCars.map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                onRemove={handleRemoveFromWishlist}
                showRemoveButton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}