import ProjectCard from "./components/projectCard"


const InvestInProject = () => {


  return (

    <div className="w-full h-screen bg-white flex items-center justify-center">

      <ProjectCard
      farmName={"Tomato Farm"}
      farmLocation={"Dodowa, Greater Accra"}
      acres={"50ac"}
      amtRequired={"GHS 10,000.00"}
      startDate={"10th August 2024"}
      endDate={"10th August 2024"}
      sellingStatus={"Selling"}
      />

    </div>
  )
}

export default InvestInProject