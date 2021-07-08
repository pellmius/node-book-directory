import React from 'react';
import './BookSimplified.css'
const BookSimplified = props => {
    return(
        <div className='book-simplified-div'key={props.item._id}>
              <p className='title'>{props.item.title}</p>
              <p className='author'>{props.item.author}</p>
              <p className='synopsis'>Synopsis: {props.item.synopsis}</p>
              <p className='price'>Price: {props.item.price}</p>
            </div>
    )
}

export default BookSimplified;