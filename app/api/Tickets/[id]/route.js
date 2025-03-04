import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, {params}){
    try{
        const {id} = await params;
        const foundticket = await Ticket.findOne({ _id: id});
        return NextResponse.json({foundticket}, {status: 200})
    }
    catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}

export async function DELETE(req, {params}){
    try{
       const {id} = await params;
       await Ticket.findByIdAndDelete(id);
       return NextResponse.json({message: "Ticket deleted"}, {status: 200})
    }
    catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}

export async function PUT(req, {params}){
    try{
        const {id} = await params;
        const body = await req.json();
        const ticketData = body.formData;
        const updateTicketData = await Ticket.findByIdAndUpdate(id,{
            ...ticketData
        });
        return NextResponse.json({message: "Ticket updated"}, {status: 200})
    }
    catch(error){
        return NextResponse.json({message: "Error", error},{status: 500})
    }
}