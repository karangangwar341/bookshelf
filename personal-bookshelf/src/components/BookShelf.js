import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div className="flex flex-wrap text-sm justify-center gap-2 mt-4 book-results">
    {books.map((book, index) => (
        <div key={index} className="book-card border-2 border-black rounded-xl p-1 w-48">
      <div className='flex gap-2'>
      <div>
       <h3 className=" mb-2  text-nowrap"><b>Book Title : </b></h3>
        </div>
        <div>
       <h3 className=" mb-2 text-wrap">{book.title}</h3>
        </div>
        </div>
        
        <p className="mb-4 mt-12"><b>Edition Count:</b> {book.edition_count}</p>
       </div>
      ))}
    </div>
  );
};

export default Bookshelf;
