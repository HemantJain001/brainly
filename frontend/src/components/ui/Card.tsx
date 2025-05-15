import { ShareIcon } from "../../icons/ShareIcon";

export interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
    return <div>
        <div className="bg-white rounded-md p-4 border-gray-200 border max-w-72">
            <div className="flex justify-between ">
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2"><ShareIcon size="md"/></div>
                    {title}
                </div>
                <div className="flex items-center text-gray-500">
                    <div className="text-gray-500 pr-2">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <ShareIcon size="md"/>
                        </a>
                    </div>
                    <div className="text-gray-500 pr-2">
                        <ShareIcon size="md"/>
                    </div>
                </div>
            </div>
            <div className="py-4 px-2 min-h-48">
                {type == "youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }



                { type == "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}

            </div>
            
            
        </div>  
    </div>
}