import React from 'react'

const AddCarform = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Car</h2>
      <form className="space-y-4">
        {/* Car Make */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Make
          </label>
          <input
            type="text"
            placeholder="e.g. Toyota"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Car Model */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Model
          </label>
          <input
            type="text"
            placeholder="e.g. Corolla"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <input
            type="number"
            placeholder="e.g. 2023"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            placeholder="e.g. 25000"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none">
            <option value="available">Available</option>
            <option value="in_use">In Use</option>
            <option value="maintenance">Maintenance</option>
            <option value="sold">Sold</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Save Car
        </button>
      </form>
    </div>
  )
}

export default AddCarform