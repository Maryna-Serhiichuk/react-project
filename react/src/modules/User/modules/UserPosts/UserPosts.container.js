// add
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

import {
	getUserPosts
} from '../../actions/userActions'

import UserPosts from './UserPosts';

const UserPostsApiContainer = (props) => {
	const { userId } = useParams();

	useEffect(() => {
		props.getUserPosts(userId);
	}, []);

	return (
		<Fragment>
            {props.userPosts.map( post => <UserPosts key={post.id} userPosts={post}/> )}
        </Fragment>
	)
}

const mapStateToProps = (state) => ({
	userPosts: state.userReducer.userPosts,
})
  
  export default connect(mapStateToProps, {
	getUserPosts
  })(UserPostsApiContainer);