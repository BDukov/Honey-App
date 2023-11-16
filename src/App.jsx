/* eslint-disable react/jsx-no-undef */
import { Routes, Route} from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Blog from './pages/Blog/Blog'
import CreatePost from './components/Blog/CreatePost'
import BlogDetails from './components/Blog/BlogDetails'
// import { useAuthContext } from './hooks/useAuthContext'

function App() {
  // const { user , authReady } = useAuthContext();

  return (
    <>

    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/blog' element={<Blog />}/>
      <Route path='/blog/create' element={<CreatePost />} />
      <Route path='/blog/:postId' element={<BlogDetails/>} />
    </Routes>
    <Footer />
   

    </>
  )
}

export default App
