import { useQuery } from '@tanstack/react-query'
import { fetchPostById } from '../apis/posts.api'
import { Link, useParams } from 'react-router-dom'
import { useFetchPostById } from '../CustomHooks'

const Post = () => {
  const { id } = useParams()

  const { isLoading, isError, data: post, error } = useFetchPostById(id)

  if (isError) {
    return <h1>{error.message}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between'>
        <Link
          to='/'
          className='border border-black bg-orange-500 text-white px-2 py-1 rounded-lg hover:bg-orange-300
        '
        >
          Home
        </Link>
        <Link
          to={`/posts/${id}/edit`}
          className='border border-black bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-300
        '
        >
          Edit
        </Link>
      </div>
      <div className='mt-3 border border-black px-3 py-2 rounded-lg'>
        <h2 className='text-2xl mb-3'>{post.title}</h2>
        <h3 className='text-xl'>{post.body}</h3>
      </div>
    </div>
  )
}

export default Post
