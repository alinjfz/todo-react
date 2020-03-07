import React, {useState} from 'react';
import EditTodo from './EditToDo';


export default function ToDo(props){
    const [ edit , setEdit ] = useState(false);
    
    let editHandler = text => {
        props.edit(item.key,text);
        setEdit(false);
    }
    const { item } = props;
    let cancelHandler = () => {
        setEdit(false);
    }
    return (
        <>
        {
            ! edit ? (
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>{item.text}</div>
                    <div>
                        <button type="button" className="btn btn-danger btn-sm" onClick={()=> props.delete(item.key)}>delete</button>
                        <button type="button" className="btn btn-info btn-sm ml-1" onClick={() => setEdit(true)} >Edit</button>
                        <button type="button" className={`btn btn-sm ml-1  ${ item.done ? "btn-warning" : "btn-success"} `} onClick={() => props.toggle(item.key)}>{item.done ? "undone" : "Done"}</button>
                    </div>
                        </div>
                    </div>)  
                : <EditTodo text={item.text} edit={editHandler} cancel={cancelHandler}/> 
        }
        </>
  
        
        );
}