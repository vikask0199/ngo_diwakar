import DonationContent from "../components/donation/DonationContent"
import DonationHeader from "../components/donation/DonationHeader"
import OurEvents from "../components/reusable/OurEvents"

const Donation = () => {
    return (
        <>
            <DonationHeader />
            <DonationContent />
            <OurEvents isDisplay={false} />
        </>
    )
}

export default Donation