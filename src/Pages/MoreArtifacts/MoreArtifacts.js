import Header from "../../Components/Header/Header";
import MoreArtifacts from "../../Components/MoreArtifacts/MoreArtifacts";
import { Link } from "react-router-dom";


function ArtifactsPage() {
    return (
        <>
        <Header />
        <div className="returnhome">
        <Link to={"/"}>
          <h4 className="returnhome__text">Return to Home Page</h4>
        </Link>
      </div>
        <MoreArtifacts />
        </>
    );
}

export default ArtifactsPage;
