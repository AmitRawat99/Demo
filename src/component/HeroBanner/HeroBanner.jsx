import React from 'react'
import { FaHeart } from "react-icons/fa";
import banner from '../../assets/img/Banner/banner.png'
import vector from '../../assets/img/Banner/vector.png'
import { FaArrowRight } from "react-icons/fa6";
import { Container } from 'react-bootstrap'
import FlotingButton from '../sections/FlotingButton';
import ScrollButton from '../sections/ScrollButton';

function HeroBanner() {
    return (
      <>
        <Container>
          <section className="px-5">
            <div className="flex items-center justify-between mt-4  ">
              <div className="flex  flex-col w-lg">
                <div>
                  <h2 className="flex items-center gap-3">
                    <span className="font-bold text-[35px] text-[#2430A0]">
                      Hobbies
                    </span>{" "}
                    <FaHeart className="text-red-500" size={22} />
                    <span className="font-bold text-[#2430A0] text-[35px]">
                      Happiness
                    </span>{" "}
                    <FaHeart className="text-red-500" size={22} />
                    <span className="font-bold text-[#2430A0] text-[35px]">
                      Home
                    </span>
                  </h2>
                  <p className="w-xl mt-2 mb-2 text-[30px] text-[#2430A0] font-secondary">
                    A Nordic startup which brings incredibly interesting hobbies
                    from around the world to people of all ages.
                  </p>
                </div>
                <div className=" mt-3 flex border rounded-lg items-center border border-[#2430A0]">
                  <input
                    className="py-2 px-2 outline-none flex-1"
                    type="text"
                    placeholder="Enter Your Email"
                  />
                  <button className="flex bg-[#2430A0] py-3 px-7 font-primary text-white font-bold rounded-lg items-center gap-2">
                    Start Exploring
                    <FaArrowRight
                      size={20}
                      className="cursor-pointer border border-white rounded-full  p-1 mt-1"
                    />
                  </button>
                </div>
              </div>
              <div className="relative  mr-[40px]">
                <img
                  className="w-sm mt-2 overflow-hidden rounded-xl"
                  src={vector}
                  alt="vector"
                />
                <div className="w-lg absolute -left-[50px] right-3  top-8">
                  <img src={banner} alt="banner" />
                </div>
              </div>
            </div>
          </section>
        </Container>
        <FlotingButton />
        <ScrollButton />
      </>
    );
}

export default HeroBanner
