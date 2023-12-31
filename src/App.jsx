/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Blog from './pages/Blog/Blog'
import CreatePost from './pages/Create/CreatePost'
import BlogDetails from './components/Blog/BlogDetails'
import EditPost from './pages/Edit/EditPost'
import HoneyDetails from './components/HoneyTypes/HoneyDetails'
import PageNotFound from './components/404/404'
import Profile from './pages/Profile/Profile'
import HoneyTypes from './pages/HoneyTypes/HoneyTypes'
import AddHoneyType from './pages/HoneyTypes/AddHoneyType'
import EditHoneyType from './pages/HoneyTypes/EditHoneyType'

import { AuthContextProvider } from './context/AuthContext'

function App() {

  return (
    <>

<AuthContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/blog/create' element={<CreatePost />} />
      <Route path='/blog/:postId' element={<BlogDetails/>} />
      <Route path='/blog/:postId/edit' element={<EditPost />} />
      <Route path='/honey-types/:postId' element={<HoneyDetails/>} />
      <Route path='honey-types' element={<HoneyTypes />} />
      <Route path='honey-types/add-honey' element={<AddHoneyType />} />
      <Route path='honey-types/:postId/edit' element={<EditHoneyType />} />
      <Route path='/profile/:userId' element={<Profile/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <Footer />
</AuthContextProvider>

  

    </>
  )
}

export default App
