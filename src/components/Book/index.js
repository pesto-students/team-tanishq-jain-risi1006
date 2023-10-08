import React, {useState, useEffect} from 'react';


const Book = ({label, author, year}) => {
    return (
        <div style={{display:'flex', flexDirection : 'column', width : 150, backgroundColor:'skyblue', margin:10, padding:10, border:'1px solid black'}}>
            <h3>{label}</h3>
            <h5>{year}</h5>
            <h5 style={{alignSelf:'flex-end'}}>{author}</h5>
        </div>
    )
}

export default Book;