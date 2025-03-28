import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/components/Feed.css';

// Only ONE component declaration (choose either this functional declaration...)
const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('http://localhost:3001/posts')
        .then((res) => {
          const sorted = res.data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );
          setPosts(sorted);
        })
        .catch((err) => console.error("API Error:", err));
    };
    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feed">
      <h2>Real-Time Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <small>{new Date(post.timestamp).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

// ...OR this default export, but NOT both
export default Feed;