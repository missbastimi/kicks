import { Routes, Route } from "react-router-dom";

// layout
import Header from "./Components/Header";
import Footer  from "./Components/footer";

// pages

  function App() {
  return (
    <>
      {/* HEADER always visible */}
      <Header />

      {/* MAIN content area */}
      <main className="min-h-screen">
        <Routes>
          {/* Your pages */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      {/* FOOTER always visible */}
      <Footer />
    </>
  );
}

export default App;
