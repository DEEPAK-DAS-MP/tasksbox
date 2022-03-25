import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTasks } from '../actions/tasksboxAction'
import TaskForm from './TaskForm'
const EditTask=(props)=>{
    const dispatch=useDispatch()
    const {id,title,status,handleToggle}=props
    const formSubmit=(task)=>{
           dispatch(updateTasks(task))
           handleToggle()
    }
    return (
        <div>
            <h2>EditTask</h2>
            <TaskForm id={id} title={title} status={status} formSubmit={formSubmit}/>
        </div>
    )
}
export default EditTask