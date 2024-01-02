// give moveable x to paddle
let pX = 250;
let pY = 500; 

// give starting x and y to ball 
let x = 255;
let y = 50;

// give random speed to x and y
let xSpeed = 0;
let ySpeed = 0;

// give starting rgb to ball
let r = 255;
let g = 255;
let b = 255;

// setup game so it can start when user clicks mouse 
let gameStarted = false;

// background variable holders
let bg;
let fg;

// background speeds
let bgSpeed = 0.4;
let fgSpeed = 1.0;

// need copies to be drawn at specific times 
let bg1 = 0;
let bg2 = 500;
let fg1 = 0;
let fg2 = 500;

// treasure variable holders
let treasure;

// min and max values for treasure 
let min = 100; // Minimum value
let max = 400; // Maximum value

// define initial positions and speeds for treasures
let t1X = 0;
let t2X = 500;
let t1Y = Math.floor(Math.random() * (max - min + 1)) + min;
let t2Y = Math.floor(Math.random() * (max - min + 1)) + min;
let tSpeed1 = (Math.random() * 3.5) + 2; 
let tSpeed2 = (Math.random() * 3.5) + 2;

// initialize points variable
let points = 0;

// initialize song variables
let boing;
let collect;
let loss;

function preload() {
    // load in art
    bg = loadImage('images/background.png');
    fg = loadImage('images/foreground.png');
    treasure = loadImage('images/treasure.png');
    boing = loadSound("sounds/boing.mp3");
    collect = loadSound("sounds/collect.mp3");
    loss = loadSound("sounds/loss.mp3");
}

function setup() {
    // set up canvas
    createCanvas(500,500);
    background(0);
}

function draw() {
    // get rid of background
    background(0);

    // draw bg and fg
    image(bg, 0, bg1);
    image(bg, 0, bg2);
    image(fg, 0, fg1);
    image(fg, 0, fg2);

    // move both positions a little bit down
    bg1 += bgSpeed;
    bg2 += bgSpeed;
    fg1 += fgSpeed;
    fg2 += fgSpeed;

    // Loop the background and foreground
    if (bg1 >= 500) {
        bg1 = bg2 - bg.height;
    }
    if (bg2 >= 500) {
        bg2 = bg1 - bg.height;
    }
    if (fg1 >= 500) {
        fg1 = fg2 - fg.height;
    }
    if (fg2 >= 500) {
        fg2 = fg1 - fg.height;
    }

    // create paddle
    rectMode(CENTER);
    fill(255, 102, 178);
    rect(pX, pY, 125, 25);

    // ensure paddle cannot be out of bounds 
    pX = constrain(pX, 63, 437);

    // logic for user to control paddle
    if (keyIsDown(68)) {
        pX += 5;
    } else if (keyIsDown(65)) {
        pX -= 5;
    }

    // create ball
    r = map(x,63,437,100,255);
    g = map(y,63,437,100,255);
    b = map(x,63,437,100,255);
    fill(r, g, b);
    ellipse(x, y, 50,50);

    // display points
    fill(255);
    textSize(20);
    text("Points: " + points, 10, 25);

    // start game
    if (gameStarted) {

        // draw 2 treasures
        image(treasure, t1X, t1Y, 50, 50);
        image(treasure, t2X, t2Y, 50, 50);

        // move treasures horizontally
        t1X += tSpeed1;
        t2X -= tSpeed2;

        // if treasures fly off screen, reset their positions
        if (t1X > 550) {
            t1X = 0;
            t1Y = Math.floor(Math.random() * (max - min + 1)) + min;
            tSpeed1 = (Math.random() * 3.5) + 2;
        }
        if (t2X < -50) {
            t2X = 500;
            t2Y = Math.floor(Math.random() * (max - min + 1)) + min;
            tSpeed2 = (Math.random() * 3.5) + 2;
        }

        // if ball hits treasure 
        let tDist1 = dist(t1X + 25,t1Y + 25,x,y);
        let tDist2 = dist(t2X + 25,t2Y + 25,x,y);
        if (tDist1 <= 30) {
            collect.play();
            points += 1;
            t1X = 0;
            t1Y = Math.floor(Math.random() * (max - min + 1)) + min;
            tSpeed1 = (Math.random() * 3.5) + 2;
        }
        if (tDist2 <= 30) {
            collect.play();
            points += 1;
            t2X = 500;
            t2Y = Math.floor(Math.random() * (max - min + 1)) + min;
            tSpeed2 = (Math.random() * 3.5) + 2;
        }

        // constrain x and y speeds
        xSpeed = constrain(xSpeed, -10, 10);
        ySpeed = constrain(ySpeed, -10, 10);
        // add speed to x and y
        x += xSpeed;
        y += ySpeed;

        // if ball hits paddle
        if (y >= (pY - 25 - 12.5) && (( x > pX - 62.5) && (x < pX + 62.5))) {
            boing.play();
            y = 500 - 25 - 12.5;
            ySpeed = ySpeed * -1.1;
            xSpeed = map(x, pX - 62.5, pX + 62.5, xSpeed * 0.3, xSpeed * 2.0);
        }

        // if ball hits a wall
        if (x >= 480 || x <= 20) {
            boing.play();
            // bounce x and speed ball every time it hits a wall
            xSpeed = xSpeed * -1.1;
        } 
        if (y <= 20) {
            boing.play();
            // bounce y and speed ball every time it hits a wall
            ySpeed = ySpeed * -1.1;
        } else if (y > 500) {
            loss.play();
            // reset game
            x = 255;
            y = 50;
            xSpeed = (Math.random() * 4) + 2.5;
            ySpeed = (Math.random() * 4) + 2.5;
            gameStarted = false;
        }
    }
}

// set up mouse click 
function mouseClicked() {
    // start the game when the mouse is clicked and the game hasn't been started already
    if (!gameStarted) {
        points = 0;
        xSpeed = (Math.random() * 4) + 2.5;
        ySpeed = (Math.random() * 4) + 2.5;
        gameStarted = true;
    }
}
