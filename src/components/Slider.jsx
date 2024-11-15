import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 32000, easing: (t) => t };

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="gap-0">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img
            className="h-64"
            src="https://i.ibb.co/kMWPs6s/3358de90f79c48beb04f693f990ee0d4.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            className="h-64"
            src="https://i.ibb.co/2MvGc3P/thumbs-b-c-7696e7ab1324ce94d8fddd9aeb4feff9.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            className="h-64"
            src="https://i.ibb.co/hs8FnY0/Celeb-Roomies04.jpg"
            alt=""
          />
        </div>

        <div className="keen-slider__slide number-slide5">
          <img
            className="h-64"
            src="https://i.ibb.co/4PCwSXV/thumbs-b-c-2a74618202976c4428ce34ae57a27678.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img
            className="h-64"
            src="https://i.ibb.co/TLCBFTv/cameron-venti-6-QDvwq2-Fjsc-unsplash-scaled.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
