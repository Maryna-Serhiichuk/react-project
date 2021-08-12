// style
import './../../App.scss'
// add
import React from 'react'

const PostsList = (props) => {

	return(
		<div className='post_wrap'>
			<div className='post'>
				<div className='post_title'>
					{props.title}
				</div>
				<div className='post_body'>
					{props.body}
				</div>
				<div className='post_username'>

					{props.userName}

				</div>
			</div>
		</div>
	)
}

export default PostsList