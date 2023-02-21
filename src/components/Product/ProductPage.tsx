'use client'
import { ProductCard } from "./ProductCard";
import products_list from "./products_data.json"


export function ProductPage (){
    return (
        <>
                <div className="bg-blue-100">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">See my products</h2>
                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products_list.map((item) => (
                                
                        <ProductCard {...item} />
                            ))}   
                        </div>
                        </div>
                </div>

              </>
          );
        
        
    }