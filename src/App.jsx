import { Routes, Route } from "react-router-dom";

// layout
import LandingPage from "./Components/pages/landindPage";
import Header from "./Components/majorComponents/header";
import Footer  from "./Components/majorComponents/footer";
import Listing from "./Components/pages/listing"
import Register from "./Components/pages/register"
import Login from "./Components/pages/login"

// pages

  function App() {
  return (
    <>
      {/* HEADER always visible */}
      <Header />

      {/* MAIN content area */}
      <main className="min-h-screen pt-[9.5rem] pb-[10rem] bg-[#E7E7E3]">
        <Routes>
          {/* Your pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* FOOTER always visible */}
      <Footer />
    </>
  );
}

export default App;
