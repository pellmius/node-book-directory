import logo from './logo.svg';
import {useState, setState} from 'react';
import axios from 'axios';
import './App.css';




const Home = () => {

  const [searchText, setSearchText]= useState();

  const onChangeSearchText = e => {
    setSearchText(e.target.value);
  }

  const onSearch = e => {
    e.preventDefault();
    axios.get(`/api/books/${searchText}`).then( response => {

      if(response.data.book) {
        console.log(response.data.book);  
      } else {
        alert("lmao")
      }

    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <h1>Book Directory</h1>
      <h2>Fun project for my portfolio.</h2>
      <p>This project is a simple application that allows any user to fetch and add any book in the directory.</p>
      <form onSubmit = {onSearch}>
        <input type='search' onChange={onChangeSearchText} placeholder="Search for a book"/>
        <input type='submit' ></input>
      </form>
      
    </div>
  );
}

export default Home;
