import React from "react";
import blog1 from "../assets/img/blogs/blog1.jpg";
import blog2 from "../assets/img/blogs/blog2.jpg";
import blog3 from "../assets/img/blogs/blog3.jpg";
import { Container } from "react-bootstrap";
import { FaRegComment } from "react-icons/fa6";

function Blog() {
  const blogs = [
    {
      blogTitle:
        "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
      BlogImg: blog1,
      BlogPeragraph:
        "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
      BlogDirector: "Publisher name",
      BlogComments: "0",
      BlogCategory: "Category 01",
    },
    {
      blogTitle:
        "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
      BlogImg: blog2,
      BlogPeragraph:
        "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
      BlogDirector: "Publisher name",
      BlogComments: "12",
      BlogCategory: "Category 02",
    },
    {
      blogTitle:
        "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
      BlogImg: blog3,
      BlogPeragraph:
        "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
      BlogDirector: "Publisher name",
      BlogComments: "0",
      BlogCategory: "Category 03",
    },
  ];

  return (
    <>
      <Container>
        <section>
          <div className="mb-[20px] mt-[60px]">
            <div className=" flex items-center gap-5">
              <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl mb-2">
                Our blogs
              </h1>
              <span className="mt-5 uppercase text-[14px] text-[#E25753] font-primary border-b border-[#E25753] font-extrabold cursor-pointer">
                show ALl{" "}
              </span>
            </div>
            <div className="flex flex-wrap justify-between mt-3 mb-5 ">
              {/* Card 1 */}
              {blogs.map((blogs, idx) => {
                return (
                  <div
                    key={idx}
                    className="max-w-sm w-full lg:w-[352px] relative rounded-xl overflow-hidden  px-3 py-3 "
                  >
                    <img
                      src={blogs.BlogImg}
                      alt="Blog 1"
                      className="w-full rounded-xl h-52 object-cover"
                    />
                    <div>
                      <h2 className="font-semibold mt-2 text-[#1B1F49] text-[18px] mb-2">
                        {blogs.blogTitle}
                      </h2>
                      <p className="text-[#51557D] text-sm mt-2 mb-3 font-primary">
                        {blogs.BlogPeragraph}
                      </p>
                      <div className="flex items-center justify-between border-t border-gray-300 py-2 text-gray-500 text-sm">
                        <p className="font-medium text-[#2430A0]  font-bold">
                          {blogs.BlogDirector}
                        </p>
                        <div className="flex items-center gap-2">
                          <FaRegComment />
                          <span>{blogs.BlogComments} Comments</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="absolute top-5 left-5 bg-[#E25753] text-[#E25753] text-[12px] font-bold bg-white text-xs px-2 py-1 rounded">
                        {blogs.BlogCategory}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Blog;
