import "./LettersPage.scss";
import Header from "../../Components/Header/Header";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link, useParams } from "react-router-dom";
import Letter from "../../Components/Letter/Letter";
import letters from "../../assets/data/mock.json";

function LettersPage() {
  let { category } = useParams();

  //Check for params
  //If there are no params, return to homepage
  //If there are params filter letters to that location

  const filteredLetters = letters.letters.filter(
    (letter) => letter.category === category
  );
  console.log(filteredLetters);

  return (
    <>
      <Header />
      <div className="returnhome">
        <Link to={"/"}>
          <h4 className="returnhome__text">Return to Home Page</h4>
        </Link>
      </div>
      <div className="title__div">
        <h2 className="title__text">Fort Lewis</h2>
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
