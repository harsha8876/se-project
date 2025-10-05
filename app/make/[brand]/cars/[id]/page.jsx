import { ArrowLeft, Gauge, Fuel, Star, Users, Calendar } from "lucide-react";

export default function CarDetailPage() {
  const brand = "Tesla";
  const id = "1";

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
      <div className="min-h-screen flex items-center justify-center text-gray-600 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#30475E] mb-2">Car Not Found</h2>
          <p className="text-gray-500">The vehicle you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center text-[#30475E] hover:text-[#223346] transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to {brand} Collection</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Image and Gallery */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                    car.status === "Available" 
                      ? "bg-emerald-500 text-white" 
                      : "bg-gray-700 text-white"
                  }`}>
                    {car.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-[#30475E] mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Fuel className="w-8 h-8 mx-auto mb-3 text-[#30475E]" />
                  <p className="text-sm text-gray-500 mb-1">Mileage</p>
                  <p className="font-bold text-[#30475E]">{car.mileage}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Gauge className="w-8 h-8 mx-auto mb-3 text-[#30475E]" />
                  <p className="text-sm text-gray-500 mb-1">Power</p>
                  <p className="font-bold text-[#30475E]">{car.bhp}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Calendar className="w-8 h-8 mx-auto mb-3 text-[#30475E]" />
                  <p className="text-sm text-gray-500 mb-1">Year</p>
                  <p className="font-bold text-[#30475E]">{car.year}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Star className="w-8 h-8 mx-auto mb-3 text-[#30475E] fill-current" />
                  <p className="text-sm text-gray-500 mb-1">Rating</p>
                  <p className="font-bold text-[#30475E]">{car.rating}/5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details and CTA */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-[#30475E] mb-2">{car.name}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Launched {car.launchedOn}</span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center bg-[#30475E] text-white px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">{car.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {car.reviews} reviews
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <p className="text-sm text-gray-500 mb-1">Starting Price</p>
                <p className="text-4xl font-bold text-[#30475E]">
                  ${car.price.toLocaleString("en-US")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full py-4 rounded-2xl bg-[#30475E] text-white font-semibold hover:bg-[#223346] transition-all hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Best Offer
                </button>
                <button className="w-full py-4 rounded-2xl border-2 border-[#30475E] text-[#30475E] font-semibold hover:bg-[#30475E] hover:text-white transition-all">
                  Schedule Test Drive
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Price excludes taxes and registration fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}