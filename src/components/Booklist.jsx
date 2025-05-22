
import "./style.css"
import { useState } from "react";
import Book from "./Book.jsx"

function Booklist(props){

    return (

        <>
         <div className="book-gallary">{props.bookData.map((data)=>(<Book bookDetails={data} key={data.id}></Book>))}
</div>
        </>
    );
}

export default Booklist;