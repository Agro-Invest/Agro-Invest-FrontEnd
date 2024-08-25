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
import CreateAccount from "./pages/auth/createAccount";
import MoreDetails from "./pages/moreDetails";
import SignIn from "./pages/auth/signIn";
import Browse from "./pages/browse";
// import AuthLayout from "./pages/auth/layouts/authLayout";


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

  
    // element: <AuthLayout/>,
    // children: 

      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "createaccount",
        element: <CreateAccount />,
      },
    
  

  {
    path: "selectrole",
    element: <SelectRole />,
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
  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
