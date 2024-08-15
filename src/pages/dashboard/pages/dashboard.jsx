import React from 'react'
import PagesLayout from '../layout/pagesLayout'
import { useNavigate } from 'react-router-dom'
import FarmProjects from '../components/farmProjects'
import Banner from '../components/banner'
import FundingStatus from "../components/fundingStatus"
import Investors from "../components/investorsCard"
import MainCard from '../components/mainCard'


const Dashboard = () => {

  const navigate = useNavigate

  return (
    <PagesLayout
      headerText="Hello Kojo! Welcome To Your Dashboard"
      buttonText="Add New Project"
      onClick={() => navigate("/dashboard/add-new-project")}

    >

      <Banner
      farmerName={"David"} />


      <div className="container mx-auto pt-5">
        <div className="flex flex-row gap-x-5 items-center justify-center ">
          <FarmProjects
            theme={"Farm Projects"}
            numberOfProjects={"6"}
            percentage={"50%"} />

          <FundingStatus
            theme={"Funding Status"}
            projectCost={"10,000.00"}
            percentage={"60%"} />

          <Investors 
          theme={"Investors"}
          numberOfIvestors={10}
          percentage={"50%"}/>

        </div>

        <div className="pt-5">
          <MainCard />
        </div>
      </div>


    </PagesLayout>
  )
}

export default Dashboard