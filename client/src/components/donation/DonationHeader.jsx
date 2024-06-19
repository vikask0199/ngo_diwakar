import donation from "../../assets/img/donation.png"

const DonationHeader = () => {
    return (
        <div className="bg-amber-100 p-[5%] flex justify-around flex-col md:flex-row gap-y-5">
            <div className="flex flex-col justify-between gap-3 md:w-1/2 w-full">
                <h1 className="md:text-4xl text-2xl font-extrabold md:w-3/4">
                    Making a donation for our children.
                </h1>
                <p className="md:w-3/4 font-medium text-slate-700">
                    When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.
                </p>
                <div className="w-full flex flex-col gap-3">
                    <button className="w-32 py-2 rounded-sm bg-yellow-400 hover:bg-yellow-500 font-bold duration-300">Donate now</button>
                </div>
            </div>
            <div className="md:w-1/3 h-80 w-full">
                <img src={donation} alt="" className="h-full w-full" />
            </div>
        </div>
    )
}

export default DonationHeader