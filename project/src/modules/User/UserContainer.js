// style
import './../../App.scss'
// add
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {NavLink, Route} from "react-router-dom";

import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import User from './User'
//components
import UserAlbums from './components/UserAlbums'
import UserTodos from './components/UserTodos'
import UserPosts from './components/UserPosts'

import {
	getUser,
	changeStatusTask,
} from './actions/userActions'

const UserContainerApi = (props) => {

	useEffect( () => {
		let userId = props.match.params.userId;

		props.getUser(userId);
	}, [] )

	return(
		<div className='user_page'>
			<div className='user_main_image'>
				<img src='https://istudy.com.ru/img/business-correspondence.jpg'/>
			</div>

			<div className='user_page_info'>
				<User user={props.user}/>
			</div>

			<div className='user_page_data'>
				<div className='user_page_data_container'>
					<div className='user_page_data_navigation'>
						<NavLink 
							to={`/user/${props.match.params.userId}/albums`}
							activeClassName='active'
							><span>Albums</span></NavLink>
						<NavLink 
							to={`/user/${props.match.params.userId}/todos`}
							activeClassName='active'
							><span>Todos</span></NavLink>
						<NavLink 
							to={`/user/${props.match.params.userId}/posts`}
							activeClassName='active'
							><span>Posts</span></NavLink>
					</div>

					<div className='user_page_data_content'>
				        <Route 
				          path={`/user/${props.match.params.userId}/albums`}
				          render={ () => props.userAlbums.map( album => <UserAlbums userAlbums={album} />) } />

				        <Route 
				          path={`/user/${props.match.params.userId}/todos`}
				          render={ () => props.userTodos.map( todo => <UserTodos userTodos={todo} changeStatusTask={props.changeStatusTask} /> ) } />
				        <Route 
				          path={`/user/${props.match.params.userId}/posts`}
				          render={ () => props.userPosts.map( post => <UserPosts userPosts={post}/> ) } />
				    </div>
			    </div>
			</div>
		</div>
	)
}

let mapStateToProps = (state) => ({
	user: state.userReducer.user,
	userAlbums: state.userReducer.userAlbums,
	userTodos: state.userReducer.userTodos,
	userPosts: state.userReducer.userPosts,
})

const UserContainer = compose(

	connect(mapStateToProps, {
		getUser,
		changeStatusTask,
	}),

	withRouter,
)(UserContainerApi)


export default UserContainer