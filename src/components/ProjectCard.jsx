import { CreditCard, MapPin, Users } from "lucide-react";
import { Tag } from "./ui/Tag";

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg relative shadow overflow-hidden">
      <Tag
        className={`h-fit px-2 text-xs absolute top-4 right-4 inline-block   py-1 ${
          project.funded
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
      </div>
    </div>
  );
}

export default ProjectCard;
