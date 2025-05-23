export function InputBox({onChange = ()=>{}, placeholder, type = "text"} : {onChange?: () => void, placeholder: string, type?: string}) {
    return(
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={placeholder} onChange={onChange} type={type}></input>
    )
}