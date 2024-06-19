import Blogsec from "../components/about/Blogsec"
import NgoHead from "../components/about/NgoHead"
import NgoSec from "../components/about/NgoSec"
import OurEvents from "../components/reusable/OurEvents"

const AboutPage = () => {
  return (
    <>
      <NgoHead />
      <NgoSec />
      <Blogsec />
      <OurEvents isDisplay={true} />
    </>
  )
}

export default AboutPage