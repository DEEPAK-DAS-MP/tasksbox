import React from 'react'
import TaskItem from './TaskItem'
const TaskList=(props)=>{
    const {taskbox}=props
    return (
        <div>
            <h2>Task List</h2>
            <h3>Tasks-{taskbox.length}</h3>
            {taskbox.length===0?(
                <div>
                    <h3>No Tasks Found</h3>
                    <h4>Add Your First Task</h4>
                </div>
            ):(<div>
                {
                taskbox.map((task)=>{
                    return (
                        <TaskItem key={task.id} {...task}/>
                    )
                })
                }
            </div>)}
        </div>
    )
}
export default TaskList