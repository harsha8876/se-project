import React from 'react'
import AddCarform from '../components/add-car-form';

export const metadata = {
    title: "Add new car",
    description : "Add a new car to the Marketplace"
};

const AddCarpage = () => {
  return (
    <div className='p-6'>
        <h1 className="text-2xl font-bold mb-6">Add New Car</h1>
        <AddCarform/>
    </div>
  )
}

export default AddCarpage