import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/header";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="Routes">
      <Header />
      <Routes>
        <Route path="/portafolio_react" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
