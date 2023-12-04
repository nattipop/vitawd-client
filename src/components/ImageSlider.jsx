import { useState } from "react";

const ImageSlider = ({ logos }) => {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div id="img-slider-div">
      <h1 className="slider-arrows" id="back-arrow" onClick={() => {
        if(currentIndex === 0) {
          return setCurrentIndex(logos.length - 3)
        }
        return setCurrentIndex(currentIndex - 3)
      }}>{"<"}</h1>
      <div className="row" id="slider-row">
        <div className="col slider-images-divs">
          <img className="slider-current-images" src={logos[currentIndex].src} alt="" title={logos[currentIndex].title} />
          <h3 className="logo-title">{logos[currentIndex].title}</h3>
          <p className="logo-desc">{logos[currentIndex].description}</p>
        </div>
        <div className="col slider-images-divs">
          <img className="slider-current-images" src={logos[currentIndex + 1].src} alt="" title={logos[currentIndex + 1].title} />
          <h3 className="logo-title">{logos[currentIndex + 1].title}</h3>
          <p className="logo-desc">{logos[currentIndex + 1].description}</p>
        </div>
        <div className="col slider-images-divs">
          <img className="slider-current-images" src={logos[currentIndex + 2].src} alt="" title={logos[currentIndex + 2].title} />
          <h3 className="logo-title">{logos[currentIndex + 2].title}</h3>
          <p className="logo-desc">{logos[currentIndex + 2].description}</p>
        </div>
      </div>
      <h1 className="slider-arrows" id="forward-arrow" onClick={() => {
        if(currentIndex === (logos.length - 3)) {
          return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 3)
        }}>{">"}</h1>
    </div>
  )
}

export default ImageSlider;