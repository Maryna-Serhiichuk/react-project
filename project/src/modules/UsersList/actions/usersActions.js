import {
	getUsersApi, 
} from './../../../main/axios/index'

export const setUsers = (users) => {
	return {
		type: 'SET_USERS',
		users,
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