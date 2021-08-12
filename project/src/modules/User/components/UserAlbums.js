// style
import './../../../App.scss'
// add
import React from 'react'


const UserAlbums = (props) => {

	// console.log(props.userAlbums)

	return (
		<div className='userAlbum'>
			<div className='userAlbum_wrap'>
				{props.userAlbums.title}
			</div>
		</div>
	)
}

export default UserAlbums