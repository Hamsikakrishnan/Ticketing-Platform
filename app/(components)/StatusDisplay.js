export default function StatusDisplay({status}) {
    const getColor = (status) =>{
        let color = "bg-slate-700"
        switch(status.toLowerCase()){
            case "done":
                color = "bg-greeen-200"
                return color
            case "started":
                color = "bg-yellow-200"
                return color
            case "not started":
                color = "bg-red-200"
                return color
        }
        return color; 
    }
    return (
       <span className={`inline-block rounded-md px-2 py-1 text-xs font-semibold text-black ${getColor(status)}`}>
        {status}
       </span>
    )
}