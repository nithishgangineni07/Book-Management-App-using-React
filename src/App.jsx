import {books} from "./mockData.js"
import Booklist from "./components/Booklist.jsx"
import "./components/style.css"
import {useState} from "react" 

function App() {
   
  const [searchText,setSearchText]= useState("");
  const [filteredbooks,setFilterbooks]=useState(books);

  function handleClick(){
     const filterbooks =books.filter((book)=>book.title.toLowerCase().includes(searchText.toLowerCase()));
     setFilterbooks(filterbooks)
  }
 
 

  return (
    <>
      <div className="searchdiv">

        <h1>Search For Books</h1>
        
      <div className='search'>

      <input type="text" className='searchbar'  onChange={(e)=>setSearchText(e.target.value)}/>
      <button onClick={handleClick}>submit</button>

      </div>
      </div>

      <Booklist bookData={filteredbooks}></Booklist>
      
    </>
  )
}

export default App
