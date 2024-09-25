import "./App.css";
import About from "./components/About";
import Demo from "./components/Demo";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { FloatingNavDemo } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Team from "./components/Team";

function App() {
  return (
    <BrowserRouter>
      <FloatingNavDemo />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Features />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter className="">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/SignIn" element={<SignIn />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Profile" element={<Profile />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </BrowserRouter>
