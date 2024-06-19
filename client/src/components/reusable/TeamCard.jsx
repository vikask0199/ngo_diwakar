import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TeamCard = ({ deg, name, image }) => {
  return (
    <div className="flex flex-col items-center gap-y-3 lg:w-1/4 md:w-1/3 w-full">
      <img src={image} alt="" className="h-56  object-contain" />
      <h3 className="font-bold">{name}</h3>
      <p className="font-medium text-gray-700">{deg}</p>
      <div className="flex gap-3">
        <Link className="cursor-pointer">
          <FaFacebook />
        </Link>
        <Link className="cursor-pointer">
          <FaXTwitter />
        </Link>
        <Link className="cursor-pointer">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  )
}

export default TeamCard