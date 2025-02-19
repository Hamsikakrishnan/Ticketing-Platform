import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

export default function TicketCard() {
    return(
        <div>
            <h1>Ticket Card</h1>
            <DeleteBlock />
            <PriorityDisplay />
            <ProgressDisplay />
            <StatusDisplay />
        </div>
    )
}