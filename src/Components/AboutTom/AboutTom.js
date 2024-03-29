import "./AboutTom.scss";

function AboutTom() {
  return (
    <>
      <article className="abouttom">
        <h2 className="abouttom__title">About SGT. Thomas Patrick O'Connor</h2>
        <div className="sectionone">
          <div className="sectionone__imagediv">
            <a href="/images/tomwithfriend.webp" target="_blank">
              <img
                className="sectionone__image"
                src="/images/tomwithfriend.webp"
              ></img>
            </a>
            <p className="sectionone__image-txt">
              SGT. O'Connor, pictured left with a friend. aprox 1944
            </p>
          </div>
          <div className="sectionone__txt-div">
            <p className="sectionone__txt">
              The site contains letters my father wrote to my mother, his
              girlfriend at the time, during World War II. The letters were
              saved by my mother and kept in a dark colored suitcase in the
              basement of our house in Brooklyn for approximately 40 years.
              During this time, the suitcase was “off-limits,” my siblings
              (Cathleen, Jimmy and Patricia) and I thought it contained letters,
              but it was never opened. The suitcase was moved to Maine in the
              mid 1990s and kept in the basement of my house for approximately
              28 years until 2023. The letters span the period from 7/5/43 to
              8/30/45. I transcribed the letters, scanned original copies and my
              son Patrick developed this website which contains both original
              and transcribed versions. The letters are in order by date and
              were put into groups sorted by location. During this period, my
              father was between 25 and 27 and my mother was between 23 and 25.
            </p>
          </div>
        </div>
        <div className="sectiontwo">
          <div className="sectiontwo__imagesdiv">
            <div className="sectiontwo__imagediv">
              <a href="/images/caseclosed.webp" target="_blank">
                <img
                  className="sectiontwo__image"
                  src="/images/caseclosed.webp"
                ></img>
              </a>
              <p className="sectiontwo__image-txt">
                The letters as they were stored for 70 years
              </p>
            </div>
            <div className="sectiontwo__imagediv">
              <a href="/images/caseopen.webp" target="_blank">
                <img
                  className="sectiontwo__image"
                  src="/images/caseopen.webp"
                ></img>
              </a>
              <p className="sectiontwo__image-txt">Inside the case</p>
            </div>
          </div>
          <div className="sectiontwo__txt-div">
            <p className="sectiontwo__txt">
              I obtained a copy of my father's{" "}
              <a href="/images/dischargepaper.webp" target="_blank">
                Military Personnel File{" "}
              </a>{" "}
              and tracked the movement of his Division using on-line records. He
              joined the army on June 16th, 1941, and served until October 16th,
              1945. He was qualified as a combat infantryman and served as a
              radio operator in the 44th Infantry Division, 71st Regiment which
              was comprised of men from the New York and New Jersey areas. The
              Division was trained in Ft. Lewis, Washington and then went to
              Louisiana and Kansas for pre-deployment training.
              <br></br>
              <br></br>The 44th Division departed the United States via Boston
              and arrived by ship in France on September 15, 1944. The 44th
              Division marched across France and entered Germany in late March
              of 1945. While in Germany he was evacuated to Metz, France in
              April of that year to receive treatment for pneumonia and then
              returned to Germany. The Division was in Germany for approximately
              33 days, entered Austria for 4 days and then returned to France.
              The map on this website shows the movement of his Division in
              Europe during this period. The Division encountered enemy troops
              and was involved in numerous battles throughout this period. The
              total battle casualties of the 44th Division was 5,655 which
              included 1,038 men killed in action.
            </p>
            <p className="sectiontwo__txt-dsk">
            The Division returned to the United States on the Queen Elizabeth
              and entered New York harbor on July 21st, 1945 (NY Times article
              in More Artifacts Section). He was then assigned to Ft. Chaffee,
              Ark where he served until his release from Army on Oct. 16th,
              1945.
            </p>
          </div>
        </div>
        <div className="sectionthree">
          <div className="sectionthree__imagediv">
            <a href="/images/map.webp" target="_blank">
              <img src="/images/map.webp"></img>
            </a>
            <p className="sectionthree__image-txt">
              44th Infantry Division movements across Europe
            </p>
          </div>
          <div className="sectionthree__txt-div">
            <p className="sectionthree__txt">
              The Division returned to the United States on the Queen Elizabeth
              and entered New York harbor on July 21st, 1945 (NY Times article
              in More Artifacts Section). He was then assigned to Ft. Chaffee,
              Ark where he served until his release from Army on Oct. 16th,
              1945.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default AboutTom;
