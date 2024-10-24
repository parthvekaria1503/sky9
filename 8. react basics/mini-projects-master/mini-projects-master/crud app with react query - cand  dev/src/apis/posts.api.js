export async function fetchPosts() {
  const res = await fetch('http://localhost:3000/posts')

  return await res.json()
}

export async function fetchPostById(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}`)

  return await res.json()
}

export async function createPost(newPost) {
  const res = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
}

export async function updatePost(updatedPost) {
  const res = await fetch(`http://localhost:3000/posts/${updatedPost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  })
}

export async function deletePostById(id) {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  })

  return await res.json()
}
