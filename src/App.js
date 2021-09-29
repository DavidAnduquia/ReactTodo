import React from 'react';
import './App.css';
import Form from './components/Form';

/*
    1. Habilitar la opcion de editar el todo
    2. Permitir completar la tarea
    3. Organizar css

*/

const App = () => {

  return (
    <div className='App'> 
        <div className='App-content'>
              <Form></Form>
        </div>
    </div>
  );
}

export default App;