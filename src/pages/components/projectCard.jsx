import { MapPin } from "lucide-react";
import Tomato from "../pics/tomato.png";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  farmName, acres, amtRequired,
  startDate, endDate, farmLocation, sellingStatus }) => {

  const navigate = useNavigate();

  const handleInvest = () => {
    navigate("/selectrole");
  };

  const handleViewMore = () => {
    navigate("/moredetails");
  };


  return (
    <div>

      <div className="flex flex-col h-96 w-96 border border-green-400 rounded-lg 
      transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">

        <div className="h-1/2 w-full">
          <img src={Tomato} alt="picture_of_fresh_tomato_farm"
            className="rounded-tr-lg rounded-tl-lg" />
        </div>

        <div className="flex flex-row justify-between">

          <div className="flex flex-col pl-2">
            <div className="font-bold text-black">
              {farmName}
            </div>
            <hr />

            <div className="flex flex-row items-center mt-1 mb-2">
              <MapPin className="text-slate-400 size-4" />
              <span className="text-slate-400 font-semi-bold">{farmLocation}</span>
            </div>
            <hr />
            <div className="text-sm mt-2 mb-2">
              Acreage: <br />
              <span className="text-3xl text-green-400">{acres}</span>
            </div>
            <hr />
            <div className="text-sm">
              Amount Required: <br />
              <span className="text-3xl text-green-400">{amtRequired}</span>
            </div>
          </div>

          <div className="flex flex-col pr-2 gap-y-2 relative">

            <div className="flex flex-col">
              <div className="text-sm">
                Start Date: <br />
                <span className="text-1xl text-green-400">{startDate}</span>
              </div>
              <div className="text-sm">
                End Date: <br />
                <span className="text-1xl text-green-400">{endDate}</span>
              </div>
            </div>

            <div className="font-bold text-2xl text-red-700 animate-pulse">
              {sellingStatus}
            </div>

            
              <button 
              onClick={handleViewMore}
              className="h-5 w-24 absolute bottom-2 right-4 rounded-full
              border-green-400 border flex items-center justify-center">
                view more
              </button>
            

            <button
              onClick={handleInvest}
              className="w-28 flex items-center justify-center text-green-400 border border-green-400 
              rounded-full hover:bg-green-400 hover:text-white text-1xl font-bold pb-1 absolute
              bottom-9 right-2"
            >
              Invest
            </button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectCard