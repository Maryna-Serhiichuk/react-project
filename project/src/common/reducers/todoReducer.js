import {setTodo} from './../actions/todoActions'

let initialState = {
	todo: [],
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'SET_TODO':
			return {
				...state,
				todo: action.todo,
			}

		case 'CHANGE_TEXT_TASK':
			return {
				...state,
				todo: state.todo.map( task => {
					if(task.id == action.taskId){
						return {...task, title: action.taskText}
					}
					return task
				})
			}

		case 'TASK_DONE':
			return {
				...state,
				todo: state.todo.map( task => {
					if(task.id == action.taskId){
						return {...task, completed: true}
					}
					return task
				})
			}

		case 'TASK_NOT_DONE':
			return {
				...state,
				todo: state.todo.map( task => {
					if(task.id == action.taskId){
						return {...task, completed: false}
					}
					return task
				})
			}

		default:
			return state;
	}
}

export default todoReducer