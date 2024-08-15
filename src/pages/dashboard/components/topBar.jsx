import Bell from "../icons/bell.png"
import UserIcon from "../icons/userIcon.png"

const TopBar = () => {
  return (
    <div className="w-full h-20 shadow-md fixed border bg-white border-gray-400 z-[100]
    ">
      <div className="relative flex items-center justify-center">
        <div className="flex flex-row gap-x-8 absolute top-5 right-60">
          <div className="h-10 w-0.5 bg-[#f2f2f7]"></div>

          <div>
            <img src={Bell} alt="" className="size-8 cursor-pointer" />
          </div>

          <div className="h-12 w-12 rounded-full bg-[#f2f2f7] flex items-center justify-center cursor-pointer">
            <img src={UserIcon} alt="" className="h-7 w-6" />
          </div>

        </div>
      </div>


    </div>
  )
}

export default TopBar