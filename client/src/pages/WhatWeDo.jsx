
import Whatwedo from '../components/whatwedo/Whatwedo'
import Whatsec from '../components/whatwedo/Whatsec'
import Readmore from '../components/whatwedo/Readmore'
import OurEvents from '../components/reusable/OurEvents'


const WhatWeDo = () => {
  return (
   <>
   <Whatwedo/>
   <Whatsec/>
   <Readmore/>
   <OurEvents isDisplay={true} />
   </>
  )
}

export default WhatWeDo