import { useRef, useState } from "react";
import homeShort from "../../assets/vdo/homeshort.mp4"
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import PartnerCarousel from "../reusable/PartnerCarousel";

const HomeAbout = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const handlePlayClick = () => {
        const video = videoRef.current;

        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="p-[5%] flex flex-col w-full justify-between">
            <div className="flex w-full md:flex-row flex-col items-center justify-around">
                <div className="flex flex-col md:gap-14 gap-4 md:w-1/2">
                    <p className="font-extrabold md:text-4xl md:w-[70%] w-full text-2xl">We provide a place for children with special needs</p>
                    <p className="md:w-[70%] w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        <br />
                        ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                    <button className="w-32 py-2 rounded-sm bg-yellow-400 hover:bg-yellow-500 font-bold duration-300">Learn more</button>
                </div>
                <div className="flex items-center justify-center my-5 relative">
                    <video ref={videoRef} muted loop playsInline className="rounded-lg md:h-[500px]">
                        <source src={homeShort} type="video/mp4" />
                    </video>
                    <div className="opacity-60 bg-black text-white h-full absolute flex items-center justify-center w-full rounded-lg" style={{ height: '100%', width: '100%' }}>
                        {
                            isPlaying ? (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePause className="md:text-3xl text-xl" /></button>
                            ) : (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePlay className="md:text-3xl text-xl" /></button>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center justify-center gap-1 mb-5">
                    <p className="font-bold flex-none">our Supporters</p>
                    <hr className="flex-grow" />
                </div>
                <div className="">
                    <PartnerCarousel />
                </div>
            </div>
        </div>
    )
}

export default HomeAbout