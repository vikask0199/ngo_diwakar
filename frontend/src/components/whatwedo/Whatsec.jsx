
import icon from "../../assets/img/Icon.png"
import icon1 from "../../assets/img/Icon (1).png"
import icon2 from "../../assets/img/Icon (2).png"
import icon3 from "../../assets/img/Icon (3).png"

const Whatsec = () => {
    return (
        <div className="bg-amber-100 p-[5%] flex justify-around flex-col md:flex-row gap-6">
            <div className="flex flex-col md:gap-10 gap-3">
                <h1 className="md:text-4xl text-2xl font-extrabold">
                What we do for our kids with special needs
                </h1>
                <div className="w-full pl-5 flex flex-wrap md:gap-y-10">
                    <div className="flex gap-3 md:w-1/3">
                        <img src={icon} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex gap-3">
                        <img src={icon1} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex gap-3">
                        <img src={icon2} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex gap-3">
                        <img src={icon3} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex gap-3">
                        <img src={icon3} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex gap-3">
                        <img src={icon3} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatsec