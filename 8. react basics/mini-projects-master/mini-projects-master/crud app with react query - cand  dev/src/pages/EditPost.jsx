import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchPostById, updatePost } from '../apis/posts.api'
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useUpdatePost } from '../CustomHooks'

const EditPost = () => {
  const { id } = useParams()

  const {
    isLoading,
    isError,
    data: post,
    mutate: updatePost,
    error,
  } = useUpdatePost(id)

  if (isLoading) return <h1>'loading...'</h1>
  if (isError) return <h1>`Error: ${error.message}`</h1>

  const handleSubmit = (updatedPost) => {
    updatePost({
      ...updatedPost,
      id,
    })
  }

  return (
    <div className='w-full'>
      <Link
        to='/'
        className='border border-black bg-orange-500 text-white px-2 py-1 rounded-lg hover:bg-orange-300
        '
      >
        Home
      </Link>
      <h2 className='text-2xl mb-2 text-center'>Edit Post</h2>
      <PostForm onSave={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost
