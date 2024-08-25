import { motion } from "framer-motion";
import { useState } from "react";

const MoreDetailsCard = ({ farmName,
  farmImages,
  description,
  projectTitle,
  amtRequired,
  startDate, endDate,
  farmLocation,
  sellingStatus
}) => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === farmImages.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? farmImages.length - 1 : prevImage - 1
    );
  };


  return (
    <div className="flex flex-row gap-x-10 py-5 px-5">

      <div className="relative flex flex-col items-center">
        <motion.img
          key={currentImage}
          src={farmImages[currentImage]}
          alt=""
          className="h-80 w-[450px] rounded-lg"
          initial={{ opacity: 0, x: 50}}
          animate={{ opacity: 10, x: 0 }}
          exit={{ opacity: 10, x: -100 }}
          transition={{ duration: 0.9 }}
        />
        <div className="flex gap-x-2 mt-2">
          <button
            className="text-green-950"
            onClick={handlePrevImage}
          >
            {"<"}
          </button>
          <button
            className="text-green-950"
            onClick={handleNextImage}
          >
            {">"}
          </button>
        </div>
      </div>


      {/* <div>
        <img src={farmImages} alt="" className="h-80 w-[410px] rounded-lg" />
      </div> */}

      <div className="h-[550px] w-[700px] text-center border border-green-400 shadow-xl px-10 py-8 rounded-lg">
        <div className="mb-3">
          <h1 className="font-bold text-2xl text-[#15624c]">{projectTitle}</h1>
          <h3 className="font-bold text-xl text-[#15624c]">{farmName}</h3>
        </div>

        <div className="flex flex-col cursor-context-menu">
          <div>
            {/* TOP */}
            {/* TOP */}
            <motion.div
              className="flex flex-row justify-center gap-x-3 mb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative group">
                <div className="h-9 w-36 rounded-full border border-green-400 font-medium shadow-lg flex 
                items-center justify-center hover:bg-green-400 hover:text-white cursor-pointer">
                  GHS {amtRequired}
                </div>
                <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none z-[100]">
                  This is the total amount required for this Project.
                </div>
              </div>

              <div className="relative group">
                <div className="h-9 w-36 rounded-full border border-green-400 font-medium shadow-lg flex 
                  items-center justify-center hover:bg-green-400 hover:text-white cursor-pointer">
                  {farmLocation}
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none z-[100]">
                  Project Location
                </div>
              </div>
            </motion.div>

            {/* DOWN */}
            <motion.div
              className="flex flex-row justify-center gap-x-3 mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative group">
                <div className="h-9 w-36 rounded-full border border-green-400 font-medium shadow-lg flex 
    items-center justify-center text-red-500 animate-pulse hover:bg-green-400 hover:text-white cursor-pointer">
                  {sellingStatus}
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none">
                  Current Status of the Project
                </div>
              </div>

              <div className="relative group">
                <div className="h-9 w-36 rounded-full border border-green-400 font-medium shadow-lg flex 
    items-center justify-center hover:bg-green-400 hover:text-white cursor-pointer">
                  {startDate}
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none">
                  Estimated Start Date of the Project
                </div>
              </div>

              <div className="relative group">
                <div className="h-9 w-36 rounded-full border border-green-400 font-medium shadow-lg flex 
    items-center justify-center hover:bg-green-400 hover:text-white cursor-pointer">
                  {endDate}
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none">
                  Estimated End Date of the Project
                </div>
              </div>
            </motion.div>


          </div>

          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id et vitae ullam, voluptatem, laboriosam iure est debitis atque,
              inventore at ipsam quos quaerat nostrum dignissimos eos!
              Quis hic provident assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id et vitae ullam, voluptatem, laboriosam iure est debitis atque,
              inventore at ipsam quos quaerat nostrum dignissimos eos!
              Quis hic provident assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id et vitae ullam, voluptatem, laboriosam iure est debitis atque,
              inventore at ipsam quos quaerat nostrum dignissimos eos!
              Quis hic provident assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id et vitae ullam, voluptatem, laboriosam iure est debitis atque,
              inventore at ipsam quos quaerat nostrum dignissimos eos!
              Quis hic provident assumenda?
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MoreDetailsCard