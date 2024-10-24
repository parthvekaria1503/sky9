import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import PostLists from './pages/PostLists'
import Post from './pages/Post'
import EditPost from './pages/EditPost'

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-4 max-w-[600px] mx-auto'>
      <h1 className='text-3xl mb-5'>Awesome Blog</h1>
      <Routes>
        <Route path='/' element={<PostLists />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App
