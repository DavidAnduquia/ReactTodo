import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
    // Estado del todo a ingresar - input
    const[todo,setTodo] = useState({});
    // Lista de
    const[todos,setTodos] = useState([
        { todo:'todo 1'},
        { todo:'todo 2'},
        { todo:'todo 3'}
        ]);

    const[toggleSubmit,setToggleSubmit] = useState(true); 


    let handleChange = (e) => setTodo({ [e.target.name]:e.target.value });
    
    const handleClick = (e) => {
        todos.find((element) => {
            if(element.id === e){
                alert("estas guardando el mismo como otra tarjeta");
            }
        })
       if(Object.keys(todo).length === 0 || todo.todo.trim() === '' ){
            alert('el campo no puede estar vacio');
        }else{
            setTodos([...todos, todo]);
        }

    };


    const handleEdit = (e) => {

        let ite = todos.find((element) => {
            if(todos.indexOf(element) === e){
                //console.log(todos.indexOf(element) === e);
               // console.log(e);
                console.log(element);
        
                return element;
            }

        })
        setTodo(JSON.stringify(ite));

        setToggleSubmit(false);

    };


    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
    
    
    
    return(
        <>
            <div class="global">
                <form onSubmit = {(e) => e.preventDefault() }>
                        <label> Registro de tareas </label><br /> 
                        <input type='text' name='todo'  ></input>
                        <button onClick = { handleClick }> Agregar </button>
                </form>
         
             <div class="card-todo">
            
       
            {
            todos.map((value,index) => (
                <Todo 
                todo ={value.todo} key={index} 
                index={index}
                deleteTodo={deleteTodo}
                handleEdit={handleEdit}
                />
            ))
            } 

              </div> 
            
            </div>
           
        </>
    );
    
}

export default Form;