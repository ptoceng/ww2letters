import "./LettersPage.scss";
import Header from "../../Components/Header/Header";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link, useParams } from "react-router-dom";
import Letter from "../../Components/Letter/Letter";
import letters from "../../assets/data/mock.json";

function LettersPage() {
  let { category } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const filteredLetters = letters.letters.filter(
    (letter) => letter.category === category
  );

  let title;
  if (category === "fort-lewis") {
    title = "Fort Lewis";
  } else {
    title = capitalizeFirstLetter(category);
  }

  //Check for params
  //If there are no params, return to homepage
  //If there are params filter letters to that location

  return (
    <>
      <Header />
      <div className="returnhome">
        <Link to={"/"}>
          <h4 className="returnhome__text">Return to Home Page</h4>
        </Link>
        <h3 className="instructions">
          Click on the blue arrow icons on the images to view the pages of the
          original letters.
        </h3>
      </div>
      <div className="title__div">
        <h2 className="title__text">{title}</h2>
      </div>
      <section>
        {filteredLetters.map((letter) => {
          return <Letter key={letter.id} letter={letter} />;
        })}
      </section>
    </>
  );
}

export default LettersPage;
