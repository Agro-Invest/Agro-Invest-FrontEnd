import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects1 from "../assets/images/projects-1.png";
import projects2 from "../assets/images/projects-2.png";
import projects3 from "../assets/images/projects-3.png";
import {
  BellDot,
  Filter,
  FilterIcon,
  LucideFilterX,
  LucideSortDesc,
  SortAscIcon,
  SortDesc,
  SortDescIcon,
  UserCircle2,
} from "lucide-react";
import { Button } from "./ui/Button";

function ProjectManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      id: 1,
      name: "Tomato farm",
      location: "Northern region",
      types: ["Crop farming", "Vegetable"],
      investors: 2,
      total: 3500,
      funded: true,
      imgUrl: projects1,
    },
    {
      id: 2,
      name: "Corn farm",
      location: "Northern region",
      types: ["Crop farming", "Corn"],
      investors: 2,
      total: 3500,
      funded: true,
      imgUrl: projects2,
    },
    {
      id: 3,
      name: "Onion farm",
      location: "Eastern region",
      types: ["Crop farming", "Vegetable"],
      investors: 0,
      total: 0,
      funded: false,
      imgUrl: projects3,
    },
  ];

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 border-b border-gray-200 ">
        <h1 className="font-medium ">Project managements</h1>
        <div className="flex space-x-4">
          <BellDot className="text-green-600" size={20} />
          <UserCircle2 className="text-green-600" size={20} />
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2 font-medium">Project: {projects.length}</span>
            <input
              type="text"
              placeholder="Search here..."
              className="border border-gray-50  px-2 py-1 shadow rounded-md focus:outline-4 focus:outline-green-700/60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              className="ml-2 px-2 py-1 h-fit bg-gray-50 shadow rounded-md border border-gray-50 "
              variant={"tertiary"}
            >
              <SortDescIcon className="inline-block mr-2" size={20} />
              Filter
            </Button>
          </div>
          <Button
            className="px-3 py-1 h-fit  shadow-sm bg-green-500 text-white "
            variant={"primary"}
          >
            Add project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span>Page {currentPage} of 30</span>
          <div>
            <Button
              className=" px-2 py-1 h-fit bg-gray-50 shadow rounded-md border border-gray-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </Button>
            <Button
              className="ml-2 px-2 py-1 h-fit bg-gray-50 shadow rounded-md border border-gray-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              variant={"tertiary"}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;
