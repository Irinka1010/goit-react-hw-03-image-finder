import React from 'react';
export default function Button({ changePage }) {
  return (
    <button onClick={changePage} type="button">
      Load More
    </button>
  );
}
