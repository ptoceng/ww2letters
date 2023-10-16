import "./LettersPage.scss";
import Header from "../../Components/Header/Header";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { Link } from "react-router-dom";
import fortlewis from "../../assets/images/fortlewis.png";
import france from "../../assets/images/france.jpg";
import germany from "../../assets/images/germany.jpeg";

function LettersPage() {
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
      <section className="letters">
        <div className="letters__card">
          <h3 className="letters__card-title"></h3>
          <h4 className="letters__card-date">July 15th, 1943</h4>
          <ImageSlider />

          <p className="letters__card-text">
            Dear Cathleen,<br></br>
            <br></br>I received your letter and was very glad to hear from you,
            Im sorry i didnt write before this, this is the first UNKNOWN I took
            to myself in ten days, except for the weekend and I went out then,
            thats the only time I UNKNOWN go out, I have been sleeping in the
            field for the last week, and even now im on duty, all i have to do
            is answer the telephone and get the company up in the morning, as
            you see I dont have much time to myself. How have you been, and how
            did you enjoy your three day weekend? I bet you got plenty of rest,
            or did you, who wants to rest with three days off.<br></br>
            <br></br>
            UNKNOWN you think i was UNKNOWN to get back to army, did I look
            anxious to get back? If i did im a good actor. When I got in Tacoma,
            Wash I met some other fellows who were home and they left New York
            Sunday Morning and got back the same time I did, boy could I have
            kicked myself, I knew i should of left sunday. It was my mother who
            talked me into it, next time ill know better, if i have a next time,
            i hope not but thats the way it works now. I went down to Portland,
            Oregon last week and had a swell time. The only trouble was I had
            UNKNWON to sleep. All the hotel rooms were gone but i UNKNOWN
            without sleep, I did it before, remember? Sunday I saw a swell
            picture, Mr. Lucky with Cary Grant, it was very good you should see
            it. <br></br>
            <br></br>I have a letter from Mary and Hughie to answer, but I cant
            do that tonight. I havent written to my brother since I got back and
            he wrote to me and told me a thing or two, so I have to write to
            him. I guess i wrote the letter I enough, now ill try the letter U.
            How have you been? What have you been doing with yourself? What did
            you do with your three days? Are you still working hard? Im sending
            you my IOU so just hold on to it, but dont hold it too long.{" "}
            <br></br>
            <br></br> Its now 10PM and I have some work to do so I better close
            now. It was nice receiving your letter and you write a good letter,
            so write again and be a good girl. <br></br>
            <br></br>Love, <br></br>
            <br></br>Tom
          </p>
        </div>
      </section>
    </>
  );
}

export default LettersPage;
