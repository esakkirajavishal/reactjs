import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
alert("today task enter the three main task")

const v=prompt("Enter the task");
const i=prompt("Enter the task");
const s=prompt("Enter the task");


const Content = () => {
  // Define initial state for the tasks using useState hook
  const [items, setItems] = useState([
    {
      id: 1,
      check: false,
      task: i,
    },
    {
      id: 2,
      check: true,
      task: v,
    },
    {
      id: 3,
      check: false,
      task: s,
    },
  ]);

  // Function to handle checkbox toggle
  const toggleCheckbox = (id) => {
    // Update the state by mapping over the tasks and toggling the checked property for the specified id
    const updatedItems = items.map((task) =>
      task.id === id ? { ...task, check: !task.check } : task
    );
    setItems(updatedItems); // Update the state with the new array of tasks
  };
  const deleteCheckbox = (id) => {
  const updatedItems=items.filter ((task)=>
   task.id!==id)
   setItems(updatedItems); 
  }
  return (
    <main>
      <ul>
        {items.map((task) => (
          <li className='item' key={task.id}>
            <input
              type="checkbox"
              onChange={() => toggleCheckbox(task.id)}
              checked={task.check}
            />
            <label>{task.task}</label>
            <FaTrashAlt role='button' 
            onClick={() => deleteCheckbox(task.id)}
            tabIndex="100" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
