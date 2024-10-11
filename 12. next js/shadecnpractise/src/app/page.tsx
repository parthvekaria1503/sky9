// app/page.tsx
import { posts } from './root';

export default function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// If you want to use dynamic routing or data fetching, you can explore the app directory's new features.
