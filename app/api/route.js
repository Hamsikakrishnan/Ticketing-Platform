import Ticket from "../models/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        
        const body = await req.json();
        const newTicket = body.formData;
        await Ticket.create(newTicket);
        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201 });
    }
    catch(error){
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}