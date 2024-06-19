import whathead from "../../assets/img/whathead.png"


const Whatwedo = () => {
    return (
        <div className="bg-white p-[5%] flex justify-around flex-col md:flex-row gap-y-5">
            <div className="flex flex-col gap-3 md:w-1/2 w-full">
                <h1 className="md:text-4xl text-2xl font-extrabold md:w-3/4">
                    Making a donation for our children.
                </h1>
                <p className="md:w-3/4 font-medium text-slate-700">
                    When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iste natus totam doloribus dicta, est suscipit inventore tenetur tempore ratione.
                </p>
            </div>
            <div className="md:w-1/3 h-80 w-full">
                <img src={whathead} alt="" className="h-full w-full" />
            </div>
        </div>
    )
}

export default Whatwedo