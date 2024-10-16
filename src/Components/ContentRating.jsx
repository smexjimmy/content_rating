import React, { Component, useState } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    const [isvisible, setIsvisible] = useState(true)
    const togglevisibility = () => {
      setIsvisible(!isvisible)
    }
    return (
      <>
      <div>
        <h2> Toggle visibility</h2>
        <button onClick={togglevisibility}> 
          {isvisible ? 'hide message' : 'show message'}
        </button>
        {isvisible && <p>this is a hidden message</p>}
      </div>
      </>
    )
  }
}

export default ContentRating;