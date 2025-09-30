import React from 'react'

const Carpage = async ({params}) => {
    const { id } = await params;
  return (
    <div>Carpage:{id}</div>
  )
}

export default Carpage