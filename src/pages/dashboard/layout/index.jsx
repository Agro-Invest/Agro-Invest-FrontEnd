import { Outlet } from "react-router-dom"
import SideBar from "../components/sideBar"
import TopBar from "../components/topBar"
// import { useEffect, useState } from "react";
// import { getDetails } from "../../../services/config";
 

  const DashboardLayout = () => {
    // const [user, setUser] = useState();

    // const { token, firstName, lastName, userName } = getDetails();
  
    // useEffect(() => {
    //   if (token) {
    //     setUser({
    //       firstName,
    //       lastName,
    //       userName,
    //     });
    //   }
    // }, []);
  
    // if (!token) {
    //   return <Navigate to="/signin" />;
    // }




    return (
      <div className="flex flex-row">
        <SideBar />

        <div className="flex flex-col w-full">

          <div className="pl-[200px] w-full">
            <TopBar className="z-[100]" />
          </div>

          <div className="pl-[270px] w-full flex items-center justify-center ">
            <Outlet/>
          </div>

        </div>
      </div>
    )
  }

  export default DashboardLayout