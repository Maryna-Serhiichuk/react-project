// style
import './App.scss';
// add
import React from 'react'
import {Route} from 'react-router-dom'
// components
import PostsListContainer from './modules/PostsList/PostsListContainer'
import TodoListContainer from './modules/TodoList/TodoListContainer'
import UsersListContainer from './modules/UsersList/UsersListContainer'
import Navigation from './modules/Navigation/Navigation'
import UserContainer from './modules/User/UserContainer'

function App() {
  return (
    <div className='app'>
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='content'>
        <Route 
          path='/posts'
          render={ () => <PostsListContainer /> } />
        <Route 
          path='/todo'
          render={ () => <TodoListContainer /> } />
        <Route 
          path='/users'
          render={ () => <UsersListContainer /> } />
        <Route 
          path='/user/:userId?'
          render={ () => <UserContainer /> } />
      </div>
    </div>
  );
}

export default App;