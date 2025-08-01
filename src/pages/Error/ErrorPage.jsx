import { useRouteError } from "react-router";

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <h2>Algo deu errado.</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
