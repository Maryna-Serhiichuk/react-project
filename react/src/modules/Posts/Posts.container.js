// style
import './../../App.scss'
// add
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// components
import Posts from './Posts'
import AddPostsForm from './components/AddPostsForm/AddPostsForm'
// actions
import {
	setPosts,
	//thunks
	getPosts,
	addPost,
	startPostListening,
	stopPostListening,
} from './actions/postsActions'

const PostsListApiContainer = (props) => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.postsReducer.posts);

	useEffect(() => {
		dispatch(startPostListening())
		return () => {
			dispatch(stopPostListening())
		}
	}, [])
	
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
					{posts.map( post => <Posts key={post.id} title={post.title} body={post.body} userName={post.userId}/>)}
				</div>
			</div>
		</div>
	)
}

const PostsListContainer = () => {
	const dispatch = useDispatch();
  
	const handleSetPosts = (data) => dispatch(setPosts(data));
	const handleGetPosts = () => dispatch(getPosts());
	const handleAddPost = (post) => dispatch(addPost(post));

	return (
	  <PostsListApiContainer
		setPosts={handleSetPosts}
		getPosts={handleGetPosts}
		addPost={handleAddPost}
	  />
	);
  };

export default PostsListContainer