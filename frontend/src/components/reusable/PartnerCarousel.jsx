import { Component } from "react";
import Slider from "react-slick";
import firstimage from "../../assets/img/supportimg/firstimage.jpeg"
import secondimage from "../../assets/img/supportimg/secondimage.png"
import thirdimage from "../../assets/img/supportimg/thirdimage.png"
import fourth from "../../assets/img/supportimg/fourth.png"
import fifth from "../../assets/img/supportimg/fifth.jpeg"
import sixth from "../../assets/img/supportimg/sixth.png"
import seventhimage from "../../assets/img/supportimg/seventhimage.png"
import eightimage from "../../assets/img/supportimg/eightimage.png"
import ninthimage from "../../assets/img/supportimg/ninthimage.png"


const imageArray = [firstimage, secondimage, thirdimage, fourth, fifth, sixth, seventhimage, eightimage, ninthimage]
export default class PartnerCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
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
          {imageArray.map((item, index) => (
            <div key={index} className="md:h-20 h-16">
              <div className="h-full flex items-center justify-center">
                <img src={item} alt="Partners" className="h-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}