import banner from '../assets/banner1.jpg'
  
  export default function Example() {
    return (
        <>
      <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
          <div>
            <h2 className="lg:text-5xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">Delicious & Affordable Meals Near You.</h2>
            <p className="mt-4 text-left text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
  
            <dl className="mt-5 grid sm:grid-cols-2 sm:gap-y-16 ">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button className="bg-violet-700 text-white font-bold py-2 px-4 m-1 rounded hover:bg-blue-700">
                        Order Now</button>  
                <button className="bg-white text-black font-bold py-2 px-4 m-1 rounded hover:text-blue-900">
                        Meet The Chefs</button>
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
      

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={banner}
              className="rounded-lg bg-gray-100"
            />
          </div>
          <div>
          <p className="mt-4 text-left text-gray-500">
          Established Since 2014
            </p>
            <h2 className="lg:text-5xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">We ve been serving for over 5 years.</h2>
            <p className="mt-4 text-left text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 text-left text-gray-500">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
  
            <dl className="mt-5 grid sm:grid-cols-2 sm:gap-y-16 ">
            <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                <button className="bg-violet-700 text-white font-bold py-2 px-4 m-1 rounded hover:bg-blue-700">
                        Latest Offer</button>  
            </div>
            </dl>
          </div>
        </div>
      </div>
      </>
    )
  }
  