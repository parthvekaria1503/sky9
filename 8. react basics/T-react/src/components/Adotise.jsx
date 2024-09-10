  import mobile from '../assets/mobile.png'
  export default function Example() {
    return (
        <>
    
    <div className="w-full bg-gray-900">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
      
        <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <h3 className="text-3xl mb-3"> Download App </h3>
                <p> People around you are ordering delicious meals using the Treact App.</p>
                <div className="flex justify-center my-10">
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={mobile}
              className="rounded-lg bg-gray-100"
            />
          </div>
          
        </div>
      </div>
      </>
    )
  }