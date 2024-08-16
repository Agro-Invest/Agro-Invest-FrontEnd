import MoreDetailsCard from "./components/moreDetailsCard"
import FreshTomato from "./pics/freshTomato.jpg"



const MoreDetails = () => {

  // const farmImages = [FreshTomato, Tomato2, Tomato3, Tomato4];

  return (

    <div className="flex flex-row gap-x-20 py-5 px-5">
     

      <div className="h-screen w-full bg-[#f9fafb] flex flex-row justify-center gap-x-36">
        <MoreDetailsCard
          farmImages={FreshTomato}
          projectTitle={"IMPROVED SAVANNA TOMATO"}
          farmName={"KANDID FARMS"} />
      </div>
    </div>
  )
}

export default MoreDetails