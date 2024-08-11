import React from "react";
import { Tag } from "./ui/Tag";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MapPin } from "lucide-react";
import projects1 from "../assets/images/projects-1.png";
import projects2 from "../assets/images/projects-2.png";
import projects3 from "../assets/images/projects-3.png";

const projects = [
  {
    imgUrl: projects1,
    title: "Tomato farm",
    location: "Northern region",
    description:
      "Share your farming journey, upload project details, and track investor interest.",
  },
  {
    imgUrl: projects2,
    title: "Corn field",
    location: "Southern region",
    description:
      "Pre-order system ensures your produce finds a buyer before harvest.",
  },
  {
    imgUrl: projects3,
    title: "Apple orchard",
    location: "Eastern region",
    description: "Explore a range of credit packages tailored to your needs.",
  },
];

const FarmCard = ({ imgUrl, title, location, description }) => {
  return (
    <div className="w-[400px] rounded-2xl overflow-hidden shadow-sm bg-white ">
      <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
      <div className="px-6 py-6">
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-500 text-sm flex items-center mb-4">
          <MapPin className="mr-1" size={16} />
          {location}
        </p>
        <div className="flex justify-between mt-4 w-full">
          <Button variant="secondary" className="w-[48%]">
            Lobby
          </Button>
          <Button variant="primary" className="w-[48%]">
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
        <div className="flex items-start flex-col max-w-[800px] mr-auto space-y-4">
          <Tag variant="secondary">Projects</Tag>
          <h3 className="text-[48px] font-semibold leading-none">
            Invest into the future of Agriculture
          </h3>
          <p className="text-[#898483]">
            Discover a variety of farming projects, from organic crops to
            innovative agri-tech ventures. Whether you're looking for short-term
            returns or long-term growth, AgroInvest provides transparent and
            secure investment opportunities.
          </p>
        </div>

        <div className="flex  justify-start gap-6 mt-8">
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
