import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);
  const id = useRef(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
       <p> You clicked ${count} times </p>
       <button onClick={() => setCount(count + 1)}> 
           Click Me  
       </button>
       <button onClick={() => setCount(id.current)}> 
           Reset
       </button>       
    </> 
  );       
}
