import { useState } from 'react'

const PostForm = ({ onSave, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue ? initialValue.title : '',
    body: initialValue ? initialValue.body : '',
  })

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const renderField = (label) => (
    <div className='mb-2'>
      <label htmlFor={label.toLowerCase()}>{label} : </label>{' '}
      <input
        type='text'
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        onChange={handleChangeInput}
        className='border border-black w-full px-3 py-1 rounded-md'
      />
    </div>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(post)
    setPost({
      title: '',
      body: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className='mb-5'>
      {renderField('Title')}
      {renderField('Body')}
      <button
        type='submit'
        className='border px-2 py-1 rounded-[5px] border-black bg-blue-600 text-white hover:text-amber-300 mt-2'
      >
        Submit
      </button>
    </form>
  )
}

export default PostForm
