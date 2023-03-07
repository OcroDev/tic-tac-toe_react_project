import React from 'react';
import { Square } from './Square';
export function WinnerModal({ winner, clearBoard }) {
  if (winner === null) return null;
  return (
    <section className='winner'>
      <div className='text'>
        <h2>The winner is</h2>
        <header className='win'>
          <Square>{winner}</Square>
        </header>
        <footer>
          <button onClick={clearBoard}>Play Again</button>
        </footer>
      </div>
    </section>
  );
}
