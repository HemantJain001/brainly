export function SidebarItem({icon, text, onClick} : {icon: any, text: string, onClick: () => void}) {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer font-extralight ml-4 my-2 transition-all duration-150" onClick={onClick}>
            {icon}
            <span className="text-gray-700">{text}</span>
        </div>
    );
}