
'use strict'
'use client'
import ToDoForm from "./ToDoForm";
import ToDoShow from "./ToDoShow";
import { useState } from "react";


export default function ToDoAppMain() {

    const toDoList = [
        {
          title: "Task 1",
          text: "Complete the first task on your to-do list.",
        },
        {
          title: "Task 2",
          text: "Proceed to the second task and get it done.",
        },
        {
          title: "Task 3",
          text: "Continue with the third task and make progress.",
        },
        {
          title: "Task 4",
          text: "Work on the fourth task to stay productive.",
        },
        {
          title: "Task 5",
          text: "Finish the last task for a job well done.",
        },
      ];
      const [toDo, setToDo] = useState(toDoList);
      

      const addNewTask = () => {
        const newTask = { title: "Task 6", text: "Add a new task." };
        setToDo([...toDo, newTask]);
      };

      console.log(toDo);

    return (
        <>
            <ToDoForm />
            <h1>To Do List</h1>
            {toDo.map((todo,index) => (
        <ToDoShow key={index} title={todo.title} text={todo.text} />
      ))}       
      <button className="btn btn-primary" onClick={() =>addNewTask()}>Add</button>
        </>
    );
}