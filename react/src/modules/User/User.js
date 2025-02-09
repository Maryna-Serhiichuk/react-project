// style
import './../../App.scss'
// add
import React from 'react'
// image
import email from './../../resources/images/01.png'
import mobile from './../../resources/images/02.png'
import work from './../../resources/images/03.png'
import channels from './../../resources/images/04.png'
import segment from './../../resources/images/05.png'

const User = (props) => {
	return (
		<div className='user_wrap'>
			<div className='user'>
				<div className='user_name'>
					<dl>{props.user.name}</dl>
				</div>
				<div className='user_item'>
					<div className='user_icon'>
						<img src={email}/>
					</div>
					<div className='user_data'>
						<dl>{props.user.email}</dl>
						<span>Email</span>
					</div>
				</div>
				<div className='user_item'>
					<div className='user_icon'>
						<img src={mobile}/>
					</div>
					<div className='user_data'>
						<dl>{props.user.phone}</dl>
						<span>Mobile</span>
					</div>
				</div>
				<div className='user_item'>
					<div className='user_icon'>
						<img src={work}/>
					</div>
					<div className='user_data'>
						{props.user.address && <dl>{props.user.address.street} {props.user.address.city}, {props.user.address.suite}</dl>}
						<span>Work</span>
					</div>
				</div>
				<div className='user_item'>
					<div className='user_icon'>
						<img src={channels}/>
					</div>
					<div className='user_data'>
						<dl>{props.user.website}</dl>
						<span>Social Channels</span>
					</div>
				</div>
				<div className='user_item'>
					<div className='user_icon'>
						<img src={segment}/>
					</div>
					<div className='user_data'>
						{props.user.company && <dl>{props.user.company.name}, {props.user.company.catchPhrase}, {props.user.company.bs}</dl>}
						<span>Segment</span>
					</div>
				</div>
			</div>
		</div>

	)
}

export default User