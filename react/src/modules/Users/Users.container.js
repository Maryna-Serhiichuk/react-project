// add
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
// components
import Users from './Users'
// actions
import {
	setUsers,
	// thunks
	getUsers,
} from './actions/usersActions'

const UsersApiContainer = (props) => {

	useEffect( () => {
		props.getUsers()
	}, [] )
	
	return(
		<div className='users'>
			{props.users && props.users.map( user => <Users key={user.id} id={user.id} name={user.name} company={user.company} />)}
		</div>
	)
} 

const mapStateToProps = (state) => {
	return {
		users: state.usersReducer.users,
	}
}

const UsersContainer = connect(mapStateToProps, {
	setUsers,
	getUsers,
})(UsersApiContainer);

export default UsersContainer