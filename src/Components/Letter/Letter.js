import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";
import "./Letter.scss";

function Letter({ letter }) {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="letters__card">
        <h4 className="letters__card-date">{letter.date}</h4>
        <div className="letters__card--imagetextdiv">
          <ImageSlider
            className="imageslider"
            images={letter.images}
            envelope={letter.envelope}
          />
          <p
            className="letters__card-text"
            dangerouslySetInnerHTML={{ __html: letter.text }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default Letter;
