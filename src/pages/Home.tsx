// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const uniqueId = uuidv4();
  console.log("Here is the code: ", uniqueId);

  return <h1>Home</h1>;
}
