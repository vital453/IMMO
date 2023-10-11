/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

export default function Notfoud() {
  return (
    <div>
      {" "}
      <section class="flex items-center h-screen bg-gray-200 font-poppins dark:bg-gray-900">
        <div class="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div class="justify-center">
            <div class="flex flex-wrap items-center ">
              <div class="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7">
                <div class="text-center lg:text-left">
                  <h1 class="inline-block mb-8 font-semibold text-gray-800 text-7xl lg:text-9xl dark:text-gray-400">
                    Oops!
                  </h1>

                  <h2 class="mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-400">
                    404 Page not found
                  </h2>

                  <p class="mb-8 text-xl text-gray-700 dark:text-gray-400">
                    Sorry! we are unable to find the page that you are looking
                    for...
                  </p>

                  <div class="flex flex-wrap items-center justify-start">
                    <Link
                      to="/home"
                      class="w-full px-8 py-4 mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-blue-600 rounded-full lg:w-auto hover:bg-blue-800 lg:mb-0 lg:mr-4 md:w-full "
                    >
                      Return Home
                    </Link>

                    <Link
                      href="/home"
                      class="w-full px-8 py-4 text-base font-medium text-gray-700 uppercase border border-blue-300 rounded-full dark:border-gray-500 dark:hover:border-blue-800 dark:text-gray-400 lg:w-auto hover:text-gray-200 dark:hover:text-gray-200 hover:border-blue-800 md:w-full hover:bg-blue-800"
                    >
                      Report Problem
                    </Link>
                  </div>
                </div>
              </div>

              <div class="hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
                <img
                  src="https://i.postimg.cc/dt0HXw8J/pexels-mikhail-nilov-7534104.jpg"
                  alt=""
                  class="relative inset-0 object-cover w-full h-2/4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
