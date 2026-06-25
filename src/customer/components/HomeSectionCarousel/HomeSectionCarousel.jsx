import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";

const HomeSectionCarousel = () => {
  const [activeIndex,setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=() => setActiveIndex(activeIndex-1);
  const slideNext=() => setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          infinite
          disableButtonsControls
          mouseTracking
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== 0 &&(<button
        onClick={slidePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            zIndex: 50,
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon style={{ color: "black" }} />
        </button>)}

        {activeIndex!== items.length-5 &&(<button
        onClick={slideNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            zIndex: 50,
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
          aria-label="next"
        >
          <KeyboardArrowRightIcon style={{ color: "black" }} />
        </button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
