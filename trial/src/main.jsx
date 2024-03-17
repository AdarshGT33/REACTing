import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Browse from './components/Browse';
import Event from './components/Event'
import Signin from './components/Signin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='browse' element={<Browse/>}/>
      <Route path='create' element={<Event/>}/>
      <Route path='signin' element={<Signin/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
