import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/header";
import { Home } from "./Components/Home";
import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
// import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    // ScrollReveal({ reset: "true" });
    // console.log("hola");
  }, []);

  return (
    <div className="Routes">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
