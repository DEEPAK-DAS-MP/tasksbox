import axios from "axios";

export const startListTasks=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3033/api/tasks')
        .then((response)=>{
        const result=response.data
        dispatch(setListTasks(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const setListTasks=(result)=>{
    return {
        type:"LIST_TASK",
        payload:result
    }
}

export const addTasks=(task)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3033/api/tasks',task)
        .then((response)=>{
        const result=response.data
        console.log(result)
      dispatch(setAddTasks(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    
}
export const setAddTasks=(result)=>{
    return {
        type:"ADD_TASK",
        payload:result
    }
}

export const removeTasks=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response)=>{
        const result=response.data
        console.log(result)
      dispatch(setRemoveTasks(id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    
}

export const setRemoveTasks=(id)=>{
    return {
        type:"REMOVE_TASK",
        payload:id
    }
}


export const updateTasks=(task)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
        .then((response)=>{
        const result=response.data
        console.log(result)
      dispatch(setUpdateTasks(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    
}

export const setUpdateTasks=(result)=>{
    return {
        type:"UPDATE_TASK",
        payload:result
    }
}