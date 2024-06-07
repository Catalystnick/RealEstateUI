import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/singlePage";
import Profile from "./routes/profile/profile";
import LoginPage from "./routes/loginPage/loginPage";
import Register from "./routes/registerPage/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
