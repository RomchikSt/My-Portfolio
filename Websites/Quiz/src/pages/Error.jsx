import ErrorPage from "../components/ErrorPage";
import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  const message = location.state?.message || "Page not found";

  return <ErrorPage message={message} />;
}

export default Error;
