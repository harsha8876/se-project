"use client";

import React/*, { useState, useEffect }*/ from "react";
import { useRouter } from "next/navigation";
// import { toast } from "sonner";
import {
  Plus,
  Search,
  Trash2,
  Eye,
  // Loader2,
  Car as CarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/*
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFetch from "@/hooks/use-fetch";
import { getCars, deleteCar } from "@/actions/cars";
import { formatCurrency } from "@/lib/helpers";
import Image from "next/image";
*/

const Car_list = () => {
  const router = useRouter();

  // Commented-out dynamic states
  // const [search, setSearch] = useState("");
  // const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  // const [carToDelete, setCarToDelete] = useState(null);

  // const { loading: loadingCars, fn: fetchCars, data: carsData, error: carsError } = useFetch(getCars);
  // const { loading: deletingCar, fn: deleteCarFn, data: deleteResult, error: deleteError } = useFetch(deleteCar);

  // useEffect(() => {
  //   fetchCars(search);
  // }, [search]);

  // useEffect(() => {
  //   if (carsError) toast.error("Failed to load cars");
  //   if (deleteError) toast.error("Failed to delete car");
  // }, [carsError, deleteError]);

  // useEffect(() => {
  //   if (deleteResult?.success) {
  //     toast.success("Car deleted successfully");
  //     fetchCars(search);
  //   }
  // }, [deleteResult, search]);

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   fetchCars(search);
  // };

  // const handleDeleteCar = async () => {
  //   if (!carToDelete) return;
  //   await deleteCarFn(carToDelete.id);
  //   setDeleteDialogOpen(false);
  //   setCarToDelete(null);
  // };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 ">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Car Inventory Management
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <Button
            className="bg-primary-600 hover:bg-blue-300 cursor-pointer text-black px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
            onClick={() => router.push("/admin/cars/create")}
          >
            <Plus className="h-4 w-4" />
            Add Car
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search (static) */}
          <form className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search cars..."
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Cars List (static data instead of API) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Car
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 flex items-center space-x-3">
                <div className="w-16 h-10 bg-gray-200 rounded flex items-center justify-center">
                  <CarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Toyota Corolla
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm">Available</td>
              <td className="px-6 py-4 text-sm">$22,000</td>
              <td className="px-6 py-4 text-sm">2022</td>
              <td className="px-6 py-4 text-sm font-medium space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        <div className="p-4 border rounded-lg shadow-sm flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center">
              <CarIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Toyota Corolla</h3>
              <p className="text-sm text-gray-500">2022 • $22,000</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
              Available
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Dialog commented out */}
      {/*
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {carToDelete?.make}{" "}
              {carToDelete?.model}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={deletingCar}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteCar}
              disabled={deletingCar}
            >
              Delete Car
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      */}
    </div>
  );
};

export default Car_list;
