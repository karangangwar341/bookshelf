import React from 'react';

const BookCard = ({ book, addToBookshelf, isAdded }) => {
  return (
    <div className="border   p-4 w-64  rounded text-center">
      <div className='flex gap-2'>
      <div>
       <h3 className=" mb-2  text-nowrap"><b>Book Title : </b></h3>
        </div>
        <div>
       <h3 className=" mb-2 text-wrap">{book.title}</h3>
        </div>
        </div>
        
        <p className="mb-4 mt-12"><b>Edition Count:</b> {book.edition_count}</p>
      <button 
        onClick={() => addToBookshelf(book)} 
        disabled={isAdded}
        className={`p-2 rounded ${isAdded ? 'bg-gray-500 cursor-not-allowed '  : 'bg-green-500'}`}
      >
        {isAdded ? 'Added' : 'Add to Bookshelf'}
      </button>
    </div>
  );
};

export default BookCard;
