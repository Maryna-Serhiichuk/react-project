// style
import './../../App.scss'
// add
import React from 'react'
import {NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
// components
import UserContainer from './../User/UserContainer'

const UsersList = (props) => {
	return(
		<div className='userBlock_wrap'>
			<div className='userBlock'>
				<NavLink to={`/user/${props.id}/albums`}>
					<div className='userBlock_username'>
						<span>
							{props.username}
						</span>
					</div>
				</NavLink>

				<div className='userBlock_name'>
					{props.name}
				</div>
			</div>
		</div>
	)
}

export default UsersList
