// add
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

import UserAlbums from './UserAlbums';

import {
	getUserAlbums
} from '../../actions/userActions'

const UserAlbumsApiContainer = (props) => {
	const { userId } = useParams();

	useEffect(() => {
		props.getUserAlbums(userId);
	}, []);

	return (
		<Fragment>
            {props.userAlbums.map( album => <UserAlbums key={album.id} userAlbums={album} />)}
        </Fragment>
	)
}

const mapStateToProps = (state) => ({
	userAlbums: state.userReducer.userAlbums,
})
  
export default connect(mapStateToProps, {
	getUserAlbums
})(UserAlbumsApiContainer);