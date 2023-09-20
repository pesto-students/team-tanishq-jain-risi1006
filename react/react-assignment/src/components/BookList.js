import React from 'react'
 
const BookList = (props) => {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
    
    const RenderBook = ({book}) => {
        return (
            <li>{book.title + ' | ' + book.author + ' | ' + book.year}</li>
        );
    } 

    return(
        <div>
            {books.map((book)=>{
                return <RenderBook book = {book} />
            })}
        </div>
    );
}

export default BookList;