import { useNavigate } from "react-router-dom"
import PagesLayout from '../layout/pagesLayout'
import MainCard from '../components/mainCard'

const ProjectMgt = () => {

  const navigate = useNavigate

return (
  <PagesLayout
    headerText="Hello Kojo! Welcome To Your Dashboard"
    buttonText="Add New Project"
    onClick={() => navigate("/dashboard/add-new-project")}

  >
    <div className="relative">
      <div className="absolute -top-14 -left-20 z-[100] text-black">
        Project Managements
      </div>
    </div>
    <div className="container mx-auto pt-5">

      <div className="pt-5">
        <MainCard 
        className="h-[150px] w-[1000px]"/>
      </div>
    </div>


  </PagesLayout>
)}

export default ProjectMgt