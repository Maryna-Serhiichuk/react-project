import { lazy } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const DefaultLayout = lazy(() => import('./../components/layouts/Default.layout'))
const PostsContainer = lazy(() => import('./Posts/Posts.container'))
const TodosContainer = lazy(() => import('./Todos/Todos.container'))
const UsersContainer = lazy(() => import('./Users/Users.container'))
const UserContainer = lazy(() => import('./User/User.container'))
const UserAlbumsContainer = lazy(() => import('./User/modules/UserAlbums/UserAlbums.container'))
const UserTodosContainer = lazy(() => import('./User/modules/UserTodos/UserTodos.container'))
const UserPostsContainer = lazy(() => import('./User/modules/UserPosts/UserPosts.container'))

const routes = [
    {
        path: '',
        element: <DefaultLayout/>,
        children: [
            {
                element: <Navigate to={'users'} replace />,
                children: [{path: ''},{path: '*'}]
            },
            {
              path: 'posts',
              element: <PostsContainer />,
            },
            {
                path: 'todo',
                element: <TodosContainer />,
            },
            {
                path: 'users',
                element: <UsersContainer />,
            },
            {
                path: 'user/:userId',
                element: <UserContainer />,
                children: [
                    {
                        path: 'albums',
                        element: <UserAlbumsContainer />,
                    },
                    {
                        path: 'todos',
                        element: <UserTodosContainer />,
                    },
                    {
                        path: 'posts',
                        element: <UserPostsContainer />,
                    },
                ],
            },
        ]
    }
]


const Router = () => {
    const router = createBrowserRouter(routes)

    return <RouterProvider router={router} fallbackElement={null} future={{ v7_startTransition: true }} />
}

export default Router;