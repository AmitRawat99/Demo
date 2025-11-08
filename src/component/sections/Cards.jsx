import React from "react";
import { Container } from "react-bootstrap";
import Carsd1 from "../../assets/img/sections_img/cards (1).png";
import Carsd2 from "../../assets/img/sections_img/cards (2).png";
import Carsd3 from "../../assets/img/sections_img/cards (3).png";
import Carsd4 from "../../assets/img/sections_img/cards (4).png";
import vector from "../../assets/img/vectors/drop-icon.png";

function Cards() {
  const CardsContent = [
    {
      CardsImg: Carsd4,
      CardsTitle: "Learn something new",
      CardsDescription:
        "Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography.",
    },
    {
      CardsImg: Carsd3,
      CardsTitle: "Skilled & Passionate Teachers",
      CardsDescription:
        "We offers Interactive classes by experts who are qualified and trusted.",
    },
    {
      CardsImg: Carsd2,
      CardsTitle: "Take classes anytime, anywhere",
      CardsDescription:
        "Join sessions at your own convenience and pace, from the comforts of your home.",
    },
    {
      CardsImg: Carsd1,
      CardsTitle: "Pay as you go",
      CardsDescription:
        "No enrollment fee for our classes. You only pay for the classes that you take. Your payment is safe and secure with us.",
    },
  ];

  return (
    <>
      <section className="relative bottom-3 m-auto flex justify-center">
        <img className="w-20" src={vector} alt="drop-down" />
      </section>

      <section className="mt-[50px] mb-[50px]">
        <Container>
          {/* Section Title */}
          <div className="mb-6">
            <h1 className="w-[500px] text-center m-auto text-[#2430A0] font-bold text-3xl">
              Explore. Enroll. Have Fun. Repeat - here hobby meets happiness
            </h1>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CardsContent.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-lg"
              >
                <img
                  src={card.CardsImg}
                  alt={card.CardsTitle}
                  className="w-20 h-20 object-contain mb-4"
                />
                {/* Full-width title */}
                <h2 className="w-full font-semibold text-[#2430A0] text-center  text-[20px] mb-2">
                  {card.CardsTitle}
                </h2>
                <p className="text-[#51557D] text-[15px]">
                  {card.CardsDescription}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Cards;
