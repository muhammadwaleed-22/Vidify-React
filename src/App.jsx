import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import GenerateVideo from "./Components/GenerateVideo";
import PricingPlan from "./Components/PricingPlan";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-video" element={<GenerateVideo />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
