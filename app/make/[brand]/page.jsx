import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react"; // optional rating icon

// ✅ Reusable Car Card
function CarCard({ car }) {
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
}

export default function BrandPage({ params }) {
  // ✅ removed "await" since params is not a Promise
  const { brand } = params;

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

      {/* Grid for cars */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
