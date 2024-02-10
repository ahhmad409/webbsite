import { Link } from "react-router-dom";

const Books = () => {
  return (
    <div className="text-center mt-10">
      <h1>Books</h1>
      <br /> <br />
      <Link to="/books/1">book 1</Link>
      <br />
      <Link to="/books/2">book 2</Link>
      <br />
      <Link to="/books/add-new-book">add new book</Link>
    </div>
  );
};

export default Books;
