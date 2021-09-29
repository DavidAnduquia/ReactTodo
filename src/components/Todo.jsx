import React from "react";

const Todo = ({todo,index,deleteTodo,handleEdit}) => {
    return(
        <div class='list'>
            
                <div class="datos">
                    <a> 
                    <input type='checkbox' name='checktodo' ></input>
                    {todo} 
                    </a>
                </div>
               


                <div class="btn-option">
                <button className='btn-edit' onClick={() => handleEdit(index) }> Editar </button>
                <button className='btn-delete' onClick={() => deleteTodo(index) }> Eliminar</button>
                </div>
       
        </div> 
    );
}

export default Todo;