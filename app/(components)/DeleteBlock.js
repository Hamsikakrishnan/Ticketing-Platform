"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/navigation";
export default function DeleteBlock({id}) {
    const router = useRouter();
    const deleteTicket = async() => {
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
            method: "DELETE",
        });
        if(res.ok){
            router.refresh();
        }
    }
    return (
        <div>
            <FontAwesomeIcon icon = {faTrash} 
            className="text-red-400 hover:cursor-pointer hover:text-red-200" 
            onClick={deleteTicket}
            />
        </div>
    )
}