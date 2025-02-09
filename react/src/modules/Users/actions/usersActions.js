import {
	getUsersApi, 
} from './../../../api/axios/index'

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