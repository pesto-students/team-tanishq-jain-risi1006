import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import AssignmentCard from '../molecules/card';
import Footer from './assignment4/component/footer';

const Home = () => {
    return (
        <div style={{backgroundColor:'skyblue'}}>
            <Navbar />
            <h1>React Assignments...</h1>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            <AssignmentCard 
                id = {1}
                route = {'/assignment1'} 
                uri = {'https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg'}
                label = {'Assignment 1'}
                description = {'This is basic assignment where we have a list of books and will be rendering all books using a loop'}
            />
            <AssignmentCard 
                id = {2}
                route = {'/assignment2'} 
                uri = {'https://community-cdn-digitalocean-com.global.ssl.fastly.net/sngKWC9cNzmf4AXQhkQUJoVc'}
                label = {'Assignment 2'}
                description = {'User has a list of book.\n An option to add/delete books.\n Toggle to show/hide descriptions'}
            />
            <AssignmentCard 
                id = {3}
                route = {'/assignment3'} 
                uri = {'https://www.syncfusion.com/blogs/wp-content/uploads/2022/04/Implementing-React-Custom-Hooks-A-Complete-Guide.png'}
                label = {'Assignment 3'}
                description = {'Implementation of custom hook to filter out data'}
            />
            <AssignmentCard 
                id = {4}
                route = {'/assignment4'} 
                uri = {'https://coderpad.io/wp-content/uploads/2022/08/coderpad-blogspot-reactrouter-adjustments-2-1.png'}
                label = {'Assignment 4'}
                description = {'Implemented Portfolio website to demonstrate React router'}
            />
            <AssignmentCard 
                id = {5}
                route = {'/assignment5'} 
                uri = {'https://365datascience.com/resources/blog/93ls2rbxxr-how-to-build-a-recommender-system-in-python-1.png'}
                label = {'Assignment 5'}
                description = {'Gift Recommendation Website using Open AI'}
            />
            <AssignmentCard 
                id = {6}
                route = {'/assignment6/todo'} 
                uri = {'https://pashtek.com/wp-content/uploads/2022/12/Redux-Toolkit-with-React.jpg'}
                label = {'Assignment 6'}
                description = {'This is todo app. User can create task, delete task and mark as completed'}
            />
            </div>
            <Footer />
        </div>
        
    );
}

export default Home;