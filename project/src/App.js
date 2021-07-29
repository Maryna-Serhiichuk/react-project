// style
import './App.scss';
// add
import React from 'react'
import {Route} from 'react-router-dom'
// components
import PostsListContainer from './common/components/PostsList/PostsListContainer'
import TodoListContainer from './common/components/TodoList/TodoListContainer'
import UsersListContainer from './common/components/UsersList/UsersListContainer'
import Navigation from './common/components/Navigation/Navigation'
import UserContainer from './common/components/UsersList/UserContainer'

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