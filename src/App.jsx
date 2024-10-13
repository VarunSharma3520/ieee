import { Button } from "flowbite-react";
import Ieeefooter from "./component/footer";
import Ieeenavbar from "./component/navbar";
import Ieeecarousel from "./component/carousel";
import Ieeecalltoaction from "./component/calltoaction";
import Ieeereversecalltoaction from "./component/reversecalltoaction";
import Ieeeinfo from "./component/info";
import IeeefeatureList from "./component/featurelist";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Ieeenavbar />

      {/* Hero Section with Carousel */}
      <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl items-center justify-center gap-8 px-4 py-12 md:py-16">
        <Ieeecarousel />
        <Ieeecarousel />
      </div>

      {/* Info Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12">
        <Ieeeinfo />
      </div>

      {/* Feature List Section */}
      <div className="dark:bg-gray-900 mx-auto max-w-screen-xl px-4 py-8 sm:py-12">
        <IeeefeatureList />
      </div>

      {/* Call to Action */}
      <div className="bg-primary-100 dark:bg-gray-900 py-12">
        <Ieeecalltoaction />
      </div>

      {/* Reverse Call to Action */}
      <div className="bg-white dark:bg-gray-900 py-12">
        <Ieeereversecalltoaction />
      </div>

      {/* Secondary Call to Action */}
      <div className="bg-primary-100 dark:bg-gray-900 py-12">
        <Ieeecalltoaction />
      </div>

      {/* Footer */}
      <div className="bg-gray-900 ">
        <Ieeefooter />
      </div>
    </div>
  );
}
