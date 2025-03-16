import { Github } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"


export default function Proyects(){
    return(
        <div className="w-full mt-10 mb-4">
            <div className="flex flex-col">
                <div className="w-full border-b-2">
                  <h1 className="text-2xl mb-2 font-medium tracking-wide">Proyectos</h1>
                </div>
                <div className="w-full flex flex-row mt-4 gap-5">
                    <div className="min-w-1/3">
                        <img className=" w-full h-46 object-cover" src="https://dummyimage.com/600x400/696669/fff"/>
                    </div>
                    <div className="min-w-2/3">
                        <div className="flex flex-col">
                            <h1 className="text-lg font-medium tracking-wide mb-0">Desarrollador de Software</h1>
                            <div className="flex flex-row gap-2 mt-2">
                                <Badge className="bg-purple-800">PHP</Badge>
                                <Badge className="bg-blue-800">Typescript</Badge>
                                <Badge className="bg-amber-400">Javascript</Badge>
                                <Badge className="bg-blue-300">React</Badge>
                                <Badge className="bg-purple-950">C#</Badge>
                                <Badge className="bg-amber-300">MYSQL</Badge>
                            </div>
                            <p className="w-fit min-h-auto text-balanced text-sm mt-2 text-left">
                                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.  Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. 
                            </p>
                            <div className="flex flex-row w-full flex-wrap mt-2">
                                <Button variant="outline"><Github /> Github</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row mt-4 gap-5">
                    <div className="min-w-1/3">
                        <img className=" w-full h-46 object-cover" src="https://dummyimage.com/600x400/696669/fff"/>
                    </div>
                    <div className="min-w-2/3">
                        <div className="flex flex-col">
                            <h1 className="text-lg font-medium tracking-wide mb-0">Desarrollador de Software</h1>
                            <div className="flex flex-row gap-2 mt-2">
                                <Badge className="bg-purple-800">PHP</Badge>
                                <Badge className="bg-blue-800">Typescript</Badge>
                                <Badge className="bg-amber-400">Javascript</Badge>
                                <Badge className="bg-blue-300">React</Badge>
                                <Badge className="bg-purple-950">C#</Badge>
                                <Badge className="bg-amber-300">MYSQL</Badge>
                            </div>
                            <p className="w-fit min-h-auto text-balanced text-sm mt-2 text-left">
                                Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.  Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. 
                            </p>
                            <div className="flex flex-row w-full flex-wrap mt-2">
                                <Button variant="outline"><Github /> Github</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-4 flex flex-row justify-center content-center p-10">
                    <Button>Ver todos mis proyectos</Button>
                </div>
            </div>
        </div>

    )
}