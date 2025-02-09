// add
import React from 'react'

const UserTodos = (props) => {

	const changeStatus = () => {
		props.changeStatusTask(props.userTodos.id)	
	}

	return (
		<div className='userTodo'>
			{props.userTodos.completed 
				? <div className='userTodo_wrap true' onClick={changeStatus}>
					<span></span>
					<div className='userTodo_text'>{props.userTodos.title}</div>
				</div>

				: <div className='userTodo_wrap false' onClick={changeStatus}>
					<span></span>
					<div className='userTodo_text'>{props.userTodos.title}</div>
				</div>
			}
		</div>
	)
}
  
export default UserTodos