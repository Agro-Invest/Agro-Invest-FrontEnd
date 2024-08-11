import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";
import BrowseProjects from "./pages/browseProjects";
import ViewProdetails from "./pages/viewProdetails";
import CreateProject from "./pages/createProjects";
import MemAccounts from "./pages/memAccounts";
import Lobby from "./pages/lobby";
import InvestInProject from "./pages/investInProject";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "browseProjects",
        element: <BrowseProjects />,
      },
      {
        path: "viewProjects",
        element: <ViewProdetails />,
      },
      {
        path: "createProject",
        element: <CreateProject />,
      },
      {
        path: "memAccounts",
        element: <MemAccounts />,
      },
      {
        path: "lobby",
        element: <Lobby />,
      },
      {
        path: "invest",
        element: <InvestInProject />,
      },
    ],
  },

  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
