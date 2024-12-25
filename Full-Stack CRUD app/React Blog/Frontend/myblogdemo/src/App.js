
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import NavBar from './components/NavBar';



function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </Router>
    

  );
}

export default App;
