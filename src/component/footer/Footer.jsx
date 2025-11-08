import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footerimg from "../../assets/img/sections_img/footer_img.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer>
        <Container>
          <div className="flex justify-between py-5 mt-5">
            <div>
              <h2 className="text-[#2430A0] font-bold font-secondary capitalize mb-3 text-[18px]">
                class categories
              </h2>
              <ul className="text-[#51557D] cursor-pointer text-[14px] font-primary font-semibold ">
                <li className="mb-2">Language</li>
                <li className="mb-2">Cooking</li>
                <li className="mb-2">Music</li>
                <li className="mb-2">Arts & Craft</li>
                <li className="mb-2">Yoga</li>
                <li className="mb-2">Academic</li>
                <li className="mb-2">Back to roots</li>
                <li className="mb-2">funteresting</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#2430A0] font-bold font-secondary capitalize mb-3 text-[18px]">
                company
              </h2>
              <ul className="text-[#51557D] cursor-pointer text-[14px] font-primary font-semibold ">
                <li className="mb-3">About</li>
                <li className="mb-3">Careers</li>
                <li className="mb-3">Blog</li>
                <li className="mb-3">Contact</li>
                <li className="mb-3">Privacy Policy</li>
                <li className="mb-3">Terms & Conditions</li>
                <li className="mb-3">Refund Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#2430A0] font-bold font-secondary capitalize mb-3 text-[18px]">
                Learn
              </h2>
              <ul className="text-[#51557D] cursor-pointer text-[14px] font-primary font-semibold ">
                <li className="mb-3">all classes</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#2430A0] font-bold font-secondary capitalize mb-3 text-[18px]">
                Teach
              </h2>
              <ul className="text-[#51557D] cursor-pointer text-[14px] font-primary font-semibold ">
                <li className="mb-3">Become a teacher</li>
              </ul>
            </div>
            <div className="w-[281px] shadow-sm">
              <img src={footerimg} className="rounded-sm" alt="banner img" />
              <span className="text-center uppercase font-bold text-[13px] w-full block  bg-[#FFFFFF] text-[#2430A0] text-primary mt-2">
                sell your products with us
              </span>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left text */}
              <p className="text-sm text-[#51557D]">
                © Project 2021. All rights reserved.
              </p>

              {/* Center text */}
              <p className="text-sm">
                Made with <span className="text-red-500">❤️</span> by{" "}
                <span className="font-semibold text-black">SimplePlan</span>
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <FaFacebook
                  size={20}
                  className="text-[#7479A6] cursor-pointer hover:text-blue-500 transition-colors"
                />
                <FaSquareInstagram
                  size={20}
                  className="text-[#7479A6] cursor-pointer hover:text-pink-500 transition-colors"
                />
                <FaLinkedin
                  size={20}
                  className="text-[#7479A6] cursor-pointer hover:text-blue-400 transition-colors"
                />
                <FaTwitter
                  size={20}
                  className="text-[#7479A6] cursor-pointer hover:text-sky-400 transition-colors"
                />
                <FaYoutube
                  size={20}
                  className="text-[#7479A6] cursor-pointer hover:text-red-500 transition-colors"
                />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
