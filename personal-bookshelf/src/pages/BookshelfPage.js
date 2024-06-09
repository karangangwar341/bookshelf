import React from 'react';
import Bookshelf from '../components/BookShelf';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
       <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
