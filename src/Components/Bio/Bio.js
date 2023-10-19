import "./Bio.scss";

function Bio() {
  return (
    <>
      <section className="bio">
        <div className="bio__text__image-div">
          <div className="bio__title-div">
            <h2 className="bio__title"> Thomas Patrick O'Connor</h2>
          </div>
          <div>
            <img className = "bio__headshot--mobile" src="./images/TPOC.png" />
          </div>
          <div className="bio__textbutton-div">
            <p className="bio__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="bio__buttons-container">
            <button className="bio__buttons-button">Learn More</button>
          </div>
          </div>
          <div>
          <img className="bio__headshot" src="/images/TPOC.png" />
          </div>
      </section>
    </>
  );
}

export default Bio;
