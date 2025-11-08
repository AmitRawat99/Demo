import React from "react";
import { Container } from "react-bootstrap";
import { TiMessages } from "react-icons/ti";

function FlotingButton() {
  return (
    <>
      <section>
        <Container>
          <div className="bg-[#2430A0]  z-[909] rounded-full p-3 cursor-pointer fixed bottom-3 right-3">
            <TiMessages size={25} className="text-white"/>
          </div>
        </Container>
      </section>
    </>
  );
}

export default FlotingButton;
