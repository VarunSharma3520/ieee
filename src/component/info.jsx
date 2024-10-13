import Ieeecardbottombar from "./cardbottombar";

export default function Ieeeinfo() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col-reverse justify-between gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:flex-row xl:gap-16 sm:py-16 lg:px-6">
          {/* Text Section */}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create more tools and ideas that bring us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2.5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:focus:ring-primary-900">
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Card Section */}
          <div className="w-full flex justify-center md:justify-end">
            <Ieeecardbottombar />
          </div>
        </div>
      </section>
    </div>
  );
}
