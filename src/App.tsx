import "./App.css";
import About from "./components/pages/About";
import Demo from "./components/pages/Demo";
import { Features } from "./components/landing/Features";
import Footer from "./components/landing/Footer";
import Hero from "./components/landing/Hero";
import { FloatingNavDemo } from "./components/landing/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Team from "./components/pages/Team";
import Dashboard from "./components/pages/Dashboard";
import Chat from "./components/pages/Chat";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
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
