import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
// import Home from "./pages/HomePage.tsx";
import Login from "./components/Login.tsx";
import Genres from "./pages/Genres.tsx";
import Profile from "./components/Profile.tsx";
import MyReelRanks from "./pages/MyReelRanks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "genres",
        element: <Genres />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "reelranks",
        element: <MyReelRanks />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
}
