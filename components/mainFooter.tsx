import { Flower2 } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const MainFooter = () => {
  // const footerStyles = {
  //   boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.03)", // Adjust values as needed
  // };
  return (
    <div className="mt-10 shadow-md">
      <footer className="py-6 text-gray-900 w-full" >
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="flex items-center justify-between">
            <div className="col-span-full md:pb-0 md:col-span-6">
              <Link

                href="/"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <img src="/logo-empresa.png" alt="Logo empresa" />
                {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600 text-white">
                  <Flower2 />
                </div>
                <span className="self-center text-2xl font-semibold">
                  Inators UI
                </span> */}
              </Link>
            </div>
            <div className="flex justify-center space-x-4 lg:pt-0 lg:col-end-13">
              <a

                href="mailto:siddhartha.singh3093@gmail.com"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>

              <Link

                href="https://github.com/siddhartha-up80"
                target='_blank'
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.62h-3.123V24h6.127c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainFooter