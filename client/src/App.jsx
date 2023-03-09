import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import ActivityCreate from "./components/ActivityCreate/ActivityCreate";
import axios from "axios";

axios.defaults.baseURL = "https://deploy-production-4de2.up.railway.app/";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/info/:id" element={<Detail />} />
          <Route exact path="/activities" element={<ActivityCreate />} />
          {/* <Route exact path="/home/:id" element={Detail}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
