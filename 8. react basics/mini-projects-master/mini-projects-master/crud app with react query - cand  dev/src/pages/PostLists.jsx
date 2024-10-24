import AddPost from '../components/AddPost'
import { Link, useNavigate } from 'react-router-dom'
import { useDeletePostById, useFetchPosts } from '../CustomHooks'

const PostLists = () => {
  const navigate = useNavigate()

  const { isLoading, isError, data: posts, error } = useFetchPosts()

  const { mutate: deletePost } = useDeletePostById()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className='w-full'>
      <AddPost />
      {posts.map((post) => (
        <div
          key={post.id}
          className='border border-black mb-4 px-3 py-2 rounded-lg bg-slate-200'
        >
          <Link to={`/posts/${post.id}`}>
            <h4 className='text-xl  py-2'>{post.title}</h4>
          </Link>
          <button
            onClick={() => navigate(`/posts/${post.id}/edit`)}
            className='border border-black px-2 py-1 rounded-[5px] bg-green-500 text-white hover:bg-green-400 '
          >
            Edit
          </button>
          <span> </span>
          <button
            onClick={() => deletePost(post.id)}
            className='border border-black px-2 py-1 rounded-[5px] text-white bg-red-500 hover:bg-red-400'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default PostLists
