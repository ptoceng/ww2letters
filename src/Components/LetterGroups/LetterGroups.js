import "./LetterGroups.scss";
import fortlewis from "../../assets/images/fortlewis.png";
import france from "../../assets/images/france.jpg";
import germany from "../../assets/images/germany.jpeg";
import austria from "../../assets/images/austria.jpeg";
import vedaynyc from "../../assets/images/vedaynyc.png";
import { Link } from "react-router-dom";



function LetterGroups() {
  return (
    <>
      <section className="lettergroup">
        <h2 className="lettergroup__title"> The Letters</h2>
        <div className="lettergroup__cards">
          <Link to={"/letters/fort-lewis"}>
            <div className="lettergroup__card">
              <img
                className="lettergroup__image"
                src={fortlewis}
                alt="fort lewis"
              />
              <span className="lettergroup__overlay-text">Fort Lewis</span>
            </div>
          </Link>
          <Link to={"/letters/france"}>
            <div className="lettergroup__card">
              <img className="lettergroup__image" src={france} alt="france" />
              <span className="lettergroup__overlay-text">France</span>
            </div>
          </Link>
          <Link to={"/letters/germany"}>
            <div className="lettergroup__card">
              <img className="lettergroup__image" src={germany} alt="germany" />
              <span className="lettergroup__overlay-text">Germany</span>
            </div>
          </Link>
          <Link to={"/letters/austria"}>
            <div className="lettergroup__card">
              <img className="lettergroup__image" src={austria} alt="Austria" />
              <span className="lettergroup__overlay-text">Austria</span>
            </div>
          </Link>
          <Link to={"/letters/postwar"}>
            <div className="lettergroup__card">
              <img
                className="lettergroup__image"
                src={vedaynyc}
                alt="postwarletters"
              />
              <span className="lettergroup__overlay-text">After the War</span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default LetterGroups;
