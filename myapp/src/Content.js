import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
     const [items,setitems]=useState([
         { id:1,
           check:true,
           task:"learn java script",
         },
         { id:2,
          check:true,
          task:"program learn java script",
        },
        { id:2,
          check:true,
          task:"react and node learn java script",
        }
     ])
     

  return (
      <main>
       <ul>
         {items.map((task)=>(
        <li>
           <input 
             type="checkbox"
             checked={task.check}
           />
           <label>
              {task.task}
           </label>
           <FaTrashAlt 
            role=''
           />
        </li>

         ))}
       </ul>
      
      </main>
  
      
    
  );
};

export default Content;
