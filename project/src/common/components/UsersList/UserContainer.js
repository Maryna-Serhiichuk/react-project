// style
import './../../../App.scss'
// add
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import User from './User'
import {getUser} from './../../actions/usersActions'

const UserContainerApi = (props) => {

	useEffect( () => {
		let userId = props.match.params.userId;

		props.getUser(userId);
	}, [] )

	return(
		<div>
			<div className='user_main_image'>
				<img src='https://istudy.com.ru/img/business-correspondence.jpg'/>
			</div>

			<User user={props.user}/>
		</div>
	)
}

let mapStateToProps = (state) => ({
	user: state.usersReducer.user,
})

const UserContainer = compose(

	connect(mapStateToProps, {
		getUser
	}),

	withRouter,
)(UserContainerApi)


export default UserContainer