import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactHeader = () => {
  return (
    <div className="flex p-[5%] justify-around bg-amber-100 flex-col md:flex-row gap-y-5">
      <div className="md:w-1/3 w-full flex flex-col md:gap-5 gap-2">
        <h1 className="md:text-4xl font-bold text-2xl">We&#39;d love to hear from you</h1>
        <p className="text-base text-slate-700 leading-relaxed">
          Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
        </p>
      </div>
      <div className="md:w-1/3 w-full flex flex-col gap-6">
        <div className="flex flex-col">
          <h3 className="font-bold md:text-lg text-base">Let&#39;s talk!</h3>
          <p className="text-sm text-slate-700 leading-relaxed">+234 09012346514 <span className="px-2">hello@largerthani.com</span></p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold md:text-lg text-base">Headoffice</h3>
          <p className="text-sm text-slate-700 leading-relaxed">8 Brewery Drive, Lagos,
            Nigeria.</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold md:text-lg text-base">Branch Office</h3>
          <p className="text-sm text-slate-700 leading-relaxed">Opp Opolo round about, Yenagoa, Bayelsa,
            Nigeria
          </p>
        </div>
        <div className="flex gap-3 md:text-3xl text-2xl">
          <FaFacebook className=" hover:text-yellow-800 cursor-pointer"/><FaXTwitter className="hover:text-yellow-800 cursor-pointer"/><FaLinkedin className="hover:text-yellow-800 cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader