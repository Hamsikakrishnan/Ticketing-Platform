import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard({ticket}) {
    return(
        // Ticket card  
        <div className="flex flex-col bg-slate-900 hover:bg-slate-900 rounded-md shadow-lg p-3 m-3">
            <div className="flex items-center mb-3">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                   <DeleteBlock />
                </div>
            </div>
            <h4>{ticket.title}</h4>
            <hr className="h-px border-0 bg-slate-500 mb-2" />
            <p className="whitespace-pre-wrap">{ticket.description}</p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">{ticket.createdAt}</p>
                <ProgressDisplay progress = {ticket.progress}/>
                </div>
                <div className="ml-auto flex items-end">
                <StatusDisplay status = {ticket.status}/>
                </div>
                
            </div>
        </div>
    )
}