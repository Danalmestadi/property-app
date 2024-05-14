import React from "react";

const Button = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-transparent p-4  ">
      <DrawOutlineButton>Discover more</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group uppercase relative px-8 py-4 font-medium text-lg text-slate-100 transition-colors duration-[400ms] hover:text-neutral-50"
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-neutral-50 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-neutral-50 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-neutral-50 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-neutral-50 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
