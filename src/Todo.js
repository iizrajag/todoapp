import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react'
import db from './Firebase';

function Todo(props) {
    return (
        <List className="todo">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline⏲" />
            </ListItem>
            <Button variant="outlined" onClick={ event=>{db.collection('todos').doc(props.todo.id).delete()}}>Delete Me🚮</Button>
        </List>
    )
}

export default Todo
