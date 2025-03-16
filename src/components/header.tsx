import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Github, LinkedinIcon,Mail,MessageCircle,Download } from "lucide-react"

export default function Header(){

    return(
        <div className="mt-4 mb-8 w-full h-80">
            <div className="flex flex-row min-h-full p-3">
                <div className="w-3/5 p-2 min-h-fit flex flex-col items-start justify-center">
                    <h1 className="text-3xl mb-3 font-medium tracking-wide">Hola! Soy Alex Rodriguez</h1>
                    <div className="border-b-2 w-100 mb-3">
                        <h2 className="text-xl mb-2 font-medium tracking-wide">Desarrollador Fullstack</h2>
                    </div>
                    <div className="flex flex-row gap-1.5">
                        <a href="https://github.com/xalec30" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <Github />
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/alexrodriguez30/" target="_blank">
                            <Button className="rounded-full cursor-pointer" size="icon">
                                <LinkedinIcon/>
                            </Button>
                        </a>

                        
                        <Button className="rounded-full" size="icon">
                            <Mail/>
                        </Button>
                        <Button className="rounded-full" size="icon">
                            <MessageCircle/>
                        </Button>
                        <Button className="rounded-full" >
                            <Download/>
                            Obtener CV
                        </Button>
                    </div>
                </div>
                <div className="w-2/5 p-2 min-h-fit flex-col content-center">
                    <div className="w-full flex flex-row justify-center content-center">
                    <Avatar className="w-64 h-64">
                            <AvatarImage className="w-full" src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    )
}