import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Team1 from "../assets/img/team/team (1).jpg";
import Team2 from "../assets/img/team/team (2).jpg";
import Team3 from "../assets/img/team/team (3).jpg";

function Team() {
  
  const TeacherTeam = [
    {
      TeacherProfile: Team1,
      TeacherName: "Karandeep",
      TeacherRole: "yoga",
    },
    {
      TeacherProfile: Team2,
      TeacherName: "Karandeep",
      TeacherRole: "arts & craft",
    },
    {
      TeacherProfile: Team3,
      TeacherName: "Karandeep",
      TeacherRole: "academics",
    },
    {
      TeacherProfile: Team1,
      TeacherName: "Olivia",
      TeacherRole: "yoga",
    },
  ];

  return (
    <>
      <section className="mt-[50px] mb-[50px]">
        <Container>
          <div className="mb-10">
            <h1 className="text-[#2430A0] font-bold text-3xl md:text-4xl mb-2">
              Meet our teachers
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <FaArrowLeft
                className="border border-[#2430A0] p-1 text-[#2430A0] cursor-pointer"
                size={30}
              />
              <FaArrowRight
                className="border border-[#2430A0] p-1 text-[#2430A0] cursor-pointer"
                size={30}
              />
            </div>

            {/* Teacher images */}
            <div className="relative">
              <div className="flex gap-4 teacher-profiles">
                {TeacherTeam.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 ">
                    <img
                      className="w-[280px] h-[250px] object-cover rounded-tl-[120px]"
                      src={item.TeacherProfile}
                      alt={item.TeacherName}
                    />
                    <h2 className="text-center font-semibold font-primary text-[20px]">
                      {item.TeacherName}
                    </h2>
                    <h2 className="text-center text-[#FF006D] font-bold font-primary text-[13px]">
                      {item.TeacherRole}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Team;
