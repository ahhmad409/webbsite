import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-10">
      <h1>Resource you are looking for is not found!</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default NotFound;
