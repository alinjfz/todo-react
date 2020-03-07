import React , { useState } from 'react';

import ToDo from './ToDo';

function TodoList(props) {

    const [ statusDone , setDone ] = useState(false);

    let { todos } = props;

    let filterTodos = todos.filter(item => item.done === statusDone)

    return (
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a href="#a" className={`nav-item nav-link font-weight-bold ${ !statusDone ? 'active' : '' }`} id="nav-home-tab" onClick={() => setDone(false)}>undone <span className="badge badge-secondary">{ todos.filter(item => item.done === false).length }</span></a>
                    <a href="#a" className={`nav-item nav-link font-weight-bold ${ statusDone ? 'active' : '' }`} id="nav-profile-tab" onClick={() => setDone(true) }>done <span className="badge badge-success">{ todos.filter(item => item.done === true).length}</span></a>
                </div>
            </nav>
            {
                filterTodos.length === 0
                    ?   <p>the list is empty!</p>
                    : filterTodos.map(item => <ToDo 
                                                    key={item.key} 
                                                    item={item} 
                                                    delete={props.delete}
                                                    toggle={props.toggle} 
                                                    edit={props.edit}
                                                />
                                            )
            }
        </>
    )
}


export default TodoList;