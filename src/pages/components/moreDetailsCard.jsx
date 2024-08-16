

const MoreDetailsCard = ({ farmName, farmImages, description, projectTitle, amtRequired, startDate, endDate,
  farmLocation, sellingStatus
}) => {
  return (
    <div className="flex flex-row gap-x-20 py-5 px-5">
      <div>
        <img src={farmImages} alt="" className="h-80 w-[410px] rounded-lg" />
      </div>

      <div className="h-[550px] w-[700px] text-center border shadow-lg px-10 py-8
      ">
        <div>
          <h1 className="font-bold text-2xl">{projectTitle}</h1>
          <h3 className="font-bold text-xl">{farmName}</h3>
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
  )
}

export default MoreDetailsCard