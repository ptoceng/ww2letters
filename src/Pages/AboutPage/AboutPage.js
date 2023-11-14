import Header from "../../Components/Header/Header";
import AboutTom from "../../Components/AboutTom/AboutTom";
import { Link } from "react-router-dom";
import "./AboutPage.scss";

function AboutPage() {
    return (
        <>
        <Header />
        <div className="returnhome">
        <Link to={"/"}>
          <h4 className="returnhome__text">Return to Home Page</h4>
        </Link>
      </div>
        <AboutTom />
        </>
    );
}

export default AboutPage;
