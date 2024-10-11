// app/server-side/page.tsx

import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

// Fetching data on the server side directly in the component
const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

const ServerSidePage = async () => {
  const posts = await fetchPosts(); // Fetching posts directly

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Server-Side Rendering Example</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-3 px-4 text-gray-600">ID</th>
            <th className="text-left py-3 px-4 text-gray-600">Title</th>
            <th className="text-left py-3 px-4 text-gray-600">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">{post.id}</td>
              <td className="py-3 px-4 font-semibold">{post.title}</td>
              <td className="py-3 px-4">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerSidePage;
