import {getTodoApi} from './../../../main/axios/index'

export const setTodo = (todo) => {
	return {
		type: 'SET_TODO',
		todo,
	}
}
export const changeTextTask = (taskId, taskText) => {
	return {
		type: 'CHANGE_TEXT_TASK',
		taskId,
		taskText,
	}
}

export const setChangeStatusTask = (newState) => {
	return {
		type: 'CHANGE_STATUS_TASK',
		payload: newState,
	}
}

export const changeStatusTask = (taskId) => {
	return (dispatch, getState) => {
		const state = getState()
		const newState = state.todosReducer.todo.map( todo => {
			if(taskId == todo.id){
				return {...todo, completed: !todo.completed}
			}
			return todo
		})
		dispatch( setChangeStatusTask(newState) )
	}
}

export const getTodo = () => {
	return (dispatch) => {
		getTodoApi()
			.then(data => {
				dispatch( setTodo(data) )
			})
	}
}