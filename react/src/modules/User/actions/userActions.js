import {
	getUserApi, 
	getUserAlbumsApi,
	getUserTodosApi,
	getUserPostsApi,
} from './../../../api/axios/index'

import userReducer from './../reducers/userReducer'

export const setUser = (user) => {
	return {
		type: 'SET_USER',
		user,
	}
}

export const getUser = (userId) => {
	return (dispatch) => {
		getUserApi(userId)
			.then(data => {
				dispatch( setUser(data) )
				dispatch( getUserAlbums(userId) )
				dispatch( getUserTodos(userId) )
				dispatch( getUserPosts(userId) )
			})
	}
}

export const setUserAlbums = (userAlbums) => {
	return {
		type: 'SET_USER_ALBUMS',
		userAlbums,
	}
}

export const getUserAlbums = (userId) => {
	return (dispatch) => {
		getUserAlbumsApi(userId)
			.then(data => {
				dispatch( setUserAlbums(data) )
			})
	}
}

export const setUserTodos = (userTodos) => {
	return {
		type: 'SET_USER_TODOS',
		userTodos,
	}
}

export const getUserTodos = (userId) => {
	return (dispatch) => {
		getUserTodosApi(userId)
			.then(data => {
				dispatch( setUserTodos(data) )
			})
	}
}

export const setUserPosts = (userPosts) => {
	return {
		type: 'SET_USER_POSTS',
		userPosts,
	}
}

export const getUserPosts = (userId) => {
	return (dispatch) => {
		getUserPostsApi(userId)
			.then(data => {
				dispatch( setUserPosts(data) )
			})
	}
}

export const setChangeStatusTask = (newState) => {
	return {
		type: "CHANGE_STATUS_TASK",
		payload: newState
	}
}

export const changeStatusTask = (taskId) => {
	return (dispatch, getState) => {
		const state = getState()
		const newState = state.userReducer.userTodos.map( todo => {
			if(taskId == todo.id){
				return {...todo, completed: !todo.completed}
			}
			return todo
		})
		dispatch( setChangeStatusTask(newState) )
	}
}