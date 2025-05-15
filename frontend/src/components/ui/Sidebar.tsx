import { SidebarItem } from "./SidebarItem";
import {ShareIcon} from "../../icons/ShareIcon";
import { XIcon } from "../../icons/XIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { HashIcon } from "../../icons/HashIcon";

export const Sidebar = () => { 
    return (
        <div className="h-screen bg-white w-64 shadow-md fixed left-0 top-0">
            <div className="flex items-center justify-center h-16 bg-gray-100 border-b">
                <h1 className="text-xl font-bold text-gray-700">Brain</h1>
            </div>

            <div className="mt-4">
                <SidebarItem icon={<XIcon size="md" />} text="Tweets" onClick={() => alert('Add Content clicked!')} />
                <SidebarItem icon={<YoutubeIcon size="md" />} text="Videos" onClick={() => alert('Share Brain clicked!')} />
                <SidebarItem icon={<HashIcon size="md" />} text="Hash Tags" onClick={() => alert('Settings clicked!')} />
                <SidebarItem icon={<ShareIcon size="md" />} text="Help" onClick={() => alert('Help clicked!')} />
            </div>
            
        </div>
    );
}