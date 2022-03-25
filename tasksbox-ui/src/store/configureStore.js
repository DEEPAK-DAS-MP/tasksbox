import { createStore,combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import tasksboxReducer from "../reducers/tasksboxReducer"
const configureStore=()=>{
    const store=createStore(combineReducers({
        taskbox:tasksboxReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore 