import { Link } from "react-router-dom";


export default function ErrorPage() {
  

  return (
    <div id="error-page" className="flex flex-col justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>click here</i>
      </p>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
}