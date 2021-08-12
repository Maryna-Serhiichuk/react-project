// style
import './../../App.scss'
// add
import React, {useEffect} from 'react'
import * as axios from 'axios'
import {connect} from 'react-redux'
// components
import PostsList from './PostsList'
import AddPostsForm from './components/AddPostsForm/AddPostsForm'
// actions
import {
	setPosts,
	//thunks
	getPosts,
	addPost,
} from './actions/postsActions'

const PostsListApiContainer = (props) => {

	useEffect( () => {
		props.getPosts();
	}, [] );

	return(
		<div className='posts_wrap'>
			<div className='posts_container'>
				<div className='posts_add'>
					<div className='posts_add_post'>Add new post</div>
					<AddPostsForm addPost={props.addPost}/>
				</div>
				<div className='posts'>
					{props.posts.map( post => <PostsList key={post.id} title={post.title} body={post.body} userName={post.userId}/>)}
				</div>
			</div>
		</div>
	)
}

let mapStateToProps = (state) => {
	return {
		posts: state.postsReducer.posts,
	}
}

const PostsListContainer = connect(mapStateToProps, {
	setPosts,
	getPosts,
	addPost,
})(PostsListApiContainer);

export default PostsListContainer