interface ProductProps {
  name: string
  description: string
  price: number
  year?: number
}

export function ProductCard({ ...props }: ProductProps) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div className="px-5 pb-5 pt-5">
          <p className="text-xl font-semibold tracking-tight text-gray-900">Nazwa: {props.name}</p>
          <p className="text-md font-semibold tracking-tight text-gray-700 pt-5">
            Rocznik: {props.year}
          </p>
        </div>
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://szymon.kowalski.cybulski.dev/media/kws.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {props.description}
            </h5>
          </a>
          <div className="flex items-center justify-between pt-3">
            <span className="text-2xl font-bold text-gray-900">Cena: {props.price}zł</span>
          </div>
          <div className="flex items-center justify-between pt-5">
            <a
              href="#"
              className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Allegro
            </a>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              OLX
            </a>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Otomoto
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
