import React from 'react';
import Book from '../Book';
import Navbar from '../Navbar';
import CustomButton from '../../molecules/button';
import { useNavigate} from 'react-router';
import Footer from '../assignment4/component/footer';

const Assignment1 = () => {
    
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020, description:'a good book written by author 1' },
        { title: 'Book 2', author: 'Author 2', year: 2018, description:'omg..... a good book written by author 1' },
        { title: 'Book 3', author: 'Author 3', year: 2022, description:'a good book written by author 1' },
      ]; 
    const navigation = useNavigate();

    return(
        <div >
            <Navbar onHomeButtonClick={()=>{navigation('/')}} />
            <h1>This is Assignment 1</h1>
            <p>Need to render few books with their title, publishing year and author name</p>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {books.map((book)=>{
                    return <Book 
                        label={book.title}
                        author={book.author}
                        year={book.year}
                    />
                })}
            </div>
            <CustomButton 
                label={'Next Assignment'}
                onClick={()=>{navigation('/assignment2')}}
                customStyle={{alignSelf:'center', marginLeft:400, marginTop:100}}
            />
            <Footer />
        </div>
    );
}

export default Assignment1;