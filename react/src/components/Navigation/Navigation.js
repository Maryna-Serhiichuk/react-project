// add
import React from 'react'
// components
import {NavLink} from "react-router-dom";

const Navigation = () => {
	return(
		<div className='nav_wrap'>
			<nav className='nav'>
			    <NavLink to="/posts" activeClassName='active'>Posts</NavLink>
			    <NavLink to="/todo" activeClassName='active'>Todo</NavLink>
			    <NavLink to="/users" activeClassName='active'>My Users</NavLink>
			</nav>
		</div>
	)
}

export default Navigation