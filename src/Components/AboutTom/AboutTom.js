import "./AboutTom.scss";

function AboutTom() {
  return (
    <>
      <section className="abouttom">
        <h2 className="abouttom__title">About SGT. Thomas Patrick O'Connor</h2>
        <div className="abouttom__section-one">
          <div className="abouttom__image-div">
            <img
              className="abouttom__image-friends"
              src="/images/tomwithfriend.png"
            ></img>
            <p className="abouttom__image-text">
              SGT. O'Connor, pictured left with a friend. aprox 1944
            </p>
          </div>
          <div>
            <p className="abouttom__text text1">
              The letters contained on this site letters were written by Thomas
              P. O’Connor during his time in the Army during World War II. The
              letters were saved by Catherine O’Connor and kept in a dark
              colored suitcase for many years. The suitcase was in the basement
              of the house we grow up in Brooklyn for approximately 40 years
              from the mid-1950s until 1993. During this time the suitcase was
              “off-limits,” it was known to contain letters but was never
              opened. The suitcase was moved to Maine in 1994 and kept in the
              basement of our house for about 28 years until 2021. The suitcase
              was opened in 2021 and found that it contained approximately 60
              letters. The letters span the period from 7/5/43 to 8/30/45.
              During the period when the letters were written, Dad / Grandpa was
              between 25 and 27 and Mom / Grandma was between 23 and 25 years
              old.{" "}
            </p>
          </div>
        </div>
        <div className="abouttom__section-two">
          <div className="abouttom__image-div">
            <img
              className="abouttom__image-closedcase"
              src="/images/caseclosed.png"
            ></img>
            <p className="abouttom__image-text">
              {" "}
              The letters as they were stored for 70 years
            </p>
          </div>
          <div className="abouttom__image-div">
            <img
              className="abouttom__image-opencase"
              src="/images/caseopen.png"
            ></img>
            <p className="abouttom__image-text"> Inside the case</p>
          </div>
        </div>

        <p className="abouttom__text">
          I obtained a copy of his Military Personnel File (copy is below) and
          tracked the movement of his division using on-line web sites. He
          joined the army on June 16, 1941, and served until October 16, 1945.
          He was a member of the 44th Infantry Division, 71st Regiment which was
          initially comprised of men from the New York and New Jersey area. The
          Division was trained in Fort Lewis, Washington and then went to
          Louisiana and Kansas for predeployment training.{" "}
        </p>

        <p className="abouttom__text">
          The 44th division departed the United States via Boston and arrived by ship in
          France on September 15, 1944. The 44th Division marched across the
          width of France and entered Germany in late March of 1945. Dad /
          Grandpa was evacuated to Metz, France in April of 1945 to receive
          treatment for pneumonia and then returned to Germany. The Regiment was
          in Germany for approximately 33 days and then entered Austria for 4
          days. The Division encountered enemy troops and was involved in
          numerous battles with German forces throughout this period. The total
          repotted battle casualties of the 44th Division was 5,655 which
          included 1,038 men killed in action.{" "}
        </p>
        <div className="abouttom__image-div">
          <img className="abouttom__image" src="./images/map.png"></img>
          <p className="abouttom__image-text">
            {" "}
            44th Infantry Division movements across Europe
          </p>
        </div>
        <p className="abouttom__text">
          The Division returned to France and then the United States on the
          Queen Elizabeth cruise ship which entered New York harbor on July
          21st, 1945 with over 14,000 men. He was discharged from the Army on
          October 16, 1945, with the rank of Sergeant (Technician 4th Grade,
          discharge certificate is below). The letters dated from September 15,
          1944 to May 4, 1945 were written while the army was in the field and
          were censored prior to delivery. The dates given in the text of the
          letters are different than the postmark dates on the envelopes. Dad /
          Grandpa almost never talked about the war or his service. He said he
          was in France, that he was involved in the Battle of the Bulge, and he
          came back to the United States on the Queen Elizabeth but besides that
          we knew almost nothing about his service.
        </p>
        <div className="abouttom__image-div">
          <img className="abouttom__image" src="./images/returnship1.png"></img>
          <p className="abouttom__image-text">
            {" "}
            The 44th division returned to great fanfare abord the Queen Mary
          </p>
        </div>
        <div className="abouttom__image-div">
          <img className="abouttom__image" src="./images/returnship2.png"></img>
          <p className="abouttom__image-text">
            {" "}
            The men of the 44th after returning to New York
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutTom;
