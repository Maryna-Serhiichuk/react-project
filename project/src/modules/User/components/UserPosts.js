// style
import './../../../App.scss'
// add
import React from 'react'
// image
import MegaphoneIcon from './../../../resources/images/svg/megaphoneIcon'


const UserPosts = (props) => {

	return (
		<div className='userPost_wrap'>
			<div className='userPost'>

				<div className='userPost_design'>
					<div className='userPost_design_img'>
						<MegaphoneIcon />
					</div>
				</div>

				<div className='userPost_body'>
					<div className='userPost_title'>{props.userPosts.title}</div>
					<div className='userPost_body'>{props.userPosts.body}</div>
				</div>
			</div>
		</div>
	)
}

export default UserPosts