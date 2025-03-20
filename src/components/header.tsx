import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Download } from "lucide-react"
import { Link } from "react-router-dom";
import Profile  from "../assets/img/profile.webp";
import CV from "../cv/AlexanderRodriguez.pdf"
import { socialNetwork } from "@/const/socialNetworks";

export default function Header(){
    return(
        <header className="mt-4 mb-6 sm:mb-8 w-full h-fit p-4 sm:p-0">
            <div className="flex flex-row min-h-full gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full sm:w-3/5 min-h-fit flex flex-col items-start justify-center order-last sm:order-first">
                    <h1 className="text-3xl mb-3 font-medium tracking-wide">Hola! Soy Alexander Rodriguez</h1>
                    <div className="border-b-2 w-full mb-3">
                        <h2 className="text-xl mb-2 font-medium tracking-wide">Desarrollador Fullstack</h2>
                    </div>
                    <div className="flex flex-row gap-1.5">
                    {
                        socialNetwork.map((social) => (
                            <Link key={social.name} to={social.url} target="_blank">
                                <Button className="rounded-full cursor-pointer" size="icon">
                                    {social.icon}
                                </Button>
                            </Link> 
                        ))
                    }

                        <Link to={CV} target="_blank" download>
                            <Button className="rounded-full cursor-pointer" >
                                <Download/>
                                Obtener CV
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="w-full  sm:w-2/5 p-2 min-h-fit flex-col content-center">
                    <div className="w-full flex flex-row justify-center content-center">
                    <Avatar className="w-64 h-64">
                            <AvatarImage className="w-full" src={Profile} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}