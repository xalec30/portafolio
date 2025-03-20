import { Button } from "./ui/button";
import { Github, LinkedinIcon,Mail,MessageCircle, Heart} from "lucide-react"
import { IconReact } from "./svg";

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
                    <div className="flex-row flex flex-nowrap justify-center sm:justify-end">
                        <Button variant="link"><Github/></Button>
                        <Button variant="link"><LinkedinIcon /></Button>
                        <Button variant="link"><Mail size={36} /></Button>
                        <Button variant="link"><MessageCircle/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}