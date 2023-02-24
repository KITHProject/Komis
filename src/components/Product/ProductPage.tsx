'use client'
import { ProductCard } from './ProductCard'
import products_list from './products_data.json'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addProduct, fetchProducts } from '@/utils/actions/product'

export function ProductPage() {
  const { isLoading, error, data } = useQuery('productData', () => fetchProducts())

  if (data) {
    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">See my products</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data.map((item, id) => (
                <ProductCard {...item} key={id} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Loading...</h1>
    </>
  )
}
