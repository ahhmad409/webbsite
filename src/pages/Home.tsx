import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const uniqueId = uuidv4();
  console.log("UUID:", uniqueId);

  return <h1 className="text-center mt-10">Home</h1>;
}
