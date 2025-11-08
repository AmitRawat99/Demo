import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className="bg-[#2430A0] fixed bottom-20 right-3 z-[999] rounded-full p-3 cursor-pointer shadow-lg hover:bg-[#1b257a] transition-all"
        >
          <FaArrowUp size={22} className="text-white" />
        </div>
      )}
    </>
  );
}

export default ScrollButton;
