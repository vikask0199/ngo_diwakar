import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Captcha = () => {
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const navigate = useNavigate()
    const handleCaptchaChange = (value) => {
        setCaptchaVerified(true);
    };

    useEffect(() => {
        if (isCaptchaVerified) {
            setTimeout(() => {
                navigate('/Donate', { state: { isVerified: true } })
            }, 1000)
        }
    }, [isCaptchaVerified])


    return (
        <div className="h-96 flex items-center justify-center">
            <ReCAPTCHA
                sitekey="6LffjVEpAAAAABiML98bqOFiUuEfhqqY07apz_dF"
                onChange={handleCaptchaChange}
            />
        </div>
    )
}

export default Captcha