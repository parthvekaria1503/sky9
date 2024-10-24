import PostForm from './PostForm'
import { useCreatePost } from '../CustomHooks'

const AddPost = () => {

  const { mutate: createPost } = useCreatePost()

  const handleAddPost = (post) => {
    createPost({
      id: crypto.randomUUID().toString(),
      ...post,
    })
  }

  return (
    <div>
      <h2 className='text-2xl mb-2 text-center'>Add new Post</h2>
      <PostForm onSave={handleAddPost} initialValue={null} />
    </div>
  )
}

export default AddPost
