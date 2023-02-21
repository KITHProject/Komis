'use client'

interface ProductProps {
    name : string;
    description: string;
    price: number;
    year?: number;
}

export function ProductCard ({...props}: ProductProps){
    return (
        <>
           
        <div className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src="https://szymon.kowalski.cybulski.dev/media/kws.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {props.name} {props.year}
                </a>
                </h3>
                <p className="mt-1 text-sm tDDext-gray-500">{props.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{props.price} PLN</p>
            </div>
            <div className="text-xl text-black flex justify-evenly text-sm text-gray-400">
            <button className="rounded-full ... bg-orange-300">Allegro</button>
            <button className="rounded-full ... bg-blue-300" >OLX</button>
            <button className="rounded-full ... bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">OTOMOTO</button>

            </div>

        </div>
              </>
          );
        
        
    }