import React , { useState } from 'react'


function EditTodo(props) {

    const [text , setText ] = useState(props.text)
    
    let inputHandler = e => setText(e.target.value);


    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input value={text} onChange={inputHandler} className="form-control"/>
                </div>
                <>
                    <button type="button" className="btn btn-danger btn-sm " onClick={props.cancel}>Cancel</button>
                    <button type="button" className="btn btn-info btn-sm ml-1" onClick={() => props.edit(text)}>Done</button>
                </>
            </div>
        </div>
    )
}


export default EditTodo;