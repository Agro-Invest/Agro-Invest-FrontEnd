import projects1 from "../assets/images/projects-1.png";
import projects2 from "../assets/images/projects-2.png";
import projects3 from "../assets/images/projects-3.png";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";


const Browse = () => {

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

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
             <motion.div
             key={projects.id}
             custom={index % 2 === 0 ? 5 : -5}
             initial="hidden"
             animate="visible"
             variants={variants}
           >
            <ProjectCard key={project.id} project={project} />
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Browse