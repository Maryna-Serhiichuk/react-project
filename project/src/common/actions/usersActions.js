import {getUsersApi, getUserApi} from './../../main/axios/index'

export const setUsers = (users) => {
	return {
		type: 'SET_USERS',
		users,
	}
}

export const setUser = (user) => {
	return {
		type: 'SET_USER',
		user,
	}
}

export const getUsers = () => {
	return (dispatch) => {
		getUsersApi()
			.then(data => {
				dispatch( setUsers(data) )
			})
	}
}

export const getUser = (userId) => {
	return (dispatch) => {
		getUserApi(userId)
			.then(data => {
				console.log(data)
				dispatch( setUser(data) )
			})
	}
}
