import { CrossIcon } from "../../icons/CrossIcon";
import  { Button } from "./Buttons";
import { InputBox } from "./Input";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({open, onClose} : CreateContentModalProps) {
    return (
        
        
        <div>
            {open && <div className="w-screen h-screen fixed top-0 left-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-md p-4 border-gray-200 border max-w-72">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon size="md" />
                        </div>
                    </div>
                    <div>
                        <InputBox placeholder="Enter Title" onChange={()=>{}}/>
                        <InputBox placeholder="Enter Link" onChange={()=>{}}/>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit" onClick={() => alert('Button clicked!')} size="md"/>
                    </div>
                </div>
                                  
            </div>
             </div>}
        </div>
    )
}

