import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default async function FeaturedCarsSection() {
  const featuredCars = await getFeaturedCars();

  if (!featuredCars || featuredCars.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
          <p>No featured cars available right now.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Cars</h2>
          <Button variant="ghost" className="flex items-center" asChild>
            <Link href="/cars">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
