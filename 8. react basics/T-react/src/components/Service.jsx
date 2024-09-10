import logo1 from '../assets/icon1.svg'
import logo2 from '../assets/icon2.svg'
import logo3 from '../assets/icon3.svg'

const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:logo1,
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:logo2,
      },
      {
        name: 'Leslieaaa Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:logo3,
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
      <div className="max-100">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Amazing Services.</h2>
          </div>
        <div className="mx-auto grid mt-5  xl:grid-cols-3">
          <ul role="list" className="grid sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">
            {people.map((person) => (
              <li key={person.name}>
                <div className=" ">
                    <img alt="" src={person.imageUrl} className="mx-auto h-16 w-16 rounded-full block items-center" />
                    <p className="w-1/2 mx-auto mt-3 text-sm font-semibold text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe accusamus sint.</p>
                    <h3 className="text-base mt-3 font-semibold items-center  text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold mt-3 text-indigo-600">{person.role}</p>
                    <div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  