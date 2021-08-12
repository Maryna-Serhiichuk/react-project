import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
// reducers
import usersReducer from './../../modules/UsersList/reducers/usersReducer'
import postsReducer from './../../modules/PostsList/reducers/postsReducer'
import todosReducer from './../../modules/TodoList/reducers/todoReducer'
import userReducer from './../../modules/User/reducers/userReducer'

let reducers = combineReducers({
  usersReducer,
  postsReducer,
  todosReducer,
  userReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));