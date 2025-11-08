import React from "react";
import Teacher from "../assets/img/sections_img/teacher.png";
import vector from "../assets/img/Banner/Vector.png";
import { Container } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

function BecomeTeacher() {
  return (
    <>
      <section>
        <Container>
          <div className="flex items-center justify-between py-5 px-5">
            <div className="relative">
              <img className="w-100" src={vector} alt="vector" />
              <div className="w-lg absolute -left-10 bottom-5">
                <img src={Teacher} alt="Teacher" />
              </div>
            </div>
            <div>
              <h1 className="text-[#2430A0] font-bold w-xl text-[50px] font-secondary">
                Become a certified teacher
              </h1>
              <p className="w-[440px] mt-2 mb-2 text-[#51557D] text-[16px] font-primary">
                We only have the best and trusted teachers from the globe. Join
                us if you have the skill and passion to share it.
              </p>
              <ul>
                <li className="text-[#51557D] flex items-center gap-2 font-primary mb-3">
                  <FaCheck
                    className="bg-[green] text-white rounded-full p-1"
                    size={25}
                  />
                  Make your own schedule
                </li>
                <li className="text-[#51557D] flex items-center gap-2 font-primary mb-3">
                  <FaCheck
                    className="bg-[green] text-white rounded-full p-1"
                    size={25}
                  />
                  Teach students on an international platform
                </li>
                <li className="text-[#51557D] flex items-center gap-2 font-primary mb-5">
                  <FaCheck
                    className="bg-[green] text-white rounded-full p-1"
                    size={25}
                  />
                  Become part of an international community of passionate
                  educators
                </li>
              </ul>
              <button className="flex items-center gap-2 cursor-pointer uppercase bg-[#2430A0] font-extrabold font-secondary text-[14px] py-3 px-7 rounded-[24px] text-white ">
                Starting Teaching
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BecomeTeacher;
