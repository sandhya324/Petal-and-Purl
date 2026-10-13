import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>

     {showScroll && <button onClick={ScrollToTop}  className="fixed  bottom-5 right-5 p-5 rounded-full bg-[#B84F70] hover:bg-[#F4B8C8] text-[white] hover:text-[#B84F70] border border-[#B84F85]">
        <span className="text-lg">
          <FaLongArrowAltUp />
        </span>
      </button>
     }
     
    </div>
  );
};

export default ScrollTop;
