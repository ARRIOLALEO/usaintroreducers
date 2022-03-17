import {useState,useReducer} from 'react'
import {v4 as uuidv4} from 'uuid'
const initialReducer  = []

const reduceTodos = (state,action)=>{

    switch(action.type){

        case 'addTodo':
            return [...state,{todo:action.payload,id:uuidv4()}]
        
        default:
            return state
    }
}
function Todo(){

    const [newTodo,setNewTodo] = useState("")

    const [allTodos,dispach] = useReducer(reduceTodos,initialReducer)

    return(
    <>
    <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}></input>

    <button onClick={()=> dispach({type:'addTodo',payload:newTodo})}>Add new Todo</button>
    {
        allTodos.map((todo)=>{
            return(<div>{todo.todo}</div>)
        })
    }

    </>
    )
}

export default Todo