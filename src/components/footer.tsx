import { Button } from "./ui/button";
import { Github, LinkedinIcon,Mail,MessageCircle, Heart} from "lucide-react"

export default function Footer(){

    return(
        <div className="p-4 bg-stone-800">
            <div className="flex flex-row">
                <div className="min-w-1/2 pt-2">
                    <p className="font-medium text-sm text-stone-400">Desarrollado con <Heart fill="#e7000b" className="inline" color="#e7000b" /> por Alex Rodriguez</p>
                </div>
                <div className="min-w-1/2">
                    <div className="flex-row flex flex-nowrap justify-end">
                        <Button variant="link"><Github className="w-14" color="#a6a09b"/></Button>
                        <Button variant="link"><LinkedinIcon color="#a6a09b" /></Button>
                        <Button variant="link"><Mail color="#a6a09b" /></Button>
                        <Button variant="link"><MessageCircle color="#a6a09b"/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}