import { Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import Books from "./components/Books";
import Header from "./components/Header";
import About from "./pages/About";
import AddNewBook from "./pages/AddNewBook";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/add-new-book" element={<AddNewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
