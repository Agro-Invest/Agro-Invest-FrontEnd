import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";
import BrowseProjects from "./pages/browseProjects";
import ViewProdetails from "./pages/viewProdetails";
import CreateProject from "./pages/createProjects";
import MemAccounts from "./pages/memAccounts";
import Lobby from "./pages/lobby";
import InvestInProject from "./pages/investInProject";
import DashboardLayout from "./pages/dashboard/layout";
import Dashboard from "./pages/dashboard/pages/dashboard";
import ProjectMgt from "./pages/dashboard/pages/projectMgt";
import FinancialServices from "./pages/dashboard/pages/financialServices";
import SelectRole from "./pages/selectRole";
import CreateAccount from "./pages/createAccount";
import MoreDetails from "./pages/moreDetails";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signIn";
import Browse from "./pages/browse";

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
      {
        path: "moredetails",
        element: <MoreDetails />,
      },
      {
        path: "browse",
        element: <Browse/>
      }
    ],
  },
  {
    path: "signin",
    element: <SignIn/>
  },
  {
    path: "signup",
    element: <SignUp/>
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "projectmanagement",
        element: <ProjectMgt />,
      },
      {
        path: "financialservices",
        element: <FinancialServices />,
      },
    ],
  },
  {
    path: "selectrole",
    element: <SelectRole />,
  },
  {
    path: "createaccount",
    element: <CreateAccount />,
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
