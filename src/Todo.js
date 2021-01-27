 import React from 'react';
 import {List, ListItem,ListItemText} from '@material-ui/core';
 import db from './firebase'
 
 function Todo(props) {
     
     return (
         <List className = 'todo_ list'>
            <ListItem>
                <ListItemText primary = {props.todo_obj.todo} />
                
            </ListItem>
            <ListItem>
            <button  onClick = {(event) => { event.preventDefault();  db.collection('todos').doc(props.todo_obj.id).delete()}} >Delete</button>
            </ListItem>
             
         </List>
     )
 }
 
 export default Todo;
 