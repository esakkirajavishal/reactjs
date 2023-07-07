import React, { useState } from 'react';

const Content = () => {

  const moviename = () => {
    const upcomingMovies = ["LEO", "INDIAN 2", "JAILER", "SALAER", "JAHWAN"];
    const randomChange = Math.floor(Math.random() * 5);
    return upcomingMovies[randomChange];
  };

 const [count,setCount]=useState(99);
 function increment(){
     setCount(prevCount=>prevCount+1)
 }
 function decrement(){
  setCount(prevCount=>prevCount-1)
 }
  return (
      <main>
        <p>
          Lets Earn Money
        </p>
        <button>Subcribe</button>
        <button onClick={increment}>-</button>
        <span>{count}</span>
        <button onClick={decrement}>+</button>
      </main>
  
      
    
  );
};

export default Content;
