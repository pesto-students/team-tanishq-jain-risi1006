import React, { useEffect } from 'react';
import Book from '../Book';
import Navbar from '../Navbar';
import CustomButton from '../../molecules/button';
import { useNavigate} from 'react-router';
import {useBookFilter} from '../customHooks/useBookFilter';
import AssignmentCard from '../../molecules/card';
import { ThemeContext  } from '../../context/themeContext';
import DropDown from '../../molecules/dropdown';
import Footer from '../assignment4/component/footer';
const Assignment3 = () => {

    const books = [
        { id: 1, route:'/assignment1', title: 'Assignment 1', author: 'Ritesh Singh', year: 2020, uri:'https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg', description:'This is basic assignment where we have a list of books and will be rendering all books using a loop' },
        { id: 2, route:'/assignment2', title: 'Assignment 2', author: 'Ritesh', year: 2018, uri:'https://community-cdn-digitalocean-com.global.ssl.fastly.net/sngKWC9cNzmf4AXQhkQUJoVc', description:'User has a list of book.\n An option to add/delete books.\n Toggle to show/hide descriptionsUser has a list of book.\n An option to add/delete books.\n Toggle to show/hide descriptions' },
        { id: 3, route:'/assignment3', title: 'Assignment 3', author: 'Ritesh', year: 2022, uri:'https://www.syncfusion.com/blogs/wp-content/uploads/2022/04/Implementing-React-Custom-Hooks-A-Complete-Guide.png', description:'Implementation of custom hook to filter out data' },
      ]; 
    const navigation = useNavigate();
    const [filteredBook, setSearchTag] = useBookFilter(books);  
    const { toggle, toggleFunction  } = React.useContext(ThemeContext);

    const searchHandler = (event) => {
        setSearchTag(event?.nativeEvent?.target?.value)
        console.log(filteredBook)
    }
    const textStyle={color: toggle ? 'black' : 'white'};
    const containerStyle={backgroundColor: !toggle ? 'black' : 'white'}
    // console.log('risi is toggling ', toggle )
    return(
        <div className={toggle ? "dark" : "light"} style={containerStyle}>
            <Navbar onHomeButtonClick={()=>{navigation('/')}} onSerachInputChange = {searchHandler} />
            <div style={{margin:10}}>
            <h1 style={textStyle}>This is Assignment 3</h1>
            <p style={textStyle}>We have few mock books. You can search for the tags</p>
            <p style={textStyle}>One can serach with 'Title', 'Author' or 'Description' in Search box of Navbar</p>

            <CustomButton 
                label={'Change Theme'}
                onClick={toggleFunction}
                customStyle={{alignSelf:'center'}}
            />
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:40}}>
                <h3 style={{...textStyle, marginRight:10}}>Searched Book : </h3> 
                <DropDown />
            </div>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {filteredBook.map((book)=>{
                    return (
                        <AssignmentCard 
                            id = {book.id}
                            route = {book.route} 
                            uri = {book.uri}
                            label = {book.title}
                            description = {book.description}
                        />
                    )
                })}
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Assignment3;