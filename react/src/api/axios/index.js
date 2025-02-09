import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://127.0.0.1:3030/',
	headers: {'Content-type': 'application/json; charset=UTF-8',},
})

export const getPostsApi = () => {
	return instance.get('posts')
		.then(response => {
			return response.data
		})
}

export const getTodoApi = () => {
	return instance.get('todos')
		.then(response => {
			return response.data
		})
}

export const getUsersApi = () => {
	return instance.get('users')
		.then(response => {
			return response.data
		})
}

export const addPostApi = (title, body, userId = 'guest') => {
	return instance.post('posts', {title, body, userId})
}

export const getUserApi = (userId) => {
	return instance.get(`users/${userId}`)
		.then(response => {
			return response.data
		})
}

export const getUserAlbumsApi = (userId) => {
	return instance.get(`users/${userId}/albums`)
		.then(response => {
			return response.data;
		})
}

export const getUserTodosApi = (userId) => {
	return instance.get(`users/${userId}/todos`)
		.then(response => {
			return response.data
		})
}

export const getUserPostsApi = (userId) => {
	return instance.get(`users/${userId}/posts`)
		.then(response => {
			return response.data
		})
}