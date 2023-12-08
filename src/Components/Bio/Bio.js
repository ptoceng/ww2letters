import "./Bio.scss";
import { Link } from "react-router-dom";

function Bio() {
  return (
    <>
      <section className="bio">
        <div className="bio__text__image-div">
          <div className="bio__title-div">
            <h2 className="bio__title"> Sgt. Thomas Patrick O'Connor</h2>
          </div>
          <div>
            <img className="bio__headshot--mobile" src="./images/TPOC.webp" />
          </div>
          <div className="bio__textbutton-div">
            <p className="bio__text">
            Sergeant Thomas Patrick O’Connor served with the 44th Division during World War II from 1941 - 1945. This project aims to tell the story of his service though the letters he sent home to his girlfriend (and later wife) Catherine O’Connor. The letters span the years 1943 - 1945 and cover his time in Ft. Lewis (where he trained), France, Germany, Austria, and after his return.
            </p>
          </div>
          <div className="bio__buttons-container">
            <Link className="link" to={"/about"}>
              {" "}
              <button className="bio__buttons-button">Learn More</button>
            </Link>
            <Link className="link" to={"/moreartifacts"}>
             
              <button className="bio__buttons-button">More Artifacts</button>{" "}
            </Link>
          </div>
        </div>
        <div>
          <img className="bio__headshot" src="/images/TPOC.webp"/>
        </div>
      </section>
    </>
  );
}

export default Bio;
