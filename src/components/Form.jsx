import React, {useEffect ,useState} from "react";
 
import Todo from "./Todo";
import {v4 as uuidv4 } from "uuid";
 
const Form = () => {
    // Estado del todo a ingresar - input
    const[todo,setTodo] = useState("");
    // Lista de
    const[todos,setTodos] = useState([
        { id:1 , name:'todo 1'},
        { id:2 , name:'todo 2'},
        ]);

    // Estado del cambio
    const[editTodo,setEditTodo] = useState(null);

    useEffect(() => {
        if(editTodo){
            setTodo(editTodo.name)
        }else{
            setTodo("");
        }
    }, [setTodo,editTodo]);
    

    let handleChange = (e) => setTodo(e.target.value);
    
    const handleClick = (e) => {
        if(!editTodo){
            setTodos([...todos,{ id:uuidv4(), name: todo  }]);
            setTodo("");
        }else {
            updateTodo(editTodo.id,todo)
        }
   
        
    };

    const updateTodo = (id,name) => {
    const newtodo = todos.map((todo) => 
             todo.id === id ? { id,name} : todo
           
    );
    setTodos(newtodo);
    setEditTodo("");

    };


    const handleEdit = ({id}) => {
        console.log("El id edit" , id)
        const findEdit = todos.find((todo) => todo.id === id );
        setEditTodo(findEdit);
        console.log("El findEdit" , findEdit)
    };


    const deleteTodo = ({id}) => {
        console.log(id);
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    
    
    return(
        <>
            <div class="global">
                <form onSubmit = {(e) => e.preventDefault() }>
                        <label> Registro de tareas </label><br /> 
                        <input type='text' name='todo' value={todo} onChange={handleChange} ></input>
                        <button onClick = { handleClick }> Agregar </button>
                </form>
         
             <div class="card-todo">
            
       
            {
            todos.map((todo) => (
                <Todo 
                todo={todo}
                setTodo={setTodo}
                todos={todos}
                setTodos={setTodos}

                editTodo={editTodo}
                setEditTodo={setEditTodo}
            
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