import HomeAbout from "../components/home/HomeAbout"
import HomeHeader from "../components/home/HomeHeader"
import HomeServices from "../components/home/HomeServices"
import ProjectHome from "../components/home/ProjectHome"
import OurEvents from "../components/reusable/OurEvents"

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeServices />
      <ProjectHome />
      <OurEvents isDisplay={true} />
    </>
  )
}

export default HomePage