import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import '../styles/components/TopUsers.css';

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/users').then((res) => setUsers(res.data));
    axios.get('http://localhost:3001/posts').then((res) => setPosts(res.data));
  }, []);

  const topUsers = useMemo(() => {
    const postCounts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    return users
      .map((user) => ({ ...user, count: postCounts[user.id] || 0 }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [users, posts]);

  return (
    <div className="container">
      <h2 className="title">Top Users</h2>
      {topUsers.map((user) => (
        <div key={user.id} className="user-card">
          {user.name} - {user.count} posts
        </div>
      ))}
    </div>
  );
};

export default TopUsers;  // Only one export!