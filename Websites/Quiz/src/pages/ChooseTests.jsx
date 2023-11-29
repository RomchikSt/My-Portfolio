import Tests from "../components/Tests";
import { useParams, Navigate } from "react-router-dom";
import { languages } from "../data/languages";

function ChooseTests() {
  const { language } = useParams();

  if (!languages.includes(language)) {
    return (
      <Navigate
        to="/error"
        state={{ message: "The language does not exist." }}
      />
    );
  }

  return <Tests />;
}

export default ChooseTests;
