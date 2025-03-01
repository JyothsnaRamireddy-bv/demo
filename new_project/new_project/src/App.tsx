import React from "react";
import { useState, useEffect } from "react";
import Button from "./button";
type Status = "idle" | "loading" | "success" | "error";

function App(){
    const [status, setStatus] = useState("idle");

    setStatus("loading");
    const [todos,setTodos] = useState(["Read a book", "Go to the gym", "Learn React"]);

    const todosCompletedPercentage = 
      todos.filter((todo) => todo.completed).length / todos.length * 100;
    
    return(
      <>
          <Button todosCompletedPercentage={todosCompletedPercentage} onClick={() => alert("Clicked")}/>
          <h3>Todo lists</h3>
          <ul>
            todos.map((todo))
          </ul>
      </>
    );
}

export default App;