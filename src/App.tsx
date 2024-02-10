import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
