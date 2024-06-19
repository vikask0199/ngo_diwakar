import { useRef, useState } from "react"
import homeHeaderVid from "../../assets/vdo/homeHeader.mp4"
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6"
import PartnerCarousel from "../reusable/PartnerCarousel"

const NgoHead = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)
    const handlePlayClick = () => {
        const video = videoRef.current

        if (video) {
            if (isPlaying) {
                video.pause()
            }
            else {
                video.play()
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="md:min-h-[900px] min-h-[1100px] flex flex-col relative">
            <div className="flex-grow"></div>
            <div className="flex-grow bg-amber-100"></div>
            <div className="h-full w-full absolute top-0 px-[5%] flex flex-col md:justify-evenly justify-between md:gap-0">
                <div className='flex justify-around flex-col md:flex-row gap-y-3'>
                    <h1 className='md:text-4xl md:font-extrabold text-2xl font-bold md:w-1/2'>
                        We are a non-governmental organization
                    </h1>
                    <div className='md:w-1/2'>
                        <p className='font-semibold text-lg leading-7'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <p className='text-gray-800 leading-relaxed font-normal text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
                    </div>
                </div>
                <div className="relative overflow-hidden w-full h-72 rounded-lg">
                    <video ref={videoRef} muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                        <source src={homeHeaderVid} type="video/mp4" />
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {
                            isPlaying ? (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePause className="md:text-3xl text-xl" /> Pause</button>
                            ) : (
                                <button onClick={handlePlayClick} className="flex items-center justify-center gap-2 text-white"><FaCirclePlay className="md:text-3xl text-xl" /> Play</button>
                            )
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around gap-5 md:gap-0">
                    <div className="md:w-1/3">
                        <p className="md:font-bold uppercase tracking-widest font-semibold text-gray-800">Our Mission</p>
                        <h3 className="font-bold md:text-lg text-base">
                            We make sure to provide inclusive care for children with special needs
                        </h3>
                        <p className="md:text-base text-sm font-normal leading-relaxed text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                    <div className="md:w-1/3">
                        <p className="md:font-bold uppercase tracking-widest font-semibold text-gray-800">Our Mission</p>
                        <h3 className="font-bold md:text-lg text-base">
                            We make sure to provide inclusive care for children with special needs
                        </h3>
                        <p className="md:text-base text-sm font-normal leading-relaxed text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>
                    </div>
                </div>
                <PartnerCarousel />
            </div>
        </div>
    )
}

export default NgoHead