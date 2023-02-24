'use client'

import { addProduct } from '@/utils/actions/product'
import { useMutation } from 'react-query'
import { AddProductButton } from './Components/AddProductButton'
import { AdminTable } from './Components/AdminTable'

export function AdminPanelPage() {
  let productExample = {
    name: 'SZOSA',
    description: 'szybki',
    price: 1230,
    year: null,
  }

  const { mutate } = useMutation(addProduct, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      alert(`there was an error: ${error}`)
    },
  })
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div>
            <AddProductButton />
            {/* <button  className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => mutate(productExample)}>Dodaj nowy produkt</button> */}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            <AdminTable />
          </h1>
        </div>
      </div>
    </>
  )
}
