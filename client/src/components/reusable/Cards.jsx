

const Cards = (props) => {
  const { cardIimg } = props;

  return (
    <div className="border h-80 md:w-80 flex-grow rounded-lg relative flex ">
      <img src={cardIimg} alt="" className="rounded-lg w-full h-full object-cover" />
      <div className="bg-black bg-opacity-70 h-full w-full absolute rounded-lg flex flex-col justify-between p-8">
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-white font-bold tracking-wider">
            Mission smile 1k: <br /> Outdoor charity
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
          </p>
        </div>
        <button className="h-10 w-1/2 font-bold rounded-sm bg-white">Learn more</button>
      </div>
    </div>
  )
}

export default Cards