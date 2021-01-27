import {useState,useEffect} from 'react';
import {Button, InputLabel, Input, FormControl} from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase'
import firebase from 'firebase';

function App() {
  const [todo, setTodo] = useState([]);
  const [textinput, setInput] = useState('');

  console.log(textinput);


  useEffect(() => {

    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodo(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })

  },[])



  const addTodo = (event) => {
    event.preventDefault(); // to prevent reloading of page when add todo button is clicked.
      db.collection('todos').add({
        todo: textinput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      
      })
      
      setInput('');
      
  }
  return (
    <div className="App">
      <h1> Hello World ! </h1>
      <form>
      <FormControl>
        <InputLabel>type todo</InputLabel>
        <Input value = {textinput} onChange = {event => setInput(event.target.value)}/>
        
      </FormControl>
      
      <Button variant="contained" type = 'submit' disabled = {!textinput} color="primary" onClick = {addTodo}>Add todo </Button>
      
      {todo.map(todo => <Todo todo_obj={todo}/>)}
      </form>
    </div>
  );
}

export default App;
