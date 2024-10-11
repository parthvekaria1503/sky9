// app/blog/page.tsx

import React from 'react';

// Define the Post type
interface Post {
  id: number;
  title: string;
  body: string;
}

// Mock data for demonstration
const mockPosts: Post[] = [
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

// Fetching data at build time
const fetchPosts = async (): Promise<Post[]> => {
  // Here you could fetch from an external API, but we'll use mock data
  return mockPosts;
};

// SSG component
const BlogPage = async () => {
  const posts = await fetchPosts(); // Fetching posts at build time

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Static Site Generation Example</h1>
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

export default BlogPage;
