# Breakout-Game

## Built With
- HTML
- CSS
- p5.js

## Description
A recreation of a classic game where you hit a bouncing ball with a paddle at the bottom of the screen. The ball bounces on walls and gets faster when you bounce it from the sides, but gets slower when you bounce it from the middle. The mechanics of this game were implemented using the p5 library of JavaScript and the user interface was designed using simple HTML and CSS. 

## Game Play Sample
https://github.com/saharbueno/Breakout-Game/assets/69322388/75d08ae6-a560-4cbc-9104-682aa3db75c8

## Takeaways
To create this game, I learned how to use a variety of built-in functions from the p5.js library. First, I learned how the setup() and draw() function work in order to control what was happening in the game and when it should happen. In the setup function, I simply created my canvas and set a background. In the draw function is where I handled all aspects of the game, such as creating the ball, the ball's speed, the reaction of the ball when it hits the paddle or side, and resetting the game when the ball falls through the floor. To be able to simulate a ball hitting a platform, I used the distance function to calculate the distance between the sides or paddle, and once that distance was below a certain range, I made the ball go in the opposite direction by resetting its x and y coordinates. Moreover, I also had to handle the collision between the ball and the stars, which I did in the same way as the walls. In order to simulate the stars moving from left to right at a random y coordinate, I moved the x coordinate of the star and once it went over the width or -width of the canvas or hit the ball, I reset it to a random y coordinate. Additionally, I learned how to use the p5 sound library in order to trigger sounds in the game whenever there was a collision between the ball and another object such as the walls, stars, or if it went through the ground. Lastly, I used the p5 preload function to load in images so the game could be more visually appealing. Something interesting that I implemented was a parallax background so the background always appears to be constantly moving in a specific direction. Overall, I enjoyed the process of customizing this game as well as figuring out the logic I had to implement to get it to work exactly as I wanted. 

<p align="center">
  <i>Visit my site <a href="https://i6.cims.nyu.edu/~sb8249/interactive/assignment02/index.html">HERE</a></i>
</p>

<p align="center">
  <i>˚ʚ♡ɞ˚ Thanks for visiting! ˚ʚ♡ɞ˚</i>
</p>

<p align="center">
  <img src="https://media.giphy.com/media/VwmUKv6Mh91de/giphy.gif" alt="Happy">
</p>
