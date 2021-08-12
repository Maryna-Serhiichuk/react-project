// style
import './../../App.scss'
import {connect} from 'react-redux'
// add
import React from 'react'
// components
import TodoList from './TodoList'
// actions
import {
	setTodo,
	changeTextTask,
	changeStatusTask,
	//thunk
	getTodo,
} from './actions/todoActions'

class TodoListApiContainer extends React.Component {

	componentDidMount(){
		this.props.getTodo();
	}

	render(){
		return(
			<>
				<div className='todo_wrap'>
					<div className='todo todo_title'>
						<div className='todo_name'>Name</div>
						<div className='todo_false'>Task</div>
						<div className='todo_true'>Done</div>
					</div>
				</div>
				{this.props.todo.map( todo => <TodoList key={todo.id} todo={todo} userId={todo.userId} changeTextTask={this.props.changeTextTask} changeStatusTask={this.props.changeStatusTask}/>)}
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		todo: state.todosReducer.todo,
	}
}

const TodoListContainer = connect(mapStateToProps, {
	setTodo,
	getTodo,
	changeTextTask,
	changeStatusTask,
})(TodoListApiContainer);

export default TodoListContainer