import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Book from './components/Book'
import Home from './components/Home'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/book',
                element: <Book></Book>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider
        router={router}
    ></RouterProvider>)
