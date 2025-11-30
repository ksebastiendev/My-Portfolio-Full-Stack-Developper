import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { heroContent } from '../../data/heroContent';

const SnakeGame = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const content = heroContent[language].game;
  
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameLoopRef = useRef(null);

  const gridSize = 20;
  const tileCount = 20;

  const snake = useRef([{ x: 10, y: 10 }]);
  const food = useRef({ x: 15, y: 15 });
  const direction = useRef({ x: 0, y: 0 });
  const nextDirection = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted && !gameOver) {
        setGameStarted(true);
      }

      switch (e.key) {
        case 'ArrowUp':
          if (direction.current.y === 0) nextDirection.current = { x: 0, y: -1 };
          e.preventDefault();
          break;
        case 'ArrowDown':
          if (direction.current.y === 0) nextDirection.current = { x: 0, y: 1 };
          e.preventDefault();
          break;
        case 'ArrowLeft':
          if (direction.current.x === 0) nextDirection.current = { x: -1, y: 0 };
          e.preventDefault();
          break;
        case 'ArrowRight':
          if (direction.current.x === 0) nextDirection.current = { x: 1, y: 0 };
          e.preventDefault();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const gameLoop = () => {
      direction.current = nextDirection.current;

      const head = { ...snake.current[0] };
      head.x += direction.current.x;
      head.y += direction.current.y;

      // Check wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        setGameOver(true);
        return;
      }

      // Check self collision
      for (let segment of snake.current) {
        if (head.x === segment.x && head.y === segment.y) {
          setGameOver(true);
          return;
        }
      }

      snake.current.unshift(head);

      // Check food collision
      if (head.x === food.current.x && head.y === food.current.y) {
        setScore(s => s + 10);
        food.current = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
      } else {
        snake.current.pop();
      }

      // Draw background - adapt to theme
      ctx.fillStyle = isDark ? '#1a1a2e' : '#f0f4f8';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid - adapt to theme
      ctx.strokeStyle = isDark ? '#0f3460' : '#cbd5e0';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Draw snake - adapt to theme
      snake.current.forEach((segment, index) => {
        ctx.fillStyle = isDark 
          ? (index === 0 ? '#00ffff' : '#00d9ff')
          : (index === 0 ? '#3b82f6' : '#60a5fa');
        ctx.fillRect(
          segment.x * gridSize + 1, 
          segment.y * gridSize + 1, 
          gridSize - 2, 
          gridSize - 2
        );
      });

      // Draw food - adapt to theme
      ctx.fillStyle = isDark ? '#d4ff00' : '#10b981';
      ctx.beginPath();
      ctx.arc(
        food.current.x * gridSize + gridSize / 2,
        food.current.y * gridSize + gridSize / 2,
        gridSize / 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    gameLoopRef.current = setInterval(gameLoop, 120);
    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, isDark]);

  const resetGame = () => {
    snake.current = [{ x: 10, y: 10 }];
    food.current = { x: 15, y: 15 };
    direction.current = { x: 0, y: 0 };
    nextDirection.current = { x: 0, y: 0 };
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  const handleStartClick = () => {
    setGameStarted(true);
  };

  return (
    <div className={`relative p-6 rounded-2xl shadow-2xl transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-[#0f3460] via-[#16213e] to-[#1a1a2e]'
        : 'bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100'
    }`}>
      {/* Instructions */}
      <div className={`absolute top-4 left-4 font-mono text-xs z-10 ${
        isDark ? 'text-cyan-400' : 'text-blue-600'
      }`}>
        <div>{content.instructions}</div>
        <div>{content.arrows}</div>
      </div>

      {/* Score */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`font-mono text-xl font-bold ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          {content.score} {score}
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className={`rounded-lg shadow-lg border-2 ${
          isDark ? 'border-cyan-500' : 'border-blue-400'
        }`}
      />

      {/* Start Overlay */}
      {!gameStarted && !gameOver && (
        <div className={`absolute inset-0 flex items-center justify-center rounded-2xl ${
          isDark ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-80'
        }`}>
          <div className="text-center space-y-4">
            <button 
              onClick={handleStartClick}
              className={`px-8 py-3 font-bold rounded-lg transition transform hover:scale-105 ${
                isDark 
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {content.startGame}
            </button>
            <p className={`text-sm font-mono ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              {content.arrows}
            </p>
          </div>
        </div>
      )}

      {/* Game Over Overlay */}
      {gameOver && (
        <div className={`absolute inset-0 flex items-center justify-center rounded-2xl ${
          isDark ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-90'
        }`}>
          <div className="text-center space-y-4">
            <div className="text-red-500 text-3xl font-bold mb-2">{content.gameOver}</div>
            <div className={`text-2xl font-mono ${
              isDark ? 'text-cyan-400' : 'text-green-600'
            }`}>
              {content.score} {score}
            </div>
            <button
              onClick={resetGame}
              className={`px-8 py-3 font-bold rounded-lg transition transform hover:scale-105 ${
                isDark 
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {content.playAgain}
            </button>
          </div>
        </div>
      )}

      {/* Skip Button */}
      <div className="mt-4 text-center">
        <a href="#about">
          <button className={`px-6 py-2 font-semibold rounded-lg transition text-sm ${
            isDark 
              ? 'bg-cyan-500 text-black hover:bg-cyan-400'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}>
            {content.skip}
          </button>
        </a>
      </div>
    </div>
  );
};

export default SnakeGame;