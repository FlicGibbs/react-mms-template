import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,

      children: [
        { path: "", element: <Home /> },
        { path: "subjects", element: <Subjects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
