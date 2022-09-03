import './App.css';
import {LandingPage} from "./pages/LandingPage";
import {Route, Routes} from "react-router-dom";
import {MrOzmehak} from "./pages/MrOzmehak";
import {MrsOzmehak} from "./pages/MrsOzmehak";
import Context from "./Context";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/CalleOzmehak" element={<MrOzmehak />} />
                <Route path="/AnnaOzmehak" element={<MrsOzmehak />} />
            </Routes>
    </div>
  );
}

export default App;
