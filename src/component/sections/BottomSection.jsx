import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function BottomSection() {
  return (
    <>
      <section>
        <div className="m-auto flex items-center justify-center mt-[50px] mb-[50px]">
          <div className="w-6xl h-[284px] flex items-center justify-center flex-col bg-[#FB7356] rounded-[240px] ">
            <h1 className="text-[40px] font-bold text-white w-xl font-secondary text-center">
              Start learning new skills today and pursue your passion{" "}
            </h1>
            <p className="font-primary text-center text-white mt-2 mb-2">
              Join the community of global learners and start exploring today.
            </p>
            <div className="flex mt-3 flex-col sm:flex-row items-center w-full sm:w-[50%]  gap-3  overflow-hidden ">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-white flex-grow px-5 py-2 text-white outline-none rounded-[30px]  placeholder-white"
              />
              <button className="cursor-pointer flex items-center justify-center gap-2 bg-white rounded-[30px] text-[#E45F42] font-semibold px-8 py-2  transition-colors duration-200">
                Get Started
                <FaArrowRight size={22} className="border border-[#E45F42] rounded-full p-1 " />
              </button>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default BottomSection;
