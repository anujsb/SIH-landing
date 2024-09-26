import "./App.css";
import About from "./components/pages/About";
import Demo from "./components/pages/Demo";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { FloatingNavDemo } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Team from "./components/pages/Team";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <FloatingNavDemo />
                <Hero />
                <Features />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <FloatingNavDemo />
                <About />
                <Footer />
              </div>
            }
          />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/team"
            element={
              <div>
                <FloatingNavDemo />
                <Team />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
