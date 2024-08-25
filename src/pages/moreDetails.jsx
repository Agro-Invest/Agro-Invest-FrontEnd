import MoreDetailsCard from "./components/moreDetailsCard"
import FreshTomato from "./pics/freshTomato.jpg"
import TomatoTwo from "./pics/tomatoTwo.jpg"
import TomatoThree from "./pics/tomatoThree.jpg"
import TomatoFour from "./pics/tomatoFour.jpg"
import TomatoFive from "./pics/tomatoFive.jpg"




const MoreDetails = () => {

  const farmImages = [FreshTomato, TomatoTwo, TomatoThree, TomatoFour, TomatoFive];

  return (

    <div className="flex flex-row gap-x-20 py-5 px-5">
     

      <div className="h-screen w-full bg-[#f9fafb] flex flex-row justify-center gap-x-36">
        <MoreDetailsCard
          farmImages={farmImages}
          projectTitle={"IMPROVED SAVANNA TOMATO"}
          farmName={"KANDID FARMS"} 
          amtRequired={"10,000.00"}
          farmLocation={"Northern Region"}
          sellingStatus={"Selling"}
          startDate={"02/06/2024"}
          endDate={"30/08/2024"}/>
      </div>
    </div>
  )
}

export default MoreDetails