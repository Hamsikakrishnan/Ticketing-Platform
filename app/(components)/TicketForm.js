"use client";
import React, {useState} from "react";
import {useRouter} from "next/navigation";
export default function TicketForm() {
   const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setFormData((preState) => ({
         ...preState,
         [name]: value,
      }));
   }
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
      };
      const [formData, setFormData] = useState(startingTicketData);
      return(
        <div className="flex justify-center">
           <form>
              <h3>Create your Ticket</h3>
              <label>Title</label>
              <input 
                id="title" 
                name= "title" 
                onChange={handleChange} 
                required ={true} 
                value={formData.title}></input>
           </form>
        </div>
      )
}