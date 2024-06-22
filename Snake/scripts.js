// Game constants
const GRID_SIZE = 20;
const CANVAS_SIZE = 400;
const INITIAL_SNAKE_LENGTH = 5;
const SPEED = 100; // milliseconds

// Game variables
let snake;
let food;
let score;
let direction;
let gameOver;
let gameLoop;

// Initialize game
function init() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Initialize variables
    snake = [{ x: 10, y: 10 }];
    food = { x: 15, y: 15 };
    score = 0;
    direction = 'right';
    gameOver = false;

    // Set up keyboard controls
    document.addEventListener('keydown', handleKeyPress);

    // Start game loop
    gameLoop = setInterval(() => {
        if (!gameOver) {
            moveSnake();
            checkCollision();
            drawGame(ctx);
        }
    }, SPEED);
}

// Handle keyboard input
function handleKeyPress(event) {
    const key = event.key;
    if (key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    } else if (key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    } else if (key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    } else if (key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
    }
}

// Move the snake
function moveSnake() {
    // Create new head based on direction
    let newHead = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case 'up':
            newHead.y -= 1;
            break;
        case 'down':
            newHead.y += 1;
            break;
        case 'left':
            newHead.x -= 1;
            break;
        case 'right':
            newHead.x += 1;
            break;
    }

    // Add new head to the beginning of snake array
    snake.unshift(newHead);

    // Check if snake eats food
    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        generateFood();
    } else {
        // Remove tail segment if no food eaten
        snake.pop();
    }
}

// Generate food at random position
function generateFood() {
    food.x = Math.floor(Math.random() * GRID_SIZE);
    food.y = Math.floor(Math.random() * GRID_SIZE);

    // Check if food spawns on snake, regenerate if true
    if (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        generateFood();
    }
}

// Check for collision with walls or self
function checkCollision() {
    const head = snake[0];

    // Check collision with walls
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        gameOver = true;
    }

    // Check collision with itself (except head)
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            break;
        }
    }
}

// Draw game on canvas
function drawGame(ctx) {
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * GRID_SIZE, food.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    });

    // Draw score
    ctx.fillStyle = '#333';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);

    // Game over
    if (gameOver) {
        clearInterval(gameLoop);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.fillStyle = '#333';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', 130, CANVAS_SIZE / 2);
        ctx.font = '20px Arial';
        ctx.fillText(`Final Score: ${score}`, 150, CANVAS_SIZE / 2 + 30);
    }
}

// Start game on page load
document.addEventListener('DOMContentLoaded', init);
