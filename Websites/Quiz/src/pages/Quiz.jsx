import Test from "../components/Test";
import { useParams, Navigate } from "react-router-dom";
import { testTheme } from "../data/testTheme";

function Quiz() {
  const { language, test } = useParams();
  const testNames = testTheme.map((theme) => theme.name);

  if (!testNames.includes(test)) {
    return (
      <Navigate to="/error" state={{ message: "The test does not exist." }} />
    );
  }

  return <Test />;
}

export default Quiz;
