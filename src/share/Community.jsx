import React from "react";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import Community1 from "../assets/img/community/community1.jpg";
import Community2 from "../assets/img/community/community2.jpg";
import Community3 from "../assets/img/community/community3.jpg";

function Community() {
  const CommunityData = [
    {
      CommunityImg: Community1,
      CommunityName: "Karandeep",
      bgcolor: "#D3DEEC",
      textColor: "#2430A0",
      quoteColor: "#aec9ecff",
      CommunityDescription:
        "It is nice to be on an international platform where there are teachers from around the world.",
    },
    {
      CommunityImg: Community2,
      CommunityName: "Kalpana",
      bgcolor: "#2430A0",
      textColor: "#FFFFFF",
      quoteColor: "#F2CDA0",
      CommunityDescription:
        "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
    },
    {
      CommunityImg: Community3,
      CommunityName: "Kirti",
      bgcolor: "#D3DEEC",
      textColor: "#2430A0",
      quoteColor: "#aec9ecff",
      CommunityDescription:
        "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl mb-2">
            Love from community
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center relative pb-10">
          {CommunityData.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 max-w-sm w-full border border-gray-200"
              style={{ backgroundColor: item.bgcolor, color: item.textColor }}
            >
              {/* Quote Icon */}

              <FaQuoteLeft
                className="absolute top-4 left-4 text-2xl"
                style={{ color: item.quoteColor }}
              />

              {/* Image */}
              <div className="flex justify-center mb-4 mt-6">
                <img
                  src={item.CommunityImg}
                  alt={item.CommunityName}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Name */}
              <h2
                className="text-center text-lg font-semibold mb-2"
                style={{ color: item.textColor }}
              >
                {item.CommunityName}
              </h2>

              {/* Description */}

              <p
                className="text-center text-sm leading-relaxed"
                style={{
                  color: item.textColor === "#FFFFFF" ? "#E0E0E0" : "#4B5563",
                }}
              >
                {item.CommunityDescription}
              </p>
            </div>
          ))}

          {/* “fake scroll bar” */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-[3px] bg-[#2430A0] via-orange-500 to-yellow-500 rounded-full shadow-md"></div>
        </div>
      </Container>
    </section>
  );
}

export default Community;
