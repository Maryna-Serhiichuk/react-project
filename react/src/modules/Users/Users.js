// add
import React from 'react'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
	return(
		<div className='userBlock_wrap'>
			<div className='userBlock'>
				<NavLink to={`/user/${props.id}/albums`}>
					<div className='userBlock_username'>
						<span>
							{props.name}
						</span>
					</div>
				</NavLink>

				<div className='userBlock_name'>
					{props.company.name}
				</div>
			</div>
		</div>
	)
}

export default Users
