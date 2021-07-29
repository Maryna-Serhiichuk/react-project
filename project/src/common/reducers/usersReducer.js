import {setUsers, setUser} from './../actions/usersActions'

let initialState = {
	users: [],
	user: null,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'SET_USERS':
			return {
				...state,
				users: action.users,
			}

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}

		default:
			return state;
	}
}

export default usersReducer;
