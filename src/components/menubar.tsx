import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    NavigationMenuContent
} from "@/components/ui/navigation-menu"

import { Button } from "./ui/button"
import { Moon } from "lucide-react"
import { Link } from "react-router-dom"

export default function MenuBar(){

    return(
        <div className="pt-4 pb-4 sm:flex flex-col w-full hidden">
            
           <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                            <NavigationMenuLink className="text-base font-medium" asChild>
                                <Link to="/#about" viewTransition>Acerca de mi</Link>
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium" asChild>
                            <Link to="/#experiences" viewTransition>Experiencia laboral</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="text-base font-medium">Proyectos</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-64">
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>ES</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className="text-base font-medium">Español</NavigationMenuLink>
                            <NavigationMenuLink className="text-base font-medium">Ingles</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="font-medium">
                            <Button className="rounded-full cursor-pointer" size="lg">
                                <Moon color="#ffffff"/>
                            </Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuViewport />
            </NavigationMenu>
        </div>
    )
}