import React from "react";
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
        <Context.Provider value={'testorinjo'}>
            <div className="App dark:bg-gray-900">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/CalleOzmehak" element={<MrOzmehak/>}/>
                    <Route path="/AnnaOzmehak" element={<MrsOzmehak/>}/>
                </Routes>
                <Footer />
            </div>
        </Context.Provider>

    );
}

export default App;
