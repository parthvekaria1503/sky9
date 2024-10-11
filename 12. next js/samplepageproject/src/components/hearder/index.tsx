import React from "react";
import Image from "next/image";
const index = () => {
  return (
    <>
      <nav className="mt-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/vegalogo.png" // Path to your image
              alt="Description of image"
              width={300}
              height={100}
            ></Image>
          </a>
        </div>
      </nav>

      <nav className="mt-5">
        <div
          className="text-white items-center  justify-center  hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                aria-current="page"
              >
                Bollywood
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                aria-current="page"
              >
                Hollywood
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent"
                aria-current="page"
              >
                Dual Audio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent"
              >
                Telugu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent"
              >
                Tamil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent"
              >
                Tv Shows
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent"
              >
                Genre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent"
              >
                By Year
              </a>
            </li>
          </ul>
          <div className="relative hidden md:block ml-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>
      <div>
        <div className="flex justify-center items-center mt-5">
          <div className="">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              Bollywood Movies
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Dual Audio Content
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Hollywood Movies
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
            >
              Dual Audio Movies
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-5">
          <div className="w-full ml-24 mr-24">
            <button
              type="button"
              className="w-full text-white bg-blue-400 hover:bg-blue-400 focus:ring-4 focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-400"
            >
              Join Our Telegram Channel
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-5">
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Dual Audio[Hindi]
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Hollywood Movies 1080P
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Telugu
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Action
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Adventure
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Animation
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Cartoon
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Comedy
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Crime
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Documentary
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Drama
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Family
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Fantasy
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              History
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Horror
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Mystery
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Romance
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Thriller
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              War
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Web Series
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Tamil 720p
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Pakistani
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Punjabi Movies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
