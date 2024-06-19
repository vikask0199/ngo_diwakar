import homecardbg from "../../assets/img/homecardbg.jpg"
import Cards from "../reusable/Cards"

const Readmore = () => {
  return (
    <div className="flex flex-col gap-10 p-[5%]">
    <h1 className="md:text-4xl font-extrabold md:w-1/2 w-full text-2xl">
        We are creating a place where children with special needs can thrive
    </h1>
    <div className="flex flex-wrap gap-10 items-start">
        <Cards cardIimg={homecardbg}/>
        <Cards cardIimg={homecardbg}/>
        <Cards cardIimg={homecardbg}/>
    </div>
</div>
  )
}

export default Readmore