import './App.css';
import { LandingPage } from "./pages/landingpage";
import { Route, Routes} from "react-router-dom";
import { MrOzmehak } from "./pages/mrOzmehak";
import { MrsOzmehak } from "./pages/mrsOzmehak";

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
