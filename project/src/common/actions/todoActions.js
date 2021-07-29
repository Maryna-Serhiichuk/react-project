import {getTodoApi} from './../../main/axios/index'

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

export const taskDone = (taskId) => {
	return {
		type: 'TASK_DONE',
		taskId,
	}
}

export const taskNotDone = (taskId) => {
	return {
		type: 'TASK_NOT_DONE',
		taskId,
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