import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
// reducers
import usersReducer from './../../common/reducers/usersReducer'
import postsReducer from './../../common/reducers/postsReducer'
import todosReducer from './../../common/reducers/todoReducer'

let reducers = combineReducers({
  usersReducer,
  postsReducer,
  todosReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));