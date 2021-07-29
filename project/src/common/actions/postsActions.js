import {getPostsApi, addPostApi} from './../../main/axios/index'

export let setPosts = (posts) => {
	return {
		type: 'SET_POSTS',
		posts,
	}
}

export const savePost = (post) => {
	return {
		type: 'SAVE_POST',
		post,
	}
}

export const getPosts = () => {
	return (dispatch) => {
		getPostsApi()
			.then(data => {
				dispatch( setPosts(data) );
			})
	}
}

export const addPost = (title, text) => {
	return (dispatch) => {
		addPostApi(title, text)
			.then(response => {
				dispatch( savePost(response.data) )
			})
	}
}