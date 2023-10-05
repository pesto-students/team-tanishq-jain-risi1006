import React, {useState, useEffect} from 'react'
import CustomInput from './inputComponent';

const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020, description:'a good book written by author 1' },
    { title: 'Book 2', author: 'Author 2', year: 2018, description:'omg..... a good book written by author 1' },
    { title: 'Book 3', author: 'Author 3', year: 2022, description:'a good book written by author 1' },
  ]; 
const BookList = (props) => {
    
    const [myBooks, setMyBooks] = useState(books);
    const [newbook, setNewbook] = useState({title:'', author:'', year:'',description:''});

    const RenderBook = ({book, onDelete}) => {
        const [showMore, setShowMore] = useState(false);
        return (
            <div style={{backgroundColor:'skyblue', width:150,  margin:20, padding:10}}>
                <h3>{book.title}</h3>
                <h5>{book.author + ' | ' + book.year}</h5>
                <button onClick={onDelete} >Delete</button>
                {!showMore && <button onClick={()=>setShowMore(!showMore)} >Show Description</button>}
                {showMore && <div>
                    <button onClick={()=>setShowMore(!showMore)} >Show Less</button>
                    <p>{book.description}</p>
                    </div>}
            </div>
            
        );
    } 

    const handleBookName = (e) => {
        setNewbook({...newbook, title:e.nativeEvent.target.value});
    }

    const handleAuthorName = (e) => {
        setNewbook({...newbook, author:e.nativeEvent.target.value});
    }

    const handlePublishingYear = (e) => {
        setNewbook({...newbook, year:e.nativeEvent.target.value});
    }

    const handleDescription = (e) => {
        setNewbook({...newbook, description:e.nativeEvent.target.value});
    }

    const addNewBookHandler = () => {
        if(!newbook.title || !newbook.author || !newbook.year || !newbook.description){
            alert('Plase fill all the fileds');
            return;
        } 
        setMyBooks([...myBooks, newbook]);
    }

    const onDeleteHandler = (book) => {
        let filteredBook = myBooks.filter((tempBook)=> {
            return tempBook.title !== book.title;
        });
        setMyBooks(filteredBook);
    }

    return(
        <div style={{margin:20}}>
            <h2>List of books</h2>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {(myBooks && myBooks.length > 0) ? myBooks.map((book)=>{
                    return <RenderBook book = {book} onDelete={() => onDeleteHandler(book)}/>
                }) : (
                    <h3>'You don't have any book, please add new book</h3>
                )
                }
            </div>

            <h2>Add New Book</h2>
            <div>
                <CustomInput 
                    lable={'Book Name'}
                    onChange={handleBookName}
                />
                <CustomInput 
                    lable={'Author Name'}
                    onChange={handleAuthorName}
                />
                <CustomInput 
                    lable={'Publishing Year'}
                    onChange={handlePublishingYear}
                />
                <CustomInput 
                    lable={'Description'}
                    onChange={handleDescription}
                />
                <button onClick={addNewBookHandler}>Add Book</button>
            </div>
        </div>
    );
}

export default BookList;