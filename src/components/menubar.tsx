import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";

import { Button } from "./ui/button"
import { Moon,Menu } from "lucide-react";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";

export default function MenuBar(){
    const [open, setOpen] = useState(false)

    return(
        <>
            <nav className="pt-4 pb-4 sm:flex flex-col items-end w-full hidden">
                <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                    <NavigationMenuLink className="text-base font-medium" asChild>
                                        <HashLink smooth to="/#about">Acerca de mi</HashLink>
                                    </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-base font-medium" asChild>
                                    <HashLink smooth to="/#experiences">Experiencia laboral</HashLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-base font-medium" asChild>
                                    <HashLink smooth to="/#projects">Proyectos</HashLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="w-auto">
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink className="font-medium">
                                    <Button className="rounded-md cursor-pointer" size="lg">
                                        <Moon color="#ffffff"/>
                                    </Button>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenuViewport />
                    </NavigationMenu>
            </nav>
            <nav className="sm:hidden flex flex-col p-2 items-end">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className="text-base p-2 font-medium" asChild>
                            <Drawer direction="left" open={open} onOpenChange={setOpen}>
                                <DrawerTrigger asChild>
                                    <Button size='lg' variant="outline"><Menu size={55} /> </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    
                                <NavigationMenu orientation="vertical" className="w-full">
                                    <NavigationMenuList aria-orientation="vertical" className="flex-col">
                                        <NavigationMenuItem>
                                                <NavigationMenuLink className="text-base font-medium" asChild>
                                                    <HashLink smooth to="/#about">Acerca de mi</HashLink>
                                                </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="text-base font-medium" asChild>
                                                <HashLink smooth to="/#experiences">Experiencia laboral</HashLink>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="text-base font-medium" asChild>
                                                <HashLink smooth to="/#projects">Proyectos</HashLink>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem className="w-auto">
                                        </NavigationMenuItem>

                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="font-medium">
                                                <Button className="rounded-md cursor-pointer" size="lg">
                                                    <Moon color="#ffffff"/>
                                                </Button>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                    <NavigationMenuViewport />
                                </NavigationMenu>


                                </DrawerContent>
                                </Drawer>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </>
       
    )
}