// app/posts/page.tsx

import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Mock data function to simulate a dynamic source
const fetchPosts = async (): Promise<Post[]> => {
  // Simulating fetching data with some mock data
  return [
    {
      id: 1,
      title: 'First Post',
      body: 'This is the body of the first post.',
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the body of the second post.',
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'This is the body of the third post.',
    },
  ];
};

// ISR component
const PostsPage = async () => {
  const posts = await fetchPosts(); // Fetching posts

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Incremental Static Regeneration Example</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg hover:shadow-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// This function runs at build time and can set revalidation
export const revalidate = 10; // Revalidate every 10 seconds

export default PostsPage;
