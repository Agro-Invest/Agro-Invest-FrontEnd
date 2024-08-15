import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import HomePage from "./pages/homePage"
import BrowseProjects from "./pages/browseProjects"
import ViewProdetails from "./pages/viewProdetails"
import CreateProject from "./pages/createProjects"
import MemAccounts from "./pages/memAccounts"
import Lobby from "./pages/lobby"
import InvestInProject from "./pages/investInProject"
import SignIn from "./pages/auth/signIn"
import SignUp from "./pages/auth/signhttps://github.com/Agro-Invest/Agro-Invest-FrontEnd/pull/13/conflict?name=src%252FApp.jsx&ancestor_oid=2953f6da9b8e451290c81cba8e6a1a6770804cfb&base_oid=f62ec463f5d9c908eaf015b592c51a2ac7cf76ff&head_oid=2e1c248799826896d38217b41bf4452e20e16d67up"
import DashboardLayout from "./pages/dashboard/layout"
import Dashboard from "./pages/dashboard/pages/dashboard"
import ProjectMgt from "./pages/dashboard/pages/projectMgt"
import FinancialServices from "./pages/dashboard/pages/financialServices"
import SelectRole from "./pages/selectRole"
import CreateAccount from "./pages/createAccount"
import MoreDetails from "./pages/moreDetails"





const router = createBrowserRouter([
    {   
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "browseProjects",
                element: <BrowseProjects/>
            },
            {
                path: "viewProjects",
                element: <ViewProdetails/>
            },
            {
                path: "createProject",
                element: <CreateProject/>
            },
            {
                path: "memAccounts",
                element: <MemAccounts/>
            },
            {
                path: "lobby",
                element: <Lobby/>
            },
            {
                path: "invest",
                element: <InvestInProject/>
            },
            {
                path: "moredetails",
                element: <MoreDetails/>
            },
            
        ]
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
        element: <DashboardLayout/>,
        children:[
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "projectmanagement",
                element: <ProjectMgt/>
            },
            {
                path: "financialservices",
                element: <FinancialServices/>
            },
        ]
    },


    {
        path: "selectrole",
        element: <SelectRole/>
    },
    {
        path: "createaccount",
        element: <CreateAccount/>
    }

])

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
