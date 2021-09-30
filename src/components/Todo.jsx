import React from "react";

const Todo = ({todo,setTodo,todos,setTodos,setEditTodo,editTodo,deleteTodo,handleEdit}) => {
    return(
        <div class='list'>
            
                <div class="datos">
                    <a> 
                    <input type='checkbox' name='checktodo' ></input>
                     {todo.name}
                    </a>
                </div>
            

                <div class="btn-option">
                <button className='btn-edit' onClick={() => handleEdit(todo) }> Editar </button>
                <button className='btn-delete' onClick={() => deleteTodo(todo) }> Eliminar</button>
                </div>
       
        </div> 
    );
}

export default Todo;