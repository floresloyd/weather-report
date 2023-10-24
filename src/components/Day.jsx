import { useParams } from "react-router-dom";
function Day() {
  const { day } = useParams();
  console.log("test" + day);
  return (
    <div>
      <h1> render </h1>
    </div>
  );
}

export default Day;
