import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import ExecutiveScreen from "./screens/ExecutiveScreen";
import PastChairmenScreen from "./screens/PastChairmenScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/executives" element={<ExecutiveScreen />} />
          <Route path="/past-chairmen" element={<PastChairmenScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
