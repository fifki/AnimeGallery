import React, { useState } from 'react'
import './style.css'
//react functional component export 
function Todo() {
    const [action,setAction] = useState('');
    const [todos,setTodos] = useState([{id:1, action:'Stand up'}]);
    function handleAcion(e){
        setAction(e.target.value);
    }
    function addTodo(){
        setTodos([...todos,{id:Date.now(), action: action}]);
        setAction("");   
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => id !== todo.id));
    }
  return (
    <div className='section'>
        <div>
            <input type="text" value={action} onChange={(evnt)=>handleAcion(evnt)} placeholder='What should i do next'/>
            <button onClick={addTodo}> Add Todo</button>
        </div>
        <ul>
            {todos.map( (todo)=><li key={todo.id} onClick={()=>deleteTodo(todo.id)}>{todo.action}</li>)  }
        </ul>

    </div>
  )
}
export default Todo