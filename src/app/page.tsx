import Image from "next/image";
import bicycle from '../../images/bicycles.jpg'

export default function Home() {
  return (
    <>
      <section className="isolate h-full bg-white ">
        <div className="container px-6 m-auto pt-[10%] pb-[10%]">
          <div className="grid grid-cols-4 gap-24 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-7">
              <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="products" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 keychainify-checked">
                      Used cars offers
                    </a>
                    <a href="products" className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 keychainify-checked">
                      Buy a bike <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
            </div>
            <div className="col-span-4 lg:col-span-5 flex justify-center drop-shadow-md">
              <Image
                  src={bicycle.src}
                  alt="Picture of the author"
                  width={500} 
                  height={500} 
                  className="object-cover rounded-xl"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
