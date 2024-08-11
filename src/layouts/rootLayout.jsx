import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <main className="w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
