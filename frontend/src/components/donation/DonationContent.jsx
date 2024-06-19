import { useState } from "react"

const DonationContent = () => {
    const [selectedContainers, setSelectedContainers] = useState('Overview')
    const handleClickTab = (tab) => {
        setSelectedContainers(tab)
    }

    const renderComponent = () => {
        switch (selectedContainers) {
            case 'Overview':
                return <div className="text-sm font-medium text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    <br />
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>;
            case 'Impact':
                return <div className="text-sm font-medium text-slate-700">
                    Lorem ipsum douspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    <br />
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>;
            case 'What You get':
                return <div className="text-sm font-medium text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    <br />
                    Aenean faucibus nibh et justo  lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </div>;
            default:
                return null;
        }
    }

    return (
        <div className="p-[5%] flex flex-col md:gap-y-28 gap-8 border-b">
            <div className="flex md:gap-28 gap-8 flex-col md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="font-bold md:text-4xl text-2xl tracking-wider mb-3">
                        How you can contribute to caring for our kids
                    </h1>
                    <p className="text-sm font-medium text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className="md:w-1/2 ">
                    <div className="flex gap-5 mb-3">
                        <button onClick={() => handleClickTab('Overview')} className={`font-semibold ${selectedContainers === 'Overview' ? 'border-b-2 border-solid border-yellow-500' : ''}`}>Overview</button>
                        <button onClick={() => handleClickTab('Impact')} className={`font-semibold ${selectedContainers === 'Impact' ? 'border-b-2 border-solid border-yellow-500' : ''}`}>Impact</button>
                        <button onClick={() => handleClickTab('What You get')} className={`font-semibold ${selectedContainers === 'What You get' ? 'border-b-2 border-solid border-yellow-500' : ''}`}>What You get</button>
                    </div>
                    <div>
                        {renderComponent()}
                    </div>
                </div>
            </div>
            <div className="flex gap-4 md:flex-row flex-col">
                <h1 className="font-bold md:text-4xl text-2xl tracking-wider  md:w-1/3">
                    How we use your donation
                </h1>
                <p className="md:w-1/3 text-sm text-slate-700 font font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.
                </p>
                <p className="md:w-1/3 text-sm text-slate-700 font font-medium">
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                </p>
            </div>
        </div>
    )
}

export default DonationContent