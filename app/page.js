import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold">DriveIQ</h1>
        <p className="text-lg text-gray-600">
          Find your dream car.
        </p>
      </main>
    </div>
  );
}
