import React,{useState} from "react";
import { useDispatch} from "react-redux";
import { addTasks } from "../actions/tasksboxAction";
import TaskForm from "./TaskForm";
const AddTask=(props)=>{
    const [isSaved,setIsSaved]=useState(false)
    const {}=props
    const dispatch=useDispatch()
    const formSubmit=(task)=>{
        dispatch(addTasks(task))
        setIsSaved(true)
    }
    const toggleIsSaved=()=>{
        setIsSaved(false)
    }
       
    return (
    <div>
        <h2>Add Task</h2>
        <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved}/>
    </div>
    )
}

export default AddTask