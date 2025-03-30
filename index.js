let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    ballRadius = 9,
    x = canvas.width / (Math.floor(Math.random() * Math.random() * 10) + 3),
    y = canvas.height - 40,
    dx = 2,
    dy = -2;

let paddleHeight = 12,
    paddleWidth = 72;

// Paddle start position
let paddleX = (canvas.width - paddleWidth) / 2;
