import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
 
     const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      cache: 'no-store',
     })
     if(!res.ok){
      throw new Error("Failed to get ticket");
     }
     return res.json();
}
export default async function TicketPage({params}) {
  const EDITMODE = await params.id === "new"? false : true;
  let updateTicketData = {};
  if(EDITMODE){
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundticket;
  }
  else{
    updateTicketData={
      _id: "new",
    }
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData}/>
    </div>
  );
}