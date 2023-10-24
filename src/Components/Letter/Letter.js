import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";
import "./Letter.scss";

function Letter({ letter }) {
    window.scrollTo(0, 0)
  return (
    <>
      <div className="letters__card">
        <h3 className="letters__card-title"></h3>
        <h4 className="letters__card-date">{letter.date}</h4>
        <ImageSlider className="imageslider" images={letter.images} envelope={letter.envelope} />
        <p className="letters__card-text">{letter.text}</p>
      </div>
    </>
  );
}

export default Letter;
