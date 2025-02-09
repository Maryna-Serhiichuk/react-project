let initialState = {
	user: [],
	userAlbums: [],
	userTodos: [],
	userPosts: [],
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {

		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}

		case 'SET_USER_ALBUMS':
			return {
				...state,
				userAlbums: action.userAlbums,
			}

		case 'SET_USER_TODOS':
			return {
				...state,
				userTodos: action.userTodos,
			}

		case 'SET_USER_POSTS':
			return {
				...state,
				userPosts: action.userPosts,
			}

		case 'CHANGE_STATUS_TASK':
			return {
				...state,
				userTodos: action.payload
			}
			
		default:
			return state;
	}
}

export default userReducer;
