import {useState, setState} from 'react';
import axios from 'axios';
import './Home.css';
import BookSimplified  from '../BookSimplified/BookSimplified';




const Home = () => {

  const [searchText, setSearchText] = useState();
  const [searchMessage, setSearchMessage] = useState("Perform a Search Query");
  const [resultsArray, setResultsArray] = useState([]);

  const onChangeSearchText = e => {
    setSearchText(e.target.value);
  }

  
  const onSearch = e => {
    e.preventDefault();
    axios.get(`/api/books/search/${searchText}`).then( response => {
      let books = response.data.books
      if(books) {
        setSearchMessage(`Found ${books.length} results for search term "${searchText}"`);
        setResultsArray(books);
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
      <p id='project-description'>This project is a simple application that allows any user to fetch and add any book in the directory.</p>

      <form  onSubmit = {onSearch}>
        <input class='search-input' type='search' onChange={onChangeSearchText} placeholder="Search for a book"/>
        <br/>
        <input class='submit-input' type='submit' value='Search'></input>
      </form>

      <p>{searchMessage}</p>
      <div class='results-div'>
        {resultsArray.map((item,index) => {
          return(
            <BookSimplified item={item}/>
          )          
        })}
      </div>
        



    </div>
  );
}

export default Home;
