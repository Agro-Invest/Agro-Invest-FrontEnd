import React from "react";
import { Tag } from "./ui/Tag";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import forFarmers1 from "../assets/images/for-farmers-1.png";
import forFarmers2 from "../assets/images/for-farmers-2.png";
import forFarmers3 from "../assets/images/for-farmers-3.png";
import { useNavigate } from "react-router-dom";

const farmerCards = [
  {
    imgUrl: forFarmers1,
    title: "Create and manage projects",
    description:
      "Share your farming journey, upload project details, and track investor interest.",
    link: "/create-project",
  },
  {
    imgUrl: forFarmers2,
    title: "Reach a ready market",
    description:
      "Pre-order system ensures your produce finds a buyer before harvest.",
    link: "/reach-market",
  },
  {
    imgUrl: forFarmers3,
    title: "Unlock the potential of your farm",
    description: "Explore a range of credit packages tailored to your needs.",
    link: "/unlock-potential",
  },
];

const FarmerCard = ({ imgUrl, title, description, link }) => (
  <a
    href={link}
    className="group block w-full md:w-[400px] h-[400px] relative overflow-hidden rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <img
      src={imgUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B0A] flex flex-col justify-end p-6 transition-opacity duration-300 ease-in-out opacity-90 group-hover:opacity-100">
      <h4 className="text-white text-xl font-semibold mb-2 ">{title}</h4>
      <p className="text-white text-opacity-80">{description}</p>
    </div>
  </a>
);



const ForFarmers = () => {

  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/signin");
  };

  return (
    <section id="for-farmers" className="bg-white py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 flex items-center flex-col">
          <Tag variant="secondary" className="mb-4">
            For Farmers
          </Tag>
          <h2 className="text-5xl font-semibold mb-4 text-[#15624C]">
            Maximise your farming expertise
          </h2>
          <p className="text-gray-600">
            Secure funding, showcase your projects, and connect with investors
            who share your vision. Whether you're expanding your operations or
            starting anew, AgroInvest offers the tools and support to help you
            succeed.
          </p>
        </div>

        <div className="flex items-center  md:justify-center gap-8 mb-12 flex-col md:flex-row ">
          {farmerCards.map((card, index) => (
            <FarmerCard key={index} {...card} />
          ))}
        </div>

        <div className="text-center">
          <Button 
          onClick={handleCreateProject}
          variant="primary" className="px-16">
            Create project
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ForFarmers;
