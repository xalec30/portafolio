import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Github, LinkedinIcon,Mail,Send,Download } from "lucide-react"
import { Link } from "react-router-dom"

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
                        <Link to="https://github.com/xalec30" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <Github />
                            </Button>
                        </Link>
                        <Link to="https://www.linkedin.com/in/alexrodriguez30/" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <LinkedinIcon/>
                            </Button>
                        </Link>

                        
                        <Link to="mailto:xalecr30@gmail.com" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <Mail/>
                            </Button>
                        </Link>
                        <Link to="https://t.me/Alexder30" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <Send/>
                            </Button>
                        </Link>
                        <Link to="../cv/AlexanderRodriguez.pdf" target="_blank" download>
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
                            <AvatarImage className="w-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}