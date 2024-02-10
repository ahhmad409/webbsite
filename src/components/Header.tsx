import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="">
        <ul className="flex justify-center items-center gap-3 bg-slate-600 text-slate-200 py-3 mb-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
