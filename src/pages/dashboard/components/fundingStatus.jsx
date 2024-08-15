import { ChartNoAxesCombined } from "lucide-react"
import BriefCase from "../icons/briefCase.png"

const FundingStatus = ({theme, projectCost, percentage}) => {
  return (
    <div className="h-28 w-72 border bg-white border-gray-400 rounded-2xl py-0 px-3">
      <div className="flex flex-row justify-between relative">
        <div className="flex flex-col gap-y-2 pt-1">
          <span className="text-medium text-xl">
            {theme}
          </span>
          <span className="font-bold text-xl text black">
            GHS{projectCost}
          </span>
          <div className="h-6 w-20 py-1 px-1 bg-[#e7f6ec] flex flex-row 
                items-center justify-between rounded-2xl gap-x-2">

            <span className="size-4 mb-2">
              <ChartNoAxesCombined className="size-5"/>
            </span>

            <span className="text-lg font-bold">
              {percentage}
            </span>
          </div>

        </div>
        
        <div className="h-14 w-14 border border-gray-400 
            rounded-full absolute top-7 right-0 flex items-center justify-center">
          <img src={BriefCase} alt="" className="size-7"/>
        </div>

      </div>

    </div>
  )
}


export default FundingStatus