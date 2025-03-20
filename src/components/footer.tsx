import { Button } from "./ui/button";
import { Github, LinkedinIcon,Mail,MessageCircle, Heart} from "lucide-react"
import { IconReact } from "./svg";
import { Link } from "react-router-dom";
import { socialNetwork } from "@/const/socialNetworks";

export default function Footer(){

    return(
        <div className="p-4">
            <div className="flex flex-col-reverse sm:flex-row wrap justify-center sm:justify-normal">
                <div className="w-full sm:w-1/2 pt-2 justify-center sm:justify-normal">
                    <p className="font-medium text-sm text-stone-400 text-center sm:text-current">
                        Desarrollado con 
                        <Heart fill="#e7000b" className="inline" color="#e7000b" /> con  
                        <IconReact className="inline pl-1 pr-1"/>
                    </p>
                </div>
                <div className="w-full sm:min-w-1/2">
                    <div className="flex-row gap-1.5 flex flex-nowrap justify-center sm:justify-end">
                    {
                        socialNetwork.map((social) => (
                            <Link key={social.name} to={social.url} target="_blank">
                                <Button className="rounded-full cursor-pointer" size="icon">
                                    {social.icon}
                                </Button>
                            </Link> 
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}