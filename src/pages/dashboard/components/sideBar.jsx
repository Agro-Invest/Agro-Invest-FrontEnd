import { Link, NavLink, useNavigate } from "react-router-dom"
import K from "./constants/index"
import { apiLogout } from "../../../../src/services/auth";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useState } from "react";


const SideBar = () => {

  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/singin");
    } catch (error) {
      toast.error("An error occured");
    }
  };

  return (

    <div className="h-screen w-[200px] bg-[#15624c] text-white 
    flex flex-col gap-y-5 px-2 py-5 shadow-md fixed overflow-y-auto">

      <div className="flex justify-between items-center px-4">

        <span className="text-[#dbf7ef] text-3xl font-bold">
          <a href="/">
            {" "}
            Agro<span className="text-[#23d46f]">Invest</span>
          </a>
        </span>


      </div>

      {
        K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-x-2 text-sm p-2 ${isActive ? " bg-[#478775] icon-[#23d46f]" : "text-white"
              } hover:bg-[#478775] transition-colors duration-300 rounded-lg`
            }
            end
          >
            <span>{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))
      }

      <div className="mt-auto">
        <motion.button
          className="group flex items-center gap-x-4 text-[#BDC3C7] hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
        >
          <motion.div
            className="p-2 rounded-full flex items-center justify-center w-8 h-8 bg-transparent transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="text-white" />
          </motion.div>
          {!isCollapsed && (
            <Link to="/signin" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Log Out
            </Link>
          )}
        </motion.button>
      </div>

    </div >
  )
}

export default SideBar