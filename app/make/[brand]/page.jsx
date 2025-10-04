import Image from "next/image";
import Link from "next/link";

export default async function BrandPage({ params }) {
  const { brand } = await params; // ✅ unwrap the promise

  const cars = [
    {
      id: 1,
      name: `${brand} Model X`,
      year: 2023,
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
      status: "Available",
    },
    {
      id: 2,
      name: `${brand} Sport 300`,
      year: 2022,
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      status: "Sold",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-7">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 capitalize">
          {brand} Cars
        </h1>
        <p className="mt-2 text-gray-600">
          Explore our latest selection of {brand} cars available in our marketplace.
        </p>
      </div>
      {/* grid here... */}
    </div>
  );
}
