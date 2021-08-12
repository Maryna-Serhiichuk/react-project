import {setPosts, savePost} from './../actions/postsActions'

let initialState = {
	posts: [],
}

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'SET_POSTS':
			return {
				...state,
				posts: action.posts,
			}

		case 'SAVE_POST':
			return {
				...state,
				posts: [...state.posts, action.post],
			}

		default:
			return state;
	}
}

export default postsReducer;