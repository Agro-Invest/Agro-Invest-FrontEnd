


const PagesLayout = ({ welcomeText, children }) => {
  return (
    <div className="flex flex-col gap-y-16 min-h-screen pt-5 bg-[#f9fafb]">
      <div className="flex">
        <h1 className="text-black font-bold text-3xl">{welcomeText}</h1>
      </div>
      <div className="w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>

  )
}

export default PagesLayout