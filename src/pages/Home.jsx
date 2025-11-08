import React from "react";
import Banner from "../component/HeroBanner/HeroBanner.jsx";
import BottomSection from "../component/sections/BottomSection.jsx";
import Blog from "../share/Blog.jsx";
import Community from "../share/Community.jsx";
import Classes from "../component/sections/Classes.jsx";
import Category from "../share/Category.jsx";
import ChooseClass from "../component/sections/ChooseClass.jsx";
import Cards from "../component/sections/Cards.jsx";
import BecomeTeacher from "../share/BecomeTeacher.jsx";
import Team from "../share/Team.jsx";

function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <Classes />
      <Category />
      <ChooseClass />
      <Community />
      <Team />
      <BecomeTeacher />
      <Blog />
      <BottomSection />
      
    </>
  );
}

export default Home;
