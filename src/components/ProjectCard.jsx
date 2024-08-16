import { CreditCard, MapPin, Users } from "lucide-react";
import { Tag } from "./ui/Tag";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {

  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/moredetails")
  };

  const handleInvest = () => {
    navigate("/signin");
  };


  return (
    <div className="bg-white rounded-lg relative shadow overflow-hidden">
      <Tag
        className={`h-fit px-2 text-xs absolute top-4 right-4 inline-block   py-1 ${project.funded
          ? "bg-green-100/80 text-green-700/80 backdrop-blur-sm"
          : "bg-red-100 text-red-700"
          }`}
      >
        {project.funded ? "Funded" : "Not Funded"}
      </Tag>
      <img
        src={`${project.imgUrl}`}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold">{project.name}</h2>
        </div>

        <p className="text-gray-500 text-sm flex items-center mb-4">
          <MapPin className="mr-1" size={16} />
          {project.location}
        </p>

        <div className="mb-2">
          {project.types.map((type) => (
            <span
              key={type}
              className="inline-block bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs mr-2 mb-2"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <span className="  flex items-center text-gray-700">
            <Users size={16} className="inline-block mr-1 text-blue-400" />{" "}
            Investors: {project.investors}
          </span>
          <span className="  flex items-center text-gray-700">
            {" "}
            <CreditCard
              size={16}
              className="inline-block mr-1 text-green-400"
            />{" "}
            Total: GHS
            {project.total.toFixed(2)}
          </span>
        </div>

        <div>
          <button
            onClick={handleViewMore}
            className="h-8 w-24 absolute bottom-28 right-4 rounded-full
              border-green-400 hover:bg-green-400 hover:text-white border 
              flex items-center justify-center ">
            view more
          </button>
        </div>

        <div>
          <button
            onClick={handleInvest}
            className="h-6 w-20 absolute bottom-14 right-4 rounded-full
              border-green-400 hover:bg-green-400 hover:text-white border 
              flex items-center justify-center ">
            Invest
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
