
const Award = ({ location, year, awardImg, type }) => {
  return (
    <div className="flex flex-col items-center gap-2 md:w-1/4 w-1/2">
      <img src={awardImg} alt="" className="h-24 object-contain"/>
      <h2 className="text-2xl font-extrabold">{year}</h2>
      <h3 className="text-xl font-bold">{type}</h3>
      <p>{location}</p>
    </div>
  )
}

export default Award