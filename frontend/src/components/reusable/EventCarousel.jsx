import { Component } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";

export default class EventCarousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="h-28 px-5">
                        <div className="bg-yellow-400 rounded-lg h-full p-3 gap-5 flex justify-around">
                            <div className="flex flex-col h-full gap-1">
                                <h2 className="text-xl font-bold">10</h2>
                                <p className="text-sm ">APR</p>
                            </div>
                            <div className="flex flex-col h-full gap-2">
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm">NEXT EVENT</p>
                                   <div className="border border-solid border-black w-20"></div>
                                </div>
                                <h1 className="text-xl font-bold">A day with our wonderful children </h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <button className="h-12 w-12 rounded-full flex items-center justify-center bg-white"><IoIosArrowRoundForward className="h-10 w-10" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-28 px-5">
                        <div className="bg-yellow-400 rounded-lg h-full p-3 gap-5 flex justify-around">
                            <div className="flex flex-col h-full gap-1">
                                <h2 className="text-xl font-bold">10</h2>
                                <p className="text-sm ">APR</p>
                            </div>
                            <div className="flex flex-col h-full gap-2">
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm">NEXT EVENT</p>
                                    <div className="border border-solid border-black w-20"></div>
                                </div>
                                <h1 className="text-xl font-bold">A day with our wonderful children </h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <button className="h-12 w-12 rounded-full flex items-center justify-center bg-white"><IoIosArrowRoundForward className="h-10 w-10" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-28 px-5">
                        <div className="bg-yellow-400 rounded-lg h-full p-3 gap-5 flex justify-around">
                            <div className="flex flex-col h-full gap-1">
                                <h2 className="text-xl font-bold">10</h2>
                                <p className="text-sm ">APR</p>
                            </div>
                            <div className="flex flex-col h-full gap-2">
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm">NEXT EVENT</p>
                                    <div className="border border-solid border-black w-20"></div>
                                </div>
                                <h1 className="text-xl font-bold">A day with our wonderful children </h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <button className="h-12 w-12 rounded-full flex items-center justify-center bg-white"><IoIosArrowRoundForward className="h-10 w-10" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-28 px-5">
                        <div className="bg-yellow-400 rounded-lg h-full p-3 gap-5 flex justify-around">
                            <div className="flex flex-col h-full gap-1">
                                <h2 className="text-xl font-bold">10</h2>
                                <p className="text-sm ">APR</p>
                            </div>
                            <div className="flex flex-col h-full gap-2">
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm">NEXT EVENT</p>
                                    <div className="border border-solid border-black w-20"></div>
                                </div>
                                <h1 className="text-xl font-bold">A day with our wonderful children </h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <button className="h-12 w-12 rounded-full flex items-center justify-center bg-white"><IoIosArrowRoundForward className="h-10 w-10" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="h-28 px-5">
                        <div className="bg-yellow-400 rounded-lg h-full p-3 gap-5 flex justify-around">
                            <div className="flex flex-col h-full gap-1">
                                <h2 className="text-xl font-bold">10</h2>
                                <p className="text-sm ">APR</p>
                            </div>
                            <div className="flex flex-col h-full gap-2">
                                <div className="flex gap-2 items-center">
                                    <p className="text-sm">NEXT EVENT</p>
                                    <div className="border border-solid border-black w-20"></div>
                                </div>
                                <h1 className="text-xl font-bold">A day with our wonderful children </h1>
                            </div>
                            <div className="h-full flex items-center justify-center">
                                <button className="h-12 w-12 rounded-full flex items-center justify-center bg-white"><IoIosArrowRoundForward className="h-10 w-10" /></button>
                            </div>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        );
    }
}