import { useRef, useState } from "react";
import homeHeaderVid from "../../assets/vdo/homeHeader.mp4"
import homeheadimg from "../../assets/img/homeheadimg.png"
import { FaCirclePlay, FaCirclePause  } from "react-icons/fa6";
const HomeHeader = () => {
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
        <div className="relative overflow-hidden w-full" style={{ paddingTop: '43.25%' }}>
            {/* <video ref={videoRef} loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src={homeHeaderVid} type="video/mp4" />
            </video> */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img src={ homeheadimg} className="  h-full w-full "/>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 px-[5%] py-[1%] md:py-[5%] flex flex-col justify-between gap-2">
                <div className="flex flex-col lg:gap-10 md:gap-7 gap-2 w-full">
                    <p className="font-extrabold lg:text-4xl md:text-2xl text-xl text-white md:w-1/4">Inclusive care for children with special needs</p>
                    <div className="flex md:gap-6 gap-4">
                        <button className="font-bold md:px-4 px-2 bg-white cursor-pointer rounded-sm md:py-2 sm-1">What we do</button>
                        {/* {
                            isPlaying ? (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePause  className="md:text-3xl text-xl"/> Pause</button>
                            ) : (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePlay className="md:text-3xl text-xl"/> Play</button>
                            )
                        } */}
                    </div>
                </div>
                <div className="text-white md:text-sm text-xs flex md:items-center md:gap-2 gap-0 md:flex-row flex-col justify-start">
                    <p className="flex-none text-start">230 children under our care</p>
                    <hr className="md:flex-grow w-full" />
                    <p className="flex-none">58 donations collected</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader