


const Banner = ({ farmerName }) => {
    return (
        <div className="w-full flex z-[100]">

            <div className="w-[1000px] h-20 border border-t-0 border-r-0 border-l-0 flex flex-row items-center justify-between px-5">

                <div className="flex flex-row gap-y-32 items-center">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">Welcome, {farmerName}</span>
                        <span className="font-normal">Here is an overview of all your projects</span>
                    </div>

                    {/* <div className="h-16 w-32 rounded-lg border border-gray-400 bg-white flex items-center justify-center">
                        <div className="h-6 w-6 rounded-full bg-gray-400"></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Banner