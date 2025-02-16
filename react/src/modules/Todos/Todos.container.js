// style
import './../../App.scss'
import {connect} from 'react-redux'
// add
import React, { useEffect } from 'react'
// components
import Todos from './Todos'
// actions
import {
	setTodo,
	changeTextTask,
	changeStatusTask,
	//thunk
	getTodo,
} from './actions/todoActions'

function TodosListApiContainer(props) {

	useEffect(() => {
		props.getTodo();
	}, [])

	return(
		<>
			<div className='todo_wrap'>
				<div className='todo todo_title'>
					<div className='todo_name'>Name</div>
					<div className='todo_false'>Task</div>
					<div className='todo_true'>Done</div>
				</div>
			</div>
			{props.todos.map( todo => <Todos key={todo.id} todo={todo} userId={todo.userId} changeTextTask={props.changeTextTask} changeStatusTask={props.changeStatusTask}/>)}
		</>
	)
}

let mapStateToProps = (state) => {
	return {
		todos: state.todosReducer.todos,
	}
}

const TodosListContainer = connect(mapStateToProps, {
	setTodo,
	getTodo,
	changeTextTask,
	changeStatusTask,
})(TodosListApiContainer);

export default TodosListContainer