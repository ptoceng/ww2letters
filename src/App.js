import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/Pages/HomePage/Homepage';
import About from "../src/Pages/AboutPage/AboutPage";
import LettersPage from '../src/Pages/LettersPage/LettersPage';
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ArtifactsPage from "../src/Pages/MoreArtifacts/MoreArtifacts";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About /> } />
    <Route path="/moreartifacts" element={<ArtifactsPage />} />
    <Route path="/letters/:category" element={<LettersPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
