import { useState } from "react"
import { Search } from "lucide-react"
import Filter from "../icons/filter.png"
import Grid from "../icons/grid.png"
import List from "../icons/list.png"
import AddIcon from "../icons/addIcon.png"
import Location from "../icons/location.png"


const MainCard = () => {

  const [isGridActive, setIsGridActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleAddProjectClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextStep = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    startUploading(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    startUploading(files);
  };

  const startUploading = (files) => {
    setIsUploading(true);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    closeSecondModal();
  };

  




  return (
    <div className="h-96 w-[1000px] border border-gray-400 bg-white rounded-2xl mb-5">
      <div className="h-16 flex flex-row items-center justify-between px-5">
        <div className="flex flex-row gap-x-3">
          <div className="flex items-center gap-x-4
           bg-white h-10 rounded-lg border border-gray-400 shadow-md
           max-w-md">
            <Search className="w-4 h-4 ml-3" />
            <input
              type="text"
              className="flex-grow bg-transparent border-none focus:outline-none"
              placeholder="Search here..." />
          </div>
          <button className="h-10 w-28 border border-gray-400 
          border-3 rounded-lg flex flex-row items-center px-2 shadow-md justify-between">
            <img src={Filter} alt="" className="size-6" />
            <span className="text-2xl">Filter</span>
          </button>
        </div>

        <div className="flex flex-row  gap-x-3">

          <div className="flex flex-row">

            <button
              onClick={() => setIsGridActive(true)}
              className={`h-10 w-10 border border-gray-400 border-3 flex flex-row items-center px-2 shadow-md 
              justify-between ${isGridActive ? "bg-[#f0f2f5]" : "text-white"
                } hover:bg-[#f0f2f5] transition-colors duration-300 rounded-l-lg`}>
              <img src={Grid} alt="Grid View" />
            </button>

            <button
              onClick={() => setIsGridActive(false)}
              className={`h-10 w-10 border border-gray-400 border-3 flex flex-row items-center px-2 shadow-md justify-between 
              rounded-r-lg ${!isGridActive ? "bg-[#f0f2f5]" : "text-white"
                } hover:bg-[#f0f2f5] transition-colors duration-300 rounded-r-lg`}>

              <img src={List} alt="List View" />
            </button>
          </div>

          <div className="h-10 min-w-0.5 bg-slate-400"></div>

          <button
            onClick={handleAddProjectClick}
            className="h-10 w-32 border border-gray-400 
          border-3 flex flex-row items-center px-2 shadow-md justify-between rounded-lg">
            <span className="size-5"><img src={AddIcon} alt="" /></span>
            <span className="text-sm font-bold">Add Project</span>
          </button>

        </div>

      </div>
      <hr className="h-[5px]" />

      <div >
      
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white px-8 py-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-center mb-2">
              <h2 className="text-xl font-bold">Create New Project</h2>
              <p className="text-[#8c94a6]">Fill out these details to create your farm project</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="farmName">
                  Farm name
                </label>
                <input
                  id="farmName"
                  type="text"
                  placeholder="Enter your farm name"
                  className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="location">
                  Location
                </label>
                <div className="relative">
                  <input
                    id="location"
                    type="text"
                    placeholder="Enter Farm Location"
                    className="w-full h-8 px-3 py-2 pr-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <img src={Location} alt="" className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="farmSize">
                  Farm size
                </label>
                <input
                  id="farmSize"
                  type="text"
                  placeholder="Eg., acres or hectares"
                  className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="farmType">
                  Farm type
                </label>
                <input
                  id="farmType"
                  type="text"
                  placeholder="Eg., crop farming, livestock, mixed farming"
                  className="w-full h-8 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="amountRequired">
                  Amount Required
                </label>
                <div className="relative">
                  <input
                    id="amountRequired"
                    type="text"
                    placeholder="Enter project amount"
                    className="w-full h-8 px-3 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                    style={{ paddingLeft: '5rem' }}
                  />
                  <select
                    className="absolute left-0 h-8 bg-transparent border-none pl-3 rounded-l-lg focus:outline-none"
                    style={{ width: '20%', textAlignLast: 'center' }}
                  >
                    <option value="GHS">GHS</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="NGN">NGN</option>
                  </select>
                </div>
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="description">
                  Farming methods
                </label>
                <textarea
                  id="description"
                  placeholder="Enter project description"
                  className="w-full px-3 py-2 border text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1eb45e]"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-36 px-4 py-2 text-[#1d8668] border border-[#1d8668] rounded-lg mr-2"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-52 px-4 py-2 bg-[#1eb45e] text-white rounded-lg"
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white px-8 py-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-center mb-2">
              <h2 className="text-xl font-bold">Upload Project Pictures</h2>
              <p className="text-[#8c94a6]">Upload image or pictures of your farm</p>
            </div>

            <form onSubmit={handleFinalSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="projectImages">
                  Project Images
                </label>
                <div
                  className="w-full h-32 border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <input
                    id="projectImages"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <div className="flex flex-col items-center gap-y-3">
                    <div>
                      <p className="text-gray-400">Drag & Drop to Upload Pictures</p>
                    </div>
                    <div className="h-10 w-24 border-2 border-[#1eb45e] flex items-center justify-center rounded-lg">
                      <span className="text-[#1eb45e] cursor-pointer"
                      onClick={() => document.getElementById('projectImages').click()}>Browse Files
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {isUploading && (
                <div className="mt-2">
                  <p className="text-sm text-gray-700">Uploading document... {uploadProgress}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1eb45e] h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-9">
                <button
                  type="button"
                  onClick={closeSecondModal}
                  className="w-36 px-4 py-2 text-[#1d8668] border border-[#1d8668] rounded-lg mr-2"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="w-52 px-4 py-2 bg-[#1eb45e] text-white rounded-lg"
                >
                  Finish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </div>
  )
}

export default MainCard