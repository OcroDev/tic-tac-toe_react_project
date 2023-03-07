import './App.css';
import confetti from 'canvas-confetti';
import { useState } from 'react';
import { Footer } from './component/Footer';
import { Square } from './component/Square';
import { checkWinner, checkDraw } from './logic/checkWinner';
import { WinnerModal } from './component/WinnerModal';
import { DrawModal } from './component/DrawModal';
import { TURNS } from './constans';
import { Board } from './component/Board';
import { removeFromStorage, saveToStorage } from './storage/saveGame';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill('');
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const updateBoard = (index) => {
    if (board[index] !== '' || winner) return;

    const newBoard = structuredClone(board);
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    saveToStorage({ board: newBoard, turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(() => {
        return newWinner;
      });
    } else {
      const newDraw = checkDraw(newBoard);
      if (newDraw) {
        setDraw(() => newDraw);
      }
    }
  };

  const clearBoard = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setDraw(false);
    setTurn(TURNS.x);
    removeFromStorage();
  };

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <div>
          <button onClick={clearBoard}>Restart Game</button>
          <Board board={board} updateBoard={updateBoard} />
        </div>

        <section className='turn'>
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </section>
        <WinnerModal winner={winner} clearBoard={clearBoard} />
        <DrawModal clearBoard={clearBoard} draw={draw} />
      </main>
      <Footer />
    </>
  );
}

export default App;
