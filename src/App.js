import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/Pages/HomePage/Homepage';
import LettersPage from '../src/Pages/LettersPage/LettersPage';
import ImageSlider from "./Components/ImageSlider/ImageSlider";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/letters/:category" element={<LettersPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
