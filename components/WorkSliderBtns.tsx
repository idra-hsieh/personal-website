"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const WorkSliderBtns = ({
  containerStyles = "",
  btnStyles = "",
  iconsStyles = "",
  isFirst = false,
  isLast = false,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {/* Left button: stays on the left, just invisible on first slide */}
      <button
        className={`
          ${btnStyles}
          ${isFirst ? "invisible pointer-events-none" : ""}
        `}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      {/* Right button: stays on the right, just invisible on last slide */}
      <button
        className={`
          ${btnStyles}
          ${isLast ? "invisible pointer-events-none" : ""}
        `}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
