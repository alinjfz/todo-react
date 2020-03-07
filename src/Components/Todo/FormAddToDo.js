import React, { useState } from 'react';


export default function FormAddToDo(props){
    const [ txt , setTxt ] = useState('');
    
      let formHandler = e => {
        e.preventDefault();
        props.add(txt);
        setTxt('')
      }
      let inputHandler= e => setTxt(e.target.value);
         
      

    return (
    <form className="form-inline" onSubmit={formHandler}>
    <div className="form-group">
      <input type="text" onChange={inputHandler} value={txt} className="form-control mx-sm-3" placeholder="i want to do ..."/>
      <button type= "submit" className="btn btn-primary">add</button>
    </div>
  </form>);

}