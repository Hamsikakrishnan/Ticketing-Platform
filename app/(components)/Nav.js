import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center p-3 bg-slate-900">
            <div className="items-center flex p-4 space-x-4">
               <Link href="/">
                  <FontAwesomeIcon icon={faHome} className="icon" />
               </Link>
               <Link href="/">
                  <FontAwesomeIcon icon={faTicket} className="icon" />
               </Link>
            </div>
            <div>
                <p className="text-slate-100">hamsikakrishnan@gmail.com</p>
            </div>
        </nav>
    )
}