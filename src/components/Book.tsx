import { Params, useParams } from "react-router-dom";

const Book = () => {
  const { id }: Readonly<Params<string>> = useParams();
  return <h1 className="text-center mt-10">Book {id ?? "unknown"} </h1>;
};

export default Book;
