import homechild from "../../assets/img/homechild.png"
import icon from "../../assets/img/Icon.png"
import icon1 from "../../assets/img/Icon (1).png"
import icon2 from "../../assets/img/Icon (2).png"
import icon3 from "../../assets/img/Icon (3).png"

const HomeServices = () => {
    return (
        <div className="bg-amber-100 p-[5%] flex justify-around flex-col md:flex-row gap-6">
            <div className="flex flex-col md:gap-6 gap-3">
                <h1 className="md:text-4xl text-2xl font-extrabold md:w-1/2">
                    Some services we provide for our children
                </h1>
                <p className="md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="w-full pl-5 flex flex-col gap-3">
                    <div className="md:w-3/4 flex gap-5">
                        <img src={icon} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 flex gap-5">
                        <img src={icon1} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 flex gap-5">
                        <img src={icon2} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 flex gap-5">
                        <img src={icon3} alt="" className="h-10 w-10" />
                        <div>
                            <h2 className="font-bold text-2xl mb-2">Family support</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={homechild} alt="" className="w-full" />
            </div>
        </div>
    )
}

export default HomeServices