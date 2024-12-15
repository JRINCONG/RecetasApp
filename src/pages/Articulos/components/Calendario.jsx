import DatePicker from "react-datepicker";
import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";


export const Calendario = ({startDate, setStartDate}) => {
    return (  
            
            <DatePicker  
            selected={startDate} 
            onChange={(date) => setStartDate(date)}           
            />    
    );
  
}



