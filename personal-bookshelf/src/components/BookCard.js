import React from 'react';

const BookCard = ({ book, addToBookshelf, isAdded }) => {
  return (
    <div className="border p-4 w-48 rounded text-center">
      <h3 className="text-lg mb-2">Book Title: {book.title}</h3>
      <p className="mb-4">Edition Count: {book.edition_count}</p>
      <button 
        onClick={() => addToBookshelf(book)} 
        disabled={isAdded}
        className={`p-2 rounded ${isAdded ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}`}
      >
        {isAdded ? 'Added' : 'Add to Bookshelf'}
      </button>
    </div>
  );
};

export default BookCard;
