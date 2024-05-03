import "./App.css";
import UseEffect from "./Hooks/UseEffect";
import SlideShow from "./Hooks/SlideShow";
import UseState from "./Hooks/UseState";
import UseStateOne from "./Hooks/UseStateOne";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    const images = [
        "https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg",
        "https://media.geeksforgeeks.org/wp-content/uploads/20240103185847/black-hoodie.webp",
        "https://media.geeksforgeeks.org/wp-content/uploads/20240103185713/hoodie.jpg",
    ];
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/slideshow" element={<UseState />} />
                    <Route path="/usestate1" element={<UseStateOne />} />
                    <Route path="/useeffect" element={<UseEffect />} />
                    <Route path="/" element={<SlideShow images={images} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
