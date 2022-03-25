const initialState=[]

const tasksboxReducer=(state=initialState,action)=>{
    switch(action.type){
        case "LIST_TASK":{
            return [...action.payload]
        }
        case "ADD_TASK":{
            return [...state,{...action.payload}]
        }
        case "REMOVE_TASK":{
            return state.filter((ele)=>{
                return ele.id!==action.payload
            })
        }
        case "UPDATE_TASK":{
            return state.map((ele)=>{
               if(ele.id===action.payload.id){
                    return {...ele,...action.payload}
                }
                else{
                    return {...ele}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}
export default tasksboxReducer