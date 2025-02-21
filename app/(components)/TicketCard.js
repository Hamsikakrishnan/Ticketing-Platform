import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
    return(
        <div className="flex flex-col bg-slate-900 hover:bg-slate-900 rounded-md shadow-lg p-3 m-3">
            <div className="flex items-center mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
                   <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="h-px border-0 bg-slate-500 mb-2" />
            <p className="whitespace-pre-wrap">This is the ticket Description</p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">21/02/2025 10:43PM</p>
                <ProgressDisplay />
                </div>
                <div className="ml-auto flex items-end">
                <StatusDisplay />
                </div>
                
            </div>
        </div>
    )
}