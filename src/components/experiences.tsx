import { Badge } from "./ui/badge"
import { experiences } from "@/const/experiences";

export default function Experiencie(){

    return(
        <section id="experiences" className="mt-4 mb-4 w-full">
            <div className="flex flex-col p-4 sm:p-0">
                <div className="w-full border-b-2">
                  <h1 className="text-2xl mb-2 font-semibold tracking-wide">Experiencia laboral</h1>
                </div>
                {
                    experiences.map((experience) => (
                        <div className="mt-5">
                            <div className="w-full flex gap-4 flex-row flex-nowrap">
                                <div className="w-1/4 text-left pt-1 ">
                                    <h1 className="text-slate-500 font-medium text-base">{experience.time}</h1>
                                </div>
                                <div className="w-3/4">
                                    <h1 className="text-lg font-medium tracking-wide mb-0">{experience.job}</h1>
                                    <h4 className="text-slate-500 font-medium text-base">{experience.company}</h4>
                                    <p className="w-fit min-h-auto text-balanced text-sm mt-2 text-left">
                                        {experience.content}
                                    </p>
                                    <h6 className="text-xs font-medium mt-2 w-full">Tecnologias utilizadas</h6>
                                    <div className="flex flex-row flex-wrap gap-2 mt-2">
                                    {
                                        experience.tags.map((tag) => (
                                            <Badge className={tag.color}>{tag.name}</Badge>
                                        ))
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}