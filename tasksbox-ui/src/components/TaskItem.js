import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { removeTasks } from "../actions/tasksboxAction";
import EditTask from "./EditTask";
const TaskItem=(props)=>{
    const [toggle,setToggle]=useState(false)
    const dispatch=useDispatch()
    const {id,title,status}=props
    const handleToggle=()=>{
        const result=!toggle
        setToggle(result)
    }
    const handleRemove=(id)=>{
        console.log('handle remove',id)
        const confirmRemove=window.confirm("Are you sure!!")
        if(confirmRemove){
            dispatch(removeTasks(id))
        }
    }
    return (
        <div>
             <h2>TaskItem</h2>
            {
                toggle?(
                    <EditTask id={id} title={title} status={status} handleToggle={handleToggle}/>
                ):(
                    <div>
                        <h3>{title}</h3>
                        <button onClick={()=>{
                         handleRemove(id)
                        }}>Remove</button>
                        <button onClick={()=>{
                         handleToggle()
                        }}>Edit</button>
                    </div>
                )
            }

        </div>
    )
}
export default TaskItem