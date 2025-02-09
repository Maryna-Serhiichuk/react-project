// add
import React from 'react'

const UserAlbums = (props) => {
	return (
		<div className='userAlbum'>
			<div className='userAlbum_wrap'>
				{props.userAlbums.title}
			</div>
		</div>
	)
}
  
export default UserAlbums