import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Vector1 from "../../assets/img/vectors/Vector (1).png";
import Vector2 from "../../assets/img/vectors/Vector (2).png";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Language",
      submenus: ["English", "French", "Spanish", "German"],
    },
    {
      name: "Cooking",
      submenus: ["Baking", "Indian Cuisine", "Italian", "Desserts"],
    },
    {
      name: "Music",
      submenus: ["Guitar", "Piano", "Drums", "Singing"],
    },
    {
      name: "Arts & Craft",
      submenus: ["Painting", "Drawing", "Pottery"],
    },
    {
      name: "Yoga",
      submenus: ["Beginner", "Advanced", "Meditation"],
    },
    {
      name: "Academics",
      submenus: ["Math", "Science", "History"],
    },
    {
      name: "Back to Roots",
      submenus: ["Culture", "Traditional Arts"],
    },
    {
      name: "Sports",
      submenus: ["Football", "Cricket", "Tennis"],
    },
  ];

  return (
    <>
      <header
        className={`relative w-full border-b border-gray-200  ${
          dropdownOpen ? "bg-[#E9EFFF]" : "bg-white"
        }`}
      >
        {/* Header section  */}

        <div className="max-w-[1250px] mx-auto px-4">
          <div className="flex items-center justify-between py-3 relative z-10">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-2xl text-[#2430A0]">Logo</h1>

              <div
                className="flex items-center gap-2 cursor-pointer select-none relative"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-[20px] font-medium text-[#2430A0]">
                  Categories
                </span>
                <IoMdArrowDropdown
                  size={22}
                  className={`text-[#2430A0] transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[#2430A0] font-bold uppercase text-[18px]">
                Tech
              </button>
              <button className="px-6 py-2 border border-[#2430A0] rounded-[24px] font-bold text-[#2430A0]">
                Login
              </button>
              <button className="px-6 py-2 bg-[#2430A0] text-white rounded-[24px] font-bold">
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute left-0 top-full w-full bg-[#E9EFFF] shadow-lg border-t border-gray-200 z-20">
            <div className="max-w-[1250px] mx-auto flex relative px-6 py-6 gap-6">
              {/* Left Column */}
              <div className="w-full flex flex-col justify-between border-r border-gray-200">
                {/* Category List */}

                <div className=" flex justify-between w-full gap-2 p-2">
                  <div className="w-sm flex flex-col">
                    {categories.map((cat, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          setActiveCategory(
                            activeCategory === cat.name ? null : cat.name
                          )
                        }
                        className={`px-4 py-2 rounded-lg cursor-pointer text-[18px] font-medium transition-all flex justify-between items-center ${
                          activeCategory === cat.name
                            ? "bg-[#FB7356] text-white"
                            : "hover:bg-gray-100 text-gray-800"
                        }`}
                      >
                        {cat.name}
                        <IoMdArrowDropdown
                          className={`transition-transform ${
                            activeCategory === cat.name ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-4 flex justify-center">
                    <img
                      src={Vector2}
                      alt="Vector Illustration"
                      className="max-w-[350px] h-auto object-contain"
                    />
                    <div className="w-[350px] absolute top-[15px] right-[10px]">
                      <img src={Vector1} alt="vector-img" className="relative" />
                      <div className="absolute top-[70px] left-[30px]">
                        <h1 className="text-[35px] text-white font-secondary">“Do anything, but let it produce joy.”</h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image at bottom */}
              </div>

              {/* Right Column - Submenu */}

              {activeCategory && (
                <div className="absolute left-[35%]  top-[25px] w-[13%] bg-[#E9EFFF]  rounded-lg p-6 ">
                  <h3 className="text-xl font-semibold text-[#2430A0] mb-3">
                    {activeCategory}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {categories
                      .find((c) => c.name === activeCategory)
                      ?.submenus.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="px-3 py-2 text-[16px] text-gray-700 hover:bg-[#E9EFFF] hover:text-[#2430A0] rounded cursor-pointer transition"
                        >
                          {sub}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
