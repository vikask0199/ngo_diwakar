import NewsHeader from "../components/news/NewsHeader"
import OurEvents from "../components/reusable/OurEvents"

const TopNews = () => {
  return (
    <>
      <NewsHeader />
      <OurEvents isDisplay={true}/>
    </>
  )
}

export default TopNews