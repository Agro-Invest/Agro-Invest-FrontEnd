import React from "react";
import { Tag } from "./ui/Tag";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MapPin } from "lucide-react";
import projects1 from "../assets/images/projects-1.png";
import projects2 from "../assets/images/projects-2.png";
import projects3 from "../assets/images/projects-3.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    imgUrl: projects1,
    title: "Tomato farm",
    location: "Northern region",
  },
  {
    imgUrl: projects2,
    title: "Corn field",
    location: "Southern region",
  },
  {
    imgUrl: projects3,
    title: "Onion farm",
    location: "Eastern region",
  },
];

const FarmCard = ({ imgUrl, title, location }) => {

    const navigate = useNavigate();

    const handleInvest = () => {
      navigate("/signin")
    }

  return (
    <div className=" w-full md:w-[400px] rounded-2xl overflow-hidden shadow-lg bg- border-px border-[black]/5 ">
      <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
      <div className="px-6 py-6">
        <h4 className="font-bold text-lg mb-1 ">{title}</h4>
        <p className="text-gray-500 text-sm flex items-center mb-4">
          <MapPin className="mr-1" size={16} />
          {location}
        </p>
        <div className="flex justify-between mt-4 w-full">
          <Button variant="secondary" className="w-[48%]">
            Lobby
          </Button>
          <Button 
          onClick={handleInvest}
          variant="primary" className="w-[48%]">
            Invest
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <Container className="flex justify-start py-[64px] flex-col">
        <div className="flex items-start flex-col max-w-[800px] mr-auto space-y-4 mb-12">
          <Tag variant="secondary">Projects</Tag>
          <h3 className="text-[48px] font-semibold leading-none text-[#15624C]">
            Invest into the future of Agriculture
          </h3>
          <p className="text-[#898483]">
            Discover a variety of farming projects, from organic crops to
            innovative agri-tech ventures. Whether you're looking for short-term
            returns or long-term growth, AgroInvest provides transparent and
            secure investment opportunities.
          </p>
        </div>

        <div className="flex items-center  md:justify-center gap-8 mb-12 flex-col md:flex-row">
          {projects.map((project, index) => (
            <FarmCard
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              location={project.location}
              description={project.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
