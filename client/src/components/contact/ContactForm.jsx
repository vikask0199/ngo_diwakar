import { useState } from "react"
import { toast } from 'react-toastify'


const ContactForm = () => {
    const to = 'viku135790@gmail.com';
    const [emailId, setEmaiiId] = useState("")
    const [messages, setMessages] = useState("")
    const [subject, setSubject] = useState("")

    const submitForm = async (e) => {
        e.preventDefault();
        if (emailId && messages && subject) {
            const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${messages}`;
            window.open(gmailUrl, '_blank');
        }
        else {
            toast("Something went wrong")
        }
    }

    return (
        <div className="bg-white p-[5%] flex items-center justify-center">
            <form action="" className="md:w-1/2 justify-between flex flex-wrap w-full gap-y-8" onSubmit={submitForm}>
                <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="fname" className="text-sm font-medium">First Name</label>
                    <input type="text" id="fname" className="border-b border-solid border-black outline-none" />
                </div>
                <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="lname" className="text-sm font-medium">Last Name</label>
                    <input type="text" id="lname" className="border-b border-solid border-black outline-none" />
                </div>
                <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="email" className="text-sm font-medium">Email Id</label>
                    <input type="text" id="email" className="border-b border-solid border-black outline-none" onChange={(e) => setEmaiiId(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-2 w-[45%]">
                    <label htmlFor="sub" className="text-sm font-medium">Subject</label>
                    <input type="text" id="sub" className="border-b border-solid border-black outline-none" onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="mess" className="text-sm font-medium">Message</label>
                    <textarea name="" id="mess" className="border h-48 border-solid border-black outline-none resize-none indent-1" placeholder="Type your Message" required onChange={(e) => setMessages(e.target.value)}></textarea>
                </div>
                <div className="flex justify-center w-full">
                    <button className="py-2 px-6 rounded-sm bg-yellow-400 font-bold text-sm hover:bg-yellow-500" >Send message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm