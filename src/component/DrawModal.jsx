import React from 'react';

export const DrawModal = ({ clearBoard, draw }) => {
  if (!draw) return null;
  return (
    <section className='winner'>
      <div className='text'>
        <h2>Draw</h2>
        <footer>
          <button onClick={clearBoard}>Play Again</button>
        </footer>
      </div>
    </section>
  );
};
