"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { TbTicTac } from "react-icons/tb";

const TicTacToe = () => {
  const [gameStatus, setGameStatus] = useState({
    reset: false,
    newGame: false,
    gameOver: false,
    winner: null,
  });
  const [toggle, setToggle] = useState(false);
  const [board, setBoard] = useState(Array(9).fill("")); // 3x3 grid
  const [isXNext, setIsXNext] = useState(true); // true for X, false for O


  const handleNewGame = (e) => {
    e.preventDefault();
    setBoard(Array(9).fill("")); //reset the board
    setGameStatus({
      reset: false,
      newGame: false,
      gameOver: false,
      winner: null,
    });
    setIsXNext(true);
  };


  const handleXand0 = (index) => {
    if (board[index] || gameStatus.gameOver) return; //if the spot is already filled or the game is over, do nothing

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O"; //update the board with the new move
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus((prevStatus) => ({
        ...prevStatus,
        gameOver: true,
        winner,
      }));
    } else if (newBoard.every((cell) => cell !== "")) {
      setGameStatus((prevStatus) => ({
        ...prevStatus,
        gameOver: true,
        winner: "Tie",
      }));
    } else {
      setGameStatus((prevStatus) => ({
        ...prevStatus,
        reset: true,
      }));
    }
    setIsXNext(!isXNext); //switch the turn
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]; // Return the winning player ("X" or "O")
      }
    }
    return null; //no winner
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden min-h-dvh w-full flex justify-center items-center flex-col bg-gradient-to-br from-[#751006] via-[#4B0813] to-[#751006] p-4 sm:p-6">
          <h1 className="text-2xl sm:text-4xl text-white font-bold flex justify-center items-center gap-2 sm:gap-5 mb-10">
            Tic Tac Toe <TbTicTac className="text-2xl sm:text-4xl" />
          </h1>
          <form
            className={`${
              toggle ? "hidden" : ""
            } flex flex-col justify-center items-center gap-8 sm:gap-16 w-full`}
          >
            <div className="container mx-auto bg-transparent aspect-square w-full max-w-[300px] sm:max-w-[400px] grid grid-cols-3 gap-2 sm:gap-5">
              {board.map((item, index) => (
                  <input className="tictactoe"
                  onClick={() => handleXand0(index)}
                  readOnly
                  name=""
                  id=""
                  key={index}
                  value={item}
                  type="button"
                />
              ))}
            </div>
            <p
              className={`${
                gameStatus.gameOver ? "hidden" : "visible"
              } text-white font-bold text-xl sm:text-3xl text-center`}
            >
              {isXNext ? "Player X Turn" : "Player O Turn"}
            </p>

            {(gameStatus.gameOver || gameStatus.reset) && (
              <button
                className="bg-gradient-to-t from-red-700 via-red-900 to-red-700 text-white font-bold py-2 px-6 sm:px-10 text-base sm:text-lg border-white border active:scale-95 shadow-lg shadow-slate-900 hover:shadow-inner rounded-xl"
                onClick={handleNewGame}
              >
                {gameStatus.gameOver ? "Play Again" : "Restart"}
              </button>
            )}

            {gameStatus.gameOver && (
              <div className="flex justify-center items-center gap-3 sm:gap-5 backdrop-blur-xl backdrop-filter bg-black/20 border border-slate-400 hover:border-slate-300 px-6 sm:px-20 py-6 sm:py-10 rounded-xl flex-col w-full">
                <p className="text-xl sm:text-3xl text-white tracking-wide text-center">
                  {gameStatus.winner === "Tie"
                    ? "It's a Tie"
                    : `The Winner is ${gameStatus.winner}`}
                </p>
                <button
                  className="bg-gradient-to-t from-red-700 via-red-900 to-red-700 text-white font-bold py-2 px-6 sm:px-10 text-base sm:text-lg border-white border active:scale-95 shadow-lg shadow-slate-900 hover:shadow-inner rounded-xl"
                  onClick={handleNewGame}
                >
                  New Game
                </button>
              </div>
            )}
          </form>
        </div>

    </>
  );
};

export default TicTacToe;
