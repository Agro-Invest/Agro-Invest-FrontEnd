import ProjectManagement from "../components/ProjectManagement";
import Sidebar from "../components/Sidebar";

const BrowseProjects = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <ProjectManagement />
      </main>
    </div>
  );
};

export default BrowseProjects;
