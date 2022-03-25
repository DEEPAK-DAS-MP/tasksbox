import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
const TaskForm=(props)=>{
    const {formSubmit,isSaved,toggleIsSaved,id:num,title:taskTitle,status:taskStatus}=props
    const [id,setId]=useState(num?num:uuidv4())
    const [title,setTitle]=useState(taskTitle?taskTitle:'')
    const [status,setStatus]=useState(taskStatus?taskStatus:false)
    useEffect(()=>{
        console.log('is saved',isSaved)
        if(isSaved){
            setId(uuidv4())
            setTitle('')
            setStatus(false)
            toggleIsSaved()
        }
    },[isSaved])
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleStatusChange=(e)=>{
        setStatus(e.target.checked)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            title:title,
            status:status
        }
        formSubmit(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={handleTitleChange}/>
                <input type="checkbox" checked={status} onChange={handleStatusChange}/>
                <label>Completed</label> 
                <input type="submit" value="Save"/>
                </form>
        </div>
        )
}
export default TaskForm