import banner from '../assets/banner3.jpg'
  
  export default function Example() {
    return (
        <>
      <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
          <div>
          <p className="mt-4 text-left text-gray-500">
          A Reputed Brand.
            </p>
            <h2 className="lg:text-5xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us ?</h2>
            <p className="mt-4 text-left text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='grid font-bold text-left sm:grid-cols-3 sm:gap-y-16 mt-3 xl:col-span-3 '>
                <div >
                <h3 className='text-lg'>94000+</h3>
                <p className='text-slate-900'>Orders</p>
                </div>
                <div>
                <h3 className='text-lg'>94000+</h3>
                <p className='text-slate-900'>Orders</p>
                </div>
                <div>
                <h3 className='text-lg'>94000+</h3>
                <p className='text-slate-900'>Orders</p>
                </div>
            </div>

            <dl className="mt-5 grid sm:grid-cols-2 sm:gap-y-16 ">
            <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <button className="bg-violet-700 text-white font-bold py-2 px-4 m-1 rounded hover:bg-blue-700">
                        Order Now</button>  
    
            </div>
            </dl>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={banner}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
      </>
    )
  }
  