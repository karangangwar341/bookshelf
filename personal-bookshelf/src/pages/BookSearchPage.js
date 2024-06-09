import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import './BookSearchPage.css';

const BookSearchPage = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setBooks(response.data.docs);
        })
        .catch((error) => console.error(error));
    }
  }, [query]);

  const isBookInBookshelf = (book) => {
    return bookshelf.some((b) => b.key === book.key);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-12">Search by book name:</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="flex flex-wrap justify-center gap-4 mt-4 book-results">
        {books.map((book) => (
          <BookCard 
            key={book.key} 
            book={book} 
            addToBookshelf={addToBookshelf} 
            isAdded={isBookInBookshelf(book)} 
          />
        ))}
      </div>
     
    </div>
  );
};

export default BookSearchPage;
