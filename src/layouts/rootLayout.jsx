import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);

  return (
    <main className="w-screen min-h-screen overflow-x-hidden">
      {pathname === "/browseProjects" ? null : <Navbar />}
      <Outlet />
      {pathname === "/browseProjects" ? null : <Footer />}
    </main>
  );
};

export default RootLayout;
