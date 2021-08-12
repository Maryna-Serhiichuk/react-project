// style
import './../../../App.scss'
// add
import React from 'react'


const UserTodos = (props) => {

	// console.log(props.userTodos.userId)

	// const changeTodoCompleted = (e) => {
	// 	console.log(props.userTodos.id)
	// }

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