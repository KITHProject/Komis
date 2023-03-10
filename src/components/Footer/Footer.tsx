export function Footer() {
  return (
    <section className="p-4 shadow md:px-6 md:py-8 bg-gray-900 ">
      <div className="container px-6 m-auto">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <a className="flex items-center mb-4 sm:mb-0 keychainify-checked">Komis</a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 keychainify-checked">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 keychainify-checked">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 keychainify-checked">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline keychainify-checked">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © <a className="hover:underline keychainify-checked">KITH™</a> All Rights Reserved.
        </span>
      </div>
    </section>
  )
}
