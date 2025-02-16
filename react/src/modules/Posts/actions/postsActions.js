import { postStart, postStop, postSubscribe, postUnsubscribe } from '../../../api/axios/post'
import {getPostsApi, addPostApi} from './../../../api/axios/index'

export let setPosts = (posts) => {
	return {
		type: 'SET_POSTS',
		posts,
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

export const savePost = (post) => {
	return {
		type: 'SAVE_POST',
		post,
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

let _newMessageHandler = null
const newPostHandlerCreator = (dispatch) => {
	if(_newMessageHandler === null) {
		_newMessageHandler = (post) => {
			dispatch( savePost(post) )
		}
	}
	return _newMessageHandler
}

export const startPostListening = () => async (dispatch) => {
	postStart()
	postSubscribe( newPostHandlerCreator(dispatch) )
}

export const stopPostListening = () => async (dispatch) => {
	postUnsubscribe( newPostHandlerCreator(dispatch) )
	postStop()
}