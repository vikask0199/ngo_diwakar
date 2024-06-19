import TeamCard from "../reusable/TeamCard"
import team from "../../assets/img/team.png"

const Blogsec = () => {
    return (
        <div className="px-[5%] flex flex-col gap-8 items-center">
            <h1 className="md:text-4xl md:font-extrabold text-2xl font-bold">Meet our team</h1>
            <p className="font-medium text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex gap-y-5 flex-wrap w-full">
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
                <TeamCard image={team} name='Leonard John Davies' deg='Cofounder, CEO'/>
            </div>
        </div>
    )
}

export default Blogsec

