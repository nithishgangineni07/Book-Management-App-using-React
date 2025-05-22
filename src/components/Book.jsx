
import "./style.css"
function Book(props){

    return(

        <>
         <div className="book-details">

          <img src={props.bookDetails.imageUrl} alt="" className="image"/>


          <div className="book-matter">
          <h2>{props.bookDetails.title}</h2>
          <h3 id="bookAuthor">{props.bookDetails.author}</h3>
          <p id="bookDescription">{props.bookDetails.description}</p>
          <h6>{props.bookDetails.amount}</h6>
          </div>

         </div>

        </>
    )

}

export default Book;