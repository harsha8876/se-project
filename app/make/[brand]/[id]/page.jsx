import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CarDetailPage({ params }) {
  const { brand, id } = params;

  // Fake data — in real app fetch from DB or API
  const cars = [
    {
      id: "1",
      name: `${brand} Model X`,
      year: 2023,
      price: 55000,
      image:
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
      status: "Available",
      mileage: "24 kmpl",
      bhp: "150 bhp",
      rating: "4.6",
      reviews: 372,
      launchedOn: "Jan 2023",
    },
    {
      id: "2",
      name: `${brand} Sport 300`,
      year: 2022,
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      status: "Sold",
      mileage: "18 kmpl",
      bhp: "200 bhp",
      rating: "4.3",
      reviews: 190,
      launchedOn: "Aug 2022",
    },
  ];

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Car not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-7">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/make/${brand}`}
          className="flex items-center text-[#30475E] mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to {brand} Cars
        </Link>

        {/* Car Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Image
              src={car.image}
              alt={car.name}
              width={400}
              height={250}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h1 className="text-2xl font-bold text-[#30475E]">{car.name}</h1>
              <p className="text-gray-600">{car.year} • {car.status}</p>
              <p className="mt-2 text-xl font-semibold text-[#30475E]">
                ${car.price.toLocaleString("en-US")}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Launched On: <span className="font-medium">{car.launchedOn}</span>
              </p>

              {/* Extra Info */}
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p>Mileage: {car.mileage}</p>
                <p>BHP: {car.bhp}</p>
                <p>
                  Rating:{" "}
                  <span className="font-semibold">{car.rating}</span>/5 (
                  {car.reviews} reviews)
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <button className="px-4 py-2 rounded-lg bg-[#30475E] text-white hover:bg-[#223346]">
                Get Best Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
