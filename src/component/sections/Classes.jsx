import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classess from "../../assets/img/sections_img/classess.jpg";
import { FaStar } from "react-icons/fa";

function Classes() {
  const [active, setActive] = useState("NOK"); 

  const Classess = [
    {
      classImg: classess,
      classLanguage: "Language",
      classDiscount: "60% OFF",
      classTitle: "Class name - Lorem ipsum sit elit varsit lectusi sit amet",
      classAuther: "by John Doe",
      classRating: "4.7",
      classDescription:
        "Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
      classPrice: "kr1000",
      classOrignPrice: "kr2000",
    },
    {
      classImg: classess,
      classLanguage: "Language",
      classDiscount: "60% OFF",
      classTitle: "Class name - Lorem ipsum sit elit varsit lectusi sit amet",
      classAuther: "by John Doe",
      classRating: "4.7",
      classDescription:
        "Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
      classPrice: "kr1000",
      classOrignPrice: "kr2000",
    },
    {
      classImg: classess,
      classLanguage: "Language",
      classDiscount: "60% OFF",
      classTitle: "Class name - Lorem ipsum sit elit varsit lectusi sit amet",
      classAuther: "by John Doe",
      classRating: "4.7",
      classDescription:
        "Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
      classPrice: "kr1000",
      classOrignPrice: "kr2000",
    },
    {
      classImg: classess,
      classDiscount: "60% OFF",
      classLanguage: "Language",
      classTitle: "Class name - Lorem ipsum sit elit varsit lectusi sit amet",
      classAuther: "by John Doe",
      classRating: "4.7",
      classDescription:
        "Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...",
      classPrice: "kr1000",
      classOrignPrice: "kr2000",
    },
  ];

  const togglePrice = (currency) => {
    setActive(currency);
  };

  return (
    <section>
      <Container>
        {/* Header */}
        <div className="mt-[80px]  flex flex-col md:flex-row justify-between items-start md:items-center mb-[30px] gap-2">
          <div>
            <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl mb-2">
              Discover classes{" "}
              <span className="uppercase text-[#E25753] text-[14px] border-b border-[#E25753] font-bold cursor-pointer">
                Show All
              </span>
            </h1>
            <p className="text-gray-600">
              Choose from a variety of classes from around the world.
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Show prices in:</span>
            <div className="flex rounded-[40px] overflow-hidden border border-gray-300">
              <button
                onClick={() => togglePrice("NOK")}
                className={`px-4 cursor-pointer py-1 transition ${
                  active === "NOK"
                    ? "bg-[#2430A0] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                NOK
              </button>
              <button
                onClick={() => togglePrice("INR")}
                className={`px-4 py-1 cursor-pointer transition ${
                  active === "INR"
                    ? "bg-[#2430A0] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                INR
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid mb-[40px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Classess.map((cls, idx) => (
            <div
              key={idx}
              className="bg-[#E9EFFF] overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={cls.classImg}
                  alt={cls.classTitle}
                  className="w-full h-48 object-cover  mb-4"
                />
                <span className="absolute top-3 left-3 bg-white text-[#2430A0] text-[14px] font-bold px-2 py-1 rounded">
                  {cls.classDiscount}
                </span>
              </div>
              <div className="px-3">
                <h2 className="text-[#2430A0] font-semibold font-primary text-lg mb-2">
                  {cls.classLanguage}
                </h2>
                <h2 className="text-[#1B1B1B] font-secondary font-semibold text-lg mb-2">
                  {cls.classTitle}
                </h2>
                <div className="flex items-center gap-3">
                  <p className="text-gray-500 text-sm mb-2">
                    {cls.classAuther}
                  </p>
                  <p className="text-yellow-500 font-semibold font-primary mb-2 flex items-center gap-2  ">
                    <FaStar className="text-[#FFB051]" /> {cls.classRating}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {cls.classDescription}
                </p>

                <div className="flex items-center justify-between rounded-[1px] bg-[#2430A0] px-2 py-1 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">
                      {cls.classPrice}
                    </span>
                    <span className="text-gray-400 line-through">
                      {cls.classOrignPrice}
                    </span>
                  </div>
                  <button className="px-4 py-1 bg-[#2430A0]  font-primary text-white rounded font-bold">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Classes;
