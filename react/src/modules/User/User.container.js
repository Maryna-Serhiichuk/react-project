// add
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams, Outlet } from "react-router-dom";

// components
import User from './User'

import {
	getUser,
} from './actions/userActions'

const UserContainerApi = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getUser(userId);
  }, []);

  return (
    <div className='user_page'>
      <div className='user_main_image'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ&s' />
      </div>

      <div className='user_page_info'>
        <User user={props.user} />
      </div>

      <div className='user_page_data'>
        <div className='user_page_data_container'>
          <div className='user_page_data_navigation'>
            <NavLink
              to={`/user/${userId}/albums`}
              activeClassName='active'
            ><span>Albums</span></NavLink>
            <NavLink
              to={`/user/${userId}/todos`}
              activeClassName='active'
            ><span>Todos</span></NavLink>
            <NavLink
              to={`/user/${userId}/posts`}
              activeClassName='active'
            ><span>Posts</span></NavLink>
          </div>

          <div className='user_page_data_content'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
})

export default connect(mapStateToProps, {
  getUser,
})(UserContainerApi);
