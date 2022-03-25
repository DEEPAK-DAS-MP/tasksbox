import React,{useEffect} from "react";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { startListTasks } from "../actions/tasksboxAction";
const TaskContainer=(props)=>{
    const taskbox=useSelector((state)=>{
        return state.taskbox
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startListTasks())
    },[])
   /* const addItem=(task)=>{
        return [...taskbox,task]
    }
    const removeItem=()=>{
        return taskbox.id
    }*/
    return (
        <div>
            <h1>Task Container</h1>
            <TaskList taskbox={taskbox}/>
            <AddTask />
        </div>
    )
}
export default TaskContainer