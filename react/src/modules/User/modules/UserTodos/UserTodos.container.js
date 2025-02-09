// add
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

import {
	getUserTodos,
	changeStatusTask
} from '../../actions/userActions'

import UserTodos from './UserTodos';


const UserTodosApiContainer = (props) => {
	const { userId } = useParams();

	useEffect(() => {
		props.getUserTodos(userId);
	}, []);

	// console.log(props.userTodos.userId)

	// const changeTodoCompleted = (e) => {
	// 	console.log(props.userTodos.id)
	// }

	const changeStatus = () => {
		props.changeStatusTask(props.userTodos.id)	
	}

	return (
		<Fragment>
            {props.userTodos.map( todo => <UserTodos key={todo.id} userTodos={todo} changeStatusTask={props.changeStatusTask} /> )}
        </Fragment>
	)
}

const mapStateToProps = (state) => ({
	userTodos: state.userReducer.userTodos,
})
  
export default connect(mapStateToProps, {
	getUserTodos,
	changeStatusTask
})(UserTodosApiContainer);