import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => setPosts(res.data));
  }, []);

  const maxComments = useMemo(
    () => Math.max(...posts.map((post) => post.comments?.length || 0)),
    [posts]
  );

  const trendingPosts = posts.filter(
    (post) => post.comments?.length === maxComments
  );

  return (
    <div>
      <h2>Trending Posts ({maxComments} comments)</h2>
      {trendingPosts.map((post) => (
        <div key={post.id}>{post.content}</div>
      ))}
    </div>
  );
};

export default TrendingPosts;