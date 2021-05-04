import React from 'react';
import Rating from './Rating';

export default function Sneaker(props) {
  const { sneaker } = props;
  return (
    <div key={sneaker._id} className="card">
      <a href={`/sneaker/${sneaker._id}`}>
        <img className="medium" src={require('../assets/images/'+ sneaker.image).default} alt={sneaker.name} />
      </a>
      <div className="card-body">
        <a href={`/sneaker/${sneaker._id}`}>
          <h2>{sneaker.name}</h2>
        </a>
        {/* <Rating
          rating={sneaker.rating}
          numReviews={sneaker.numReviews}
        ></Rating> */}
        <div className="price">${sneaker.price}</div>
      </div>
    </div>
  );
}

