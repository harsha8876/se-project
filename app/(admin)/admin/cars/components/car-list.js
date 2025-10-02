import React from "react"

const Car_list = () => {
    return (
        <div id="webcrumbs">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Car Inventory Management</h1>
                    <div className="flex gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search cars..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none"
                            />
                            
                        </div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                            <span className="material-symbols-outlined">add</span>
                            Add Car
                        </button>
                    </div>
                </div>

                <div className="mb-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <details className="relative">
                            <summary className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <span>Filter</span>
                            </summary>
                            <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-60 z-10">
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                                        <option value="">All Brands</option>
                                        <option value="toyota">Toyota</option>
                                        <option value="honda">Honda</option>
                                        <option value="ford">Ford</option>
                                        <option value="bmw">BMW</option>
                                        <option value="mercedes">Mercedes</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                                        <option value="">All Status</option>
                                        <option value="available">Available</option>
                                        <option value="in_use">In Use</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="sold">Sold</option>
                                    </select>
                                </div>
                                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg mt-2">
                                    Apply Filter
                                </button>
                            </div>
                        </details>

                        <details className="relative">
                            <summary className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                                <span>Sort By</span>
                            </summary>
                            <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-48 z-10">
                                <div className="flex flex-col gap-2">
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md flex items-center justify-between">
                                        <span>Name (A-Z)</span>
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </button>
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md">
                                        Name (Z-A)
                                    </button>
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md">
                                        Price (Low-High)
                                    </button>
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md">
                                        Price (High-Low)
                                    </button>
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md">
                                        Newest First
                                    </button>
                                    <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md">
                                        Oldest First
                                    </button>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">view_list</span>
                        </button>
                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">grid_view</span>
                        </button>
                        <select className="p-2 border border-gray-300 rounded-lg">
                            <option value="10">10 per page</option>
                            <option value="25">25 per page</option>
                            <option value="50">50 per page</option>
                            <option value="100">100 per page</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center gap-1">
                                        Car <span className="material-symbols-outlined text-sm">unfold_more</span>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center gap-1">
                                        Status <span className="material-symbols-outlined text-sm">unfold_more</span>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center gap-1">
                                        License Plate{" "}
                                        <span className="material-symbols-outlined text-sm">unfold_more</span>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center gap-1">
                                        Price <span className="material-symbols-outlined text-sm">unfold_more</span>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div className="flex items-center gap-1">
                                        Year <span className="material-symbols-outlined text-sm">unfold_more</span>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-16 flex-shrink-0 bg-gray-200 rounded">
                                            <img
                                                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
                                                className="h-10 w-16 object-cover rounded"
                                                alt="Car"
                                                keywords="Toyota Corolla, sedan, car"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">Toyota Corolla</div>
                                            <div className="text-sm text-gray-500">Sedan • Automatic • Black</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Available
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ABC-1234</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$22,500</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2022</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-16 flex-shrink-0 bg-gray-200 rounded">
                                            <img
                                                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537"
                                                className="h-10 w-16 object-cover rounded"
                                                alt="Car"
                                                keywords="BMW 3 Series, luxury car, sedan"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">BMW 3 Series</div>
                                            <div className="text-sm text-gray-500">Luxury • Automatic • Blue</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        Maintenance
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">XYZ-5678</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$48,300</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-16 flex-shrink-0 bg-gray-200 rounded">
                                            <img
                                                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"
                                                className="h-10 w-16 object-cover rounded"
                                                alt="Car"
                                                keywords="Ford F-150, pickup, truck"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">Ford F-150</div>
                                            <div className="text-sm text-gray-500">Pickup • Manual • Red</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        In Use
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DEF-9012</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$35,900</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2021</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-16 flex-shrink-0 bg-gray-200 rounded">
                                            <img
                                                src="https://images.unsplash.com/photo-1609521263047-f8f205293f24"
                                                className="h-10 w-16 object-cover rounded"
                                                alt="Car"
                                                keywords="Tesla Model 3, electric car, sedan"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">Tesla Model 3</div>
                                            <div className="text-sm text-gray-500">Electric • Automatic • White</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">GHI-3456</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$55,400</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="flex space-x-2">
                                        <button className="text-primary-600 hover:text-primary-900 p-1 rounded-full hover:bg-primary-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{" "}
                        <span className="font-medium">24</span> results
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                            Previous
                        </button>
                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50">
                            Next
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
                {/* Next: "Add a car details modal that opens when clicking on the view button" */}
                {/* Next: "Add a bulk actions dropdown for multiple selected cars" */}
                {/* Next: "Add a statistics summary card at the top showing total cars, available cars, etc." */}
            </div>
        </div>
    )
}
export default Car_list;