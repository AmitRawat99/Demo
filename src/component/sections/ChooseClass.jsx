import React from "react";
import { Container } from "react-bootstrap";
import Choose1 from "../../assets/img/vectors/choose (1).png";
import Choose2 from "../../assets/img/vectors/choose (2).png";
import Choose3 from "../../assets/img/vectors/choose (3).png";
import Choose4 from "../../assets/img/vectors/choose (4).png";
import Choose5 from "../../assets/img/vectors/choose (5).png";
import Choose6 from "../../assets/img/vectors/choose (6).png";

function ChooseClass() {

  const chooseContent = [
    {
      ChooseImg: Choose1,
      ChooseTitle:
        "Interactive live online classes at your convenient time slots",
    },
    {
      ChooseImg: Choose2,
      ChooseTitle: "Learning from passionate, talented and trusted teachers",
    },
    {
      ChooseImg: Choose3,
      ChooseTitle:
        "Cross country sharing of interesting and unique hobbies from across the world",
    },
    {
      ChooseImg: Choose4,
      ChooseTitle:
        "Age no bar for enrolling into your cherished hobby or activity classes",
    },
    {
      ChooseImg: Choose5,
      ChooseTitle: "Transparent and structured fee payment options",
    },
    {
      ChooseImg: Choose6,
      ChooseTitle:
        "Contributing to the revival and nurturing of traditional art forms",
    },
  ];

  return (
    <section className="mt-[50px] mb-[50px]">
      <Container>
        {/* Section Title */}
        <div className="mb-6">
          <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl">
            Six reasons to choose our class
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseContent.map((item, idx) => (
            <div key={idx} className="flex flex-col  p-4  rounded-lg ">
              <img
                src={item.ChooseImg}
                alt={item.ChooseTitle}
                className="w-25 h-25 object-contain mb-4"
              />
              <h2 className="w-[250px] text-[#1B1F49] font-semibold text-lg">
                {item.ChooseTitle}
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ChooseClass;
