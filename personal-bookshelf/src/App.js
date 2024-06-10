import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './index.css';
import { FaSearch, FaBook } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <nav className="navbar absolute right-0 m-4">
      {location.pathname === '/' ? (
        <Link to="/bookshelf" className="nav-button md:bg-green-400 md:hover:bg-green-600 p-2 rounded-xl w-16 text-nowrap">
          {isMobile ? <FaBook /> : 'My Bookshelf'}
        </Link>
      ) : (
        <Link to="/" className="nav-button">
          {isMobile ? <FaSearch /> : 'Search Books'}
        </Link>
      )}
    </nav>
  );
};



const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<BookSearchPage addToBookshelf={addToBookshelf} bookshelf={bookshelf} />}
          />
          <Route
            path="/bookshelf"
            element={<BookshelfPage bookshelf={bookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
