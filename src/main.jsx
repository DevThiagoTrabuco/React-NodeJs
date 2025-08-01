import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyles.jsx";
import UserProvider from "./context/UserContext.jsx";
import { ErrorPage } from "./pages/Error/ErrorPage.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Manager } from "./pages/Manager/Manager.jsx";
import { Post } from "./pages/Post/Post.jsx";
import { Profile } from "./pages/Profile/Profile.jsx";
import { Search } from "./pages/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/manager/:action/:id",
        element: <Manager />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
