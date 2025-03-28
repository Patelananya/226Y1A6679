import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Feed</Link> | 
        <Link to="/top-users">Top Users</Link> | 
        <Link to="/trending-posts">Trending Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending-posts" element={<TrendingPosts />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;