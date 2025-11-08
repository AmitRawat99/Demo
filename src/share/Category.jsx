import React from "react";
import { Container } from "react-bootstrap";
import category1 from "../assets/img/category/category (1).jpg";
import category2 from "../assets/img/category/category (2).jpg";
import category3 from "../assets/img/category/category (3).jpg";
import category4 from "../assets/img/category/category (4).jpg";
import category6 from "../assets/img/category/category (6).jpg";
import category7 from "../assets/img/category/category (7).jpg";
import category8 from "../assets/img/category/category (8).jpg";
import category9 from "../assets/img/category/category9.png";

function Category() {
  const categorys = [
    { categoryImg: category6, categoryTitle: "Language" },
    { categoryImg: category7, categoryTitle: "Cooking" },
    { categoryImg: category1, categoryTitle: "Music" },
    { categoryImg: category4, categoryTitle: "Arts & Craft" },
    { categoryImg: category8, categoryTitle: "Yoga" },
    { categoryImg: category9, categoryTitle: "Academics" },
    { categoryImg: category2, categoryTitle: "Back to Roots" },
    { categoryImg: category3, categoryTitle: "Back to Roots" },
  ];

  return (
    <section className="mt-[80px] mb-[50px]">
      <Container>
        {/* Section Title */}
        <div className="mb-6">
          <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl">
            Browse by category
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {categorys.map((cat, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[23%] flex flex-col items-center group relative"
            >
              <img
                src={cat.categoryImg}
                alt={cat.categoryTitle}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-[#2430A0] font-semibold text-center text-lg mt-3 relative">
                {cat.categoryTitle}

                {/* Hover underline */}
                <span className="absolute left-1/2 -bottom-2 w-0 h-1 bg-[#E25753] transition-all duration-300 group-hover:w-[100px] -translate-x-1/2"></span>
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Category;
