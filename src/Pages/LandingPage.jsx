import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Button from "../Components/button";

const LandingPage = () => {
  return (
    <section className="h-auto w-auto ">
      <Background />
      <div className="absolute top-0 right-0 bottom-0 left-0 min-h-screen h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl">
              Manage your property
            </h1>
            <span className="text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl">
              Seamlessly
            </span>
            <Link to="/property">
              <Button />
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
};

export default LandingPage;
