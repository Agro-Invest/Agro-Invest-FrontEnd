import FreshTomato from "../pages/pics/freshTomato.jpg"

const MoreDetails = () => {
  return (
    <div className="h-screen w-full bg-[#f9fafb] flex flex-row gap-x-36 py-10 px-40">
      <div>
      <img src={FreshTomato} alt="" className="h-80 w-96"/>
      </div>

      <div className="h-screen w-60 text-center">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ut et voluptas veniam quos blanditiis hic non repellat nesciunt voluptatum, 
          voluptate a alias vero porro. Eligendi possimus veritatis eveniet nisi eos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolore ab eum corrupti rerum modi, quis, sed dolor minima voluptatum 
          molestias eos fugiat aspernatur dolorum deleniti quidem! Quis, 
          quo? Totam, natus?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ut et voluptas veniam quos blanditiis hic non repellat nesciunt voluptatum, 
          voluptate a alias vero porro. Eligendi possimus veritatis eveniet nisi eos.
        </p>
      </div>

    </div>
  )
}

export default MoreDetails