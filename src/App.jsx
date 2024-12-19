import { Routes, Route } from "react-router";

import "./App.css";
import Homepage from "./components/homepage/homepage";
import Services from "./components/services/services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
