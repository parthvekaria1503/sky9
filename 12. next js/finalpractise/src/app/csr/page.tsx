"use client"
import React, { useEffect, useState } from 'react';

// Define the Post type
interface Post {
  id: number;
  title: string;
  body: string;
}

// Mock data
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
  {
    id: 4,
    title: 'First Post',
    body: 'This is the body of the first post.',
  },
  {
    id: 5,
    title: 'Second Post',
    body: 'This is the body of the second post.',
  },
  {
    id: 6,
    title: 'Third Post',
    body: 'This is the body of the third post.',
  },
];

const ClientSidePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = () => {
      setTimeout(() => {
        setPosts(mockPosts);
        setLoading(false);
      }, 1000);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Client-Side Rendering Example with Mock Data</h1>
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

export default ClientSidePage;
