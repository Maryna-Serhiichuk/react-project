// add
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
// components
import UsersList from './UsersList'
// actions
import {
	setUsers,
	// thunks
	getUsers,
} from './actions/usersActions'

const UsersListApiContainer = (props) => {

	useEffect( () => {
		props.getUsers()
	}, [] )

	return(
		<div className='users'>
			{props.users && props.users.map( user => <UsersList key={user.id} id={user.id} name={user.name} username={user.username}/>)}
		</div>
	)
} 

let mapStateToProps = (state) => {
	return {
		users: state.usersReducer.users,
	}
}

const UsersListContainer = connect(mapStateToProps, {
	setUsers,
	getUsers,
})(UsersListApiContainer);

export default UsersListContainer
