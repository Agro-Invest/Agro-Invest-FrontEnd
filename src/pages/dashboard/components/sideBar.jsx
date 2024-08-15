import { NavLink } from "react-router-dom"
import K from "./constants/index"


const SideBar = () => {

  return (

    <div className="h-screen w-[200px] bg-[#15624c] text-white 
    flex flex-col gap-y-5 px-2 py-5 shadow-md fixed overflow-y-auto">

      <div className="flex justify-between items-center px-4">
        
        <span className="text-[#dbf7ef] text-3xl font-bold">
          Agro<span className="text-[#23d46f]">Invest</span>
        </span>

      </div>

      {K.NAVLINKS.map(({ icon, text, link }, index) => (
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
      ))}

    </div>
  )
}

export default SideBar