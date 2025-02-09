let initialState = {
	todos: [],
}

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'SET_TODO':
			return {
				...state,
				todos: action.todos,
			}

		case 'CHANGE_TEXT_TASK':
			return {
				...state,
				todos: state.todos.map( task => {
					if(task.id == action.taskId){
						return {...task, title: action.taskText}
					}
					return task
				})
			}

		case 'CHANGE_STATUS_TASK':
			return {
				...state,
				todos: action.payload
			}

		default:
			return state;
	}
}

export default todosReducer