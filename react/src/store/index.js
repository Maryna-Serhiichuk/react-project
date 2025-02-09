import {createStore, combineReducers, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
// reducers
import usersReducer from './../modules/Users/reducers/userReducer'
import postsReducer from './../modules/Posts/reducers/postsReducer'
import todosReducer from './../modules/Todos/reducers/todosReducer'
import userReducer from './../modules/User/reducers/userReducer'

let reducers = combineReducers({
  usersReducer,
  postsReducer,
  todosReducer,
  userReducer,
});

export let store = createStore(reducers, applyMiddleware(thunk));