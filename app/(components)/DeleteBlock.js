import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteBlock() {
    return (
        <div>
            <FontAwesomeIcon icon = {faTrash} className="text-red-400 hover:cursor-pointer hover:text-red-200" />
        </div>
    )
}