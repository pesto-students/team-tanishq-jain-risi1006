import './App.css';
import BookList from './components/BookList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assignment1 from './components/assignment1';
import Assignment2 from './components/assignment2';
import Assignment3 from './components/assignment3';
import Assignment4 from './components/assignment4';
import Assignment5 from './components/assignment5';
import ToDoList from './components/assignment6/screen/ToDolist';
import Home from './components/Homepage';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/assignment1" Component={Assignment1} />
      <Route path="/assignment2" Component={Assignment2} />
      <Route path="/assignment3" Component={Assignment3} />
      <Route path="/assignment4" Component={Assignment4} />
      <Route path="/assignment5" Component={Assignment5} />
      <Route path="/assignment6/todo" Component={ToDoList} />
      </Routes>
    </Router>
  );
}

export default App;
