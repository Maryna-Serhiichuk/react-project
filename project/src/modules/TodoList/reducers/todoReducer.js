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

		case 'CHANGE_STATUS_TASK':
			return {
				...state,
				todo: action.payload
			}

		default:
			return state;
	}
}

export default todoReducer