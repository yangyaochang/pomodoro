import React from 'react'
import circleIcon from '../../icons/circle.svg'
import play from '../../icons/play.svg'


const Todo = ({ todo }) => {
    return (
        <div className="todo d-flex align-items-center text-primary">
            <img src={ circleIcon } alt="" className="todo_style"/>
            <div className="todo_text">{ todo }</div>
            <img src={ play } alt="" className="todo_start"/>
        </div>
    )
}

export default Todo