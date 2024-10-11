"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent server-side rendering mismatches
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width={100}
            height={100}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Practice</span>
        </Link>
        <div className="flex md:order-2">
          {/* Other buttons and search functionality */}
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {["/", "/csr", "/ssr", "/ssg", "/isr"].map((path) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    pathname === path ? "text-white bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                  } dark:text-white md:dark:hover:text-blue-500`}
                  aria-current={pathname === path ? "page" : undefined}
                >
                  {path === "/" ? "Home" : path.substring(1).toUpperCase()}
                </Link>
              </li>
            ))}
            
              <Link
              href="/login"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
            
              <Link
              href="/dash"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Data
              </Link>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
