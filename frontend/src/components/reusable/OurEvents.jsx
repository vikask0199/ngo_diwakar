import hungryChildren from "../../assets/img/hungryChildren.png"
import EventCarousel from "./EventCarousel"
import PropTypes from 'prop-types';

const OurEvents = ({ isDisplay }) => {
    return (
        <div className="flex flex-col gap-14 p-[5%]">
            <div className="relative h-72 w-full flex items-center justify-center">
                <img src={hungryChildren} alt="" className="h-full w-full object-cover rounded-lg" />
                <div className="absolute h-full w-full rounded-lg flex items-center flex-col justify-around bg-black bg-opacity-20">
                    <h1 className="md:text-4xl text-xl font-extrabold text-white md:w-1/2  text-center">You can contribute to provide a place for children with special needs!</h1>
                    <div className="gap-5 min-h-14 h-auto flex-wrap flex items-center">
                        <button className="bg-yellow-400 text-sm h-10 w-40 rounded-sm font-semibold transition-all duration-300 hover:bg-yellow-500">
                            Join as a volunteer
                        </button>
                        <button className="bg-white text-sm h-10 w-24 rounded-sm font-semibold transition-all">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
            {
                isDisplay ? (
                    <div className="flex flex-col gap-3">
                        <h2 className="font-extrabold text-2xl">Our Events</h2>
                        <div className="">
                            <EventCarousel />
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

OurEvents.propTypes = {
    isDisplay: PropTypes.bool.isRequired,
};

export default OurEvents