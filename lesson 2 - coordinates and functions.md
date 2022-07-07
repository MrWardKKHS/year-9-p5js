# Lesson 2

This lesson plan will continue with the introduction to VS code and p5.js

## Objectives:

By the end of this lesson, students will be able to:
- Place basic shapes in p5.js
- Resize the canvas
- understand the difference between setup() and draw()
- know how to access the reference
- understand that errors are printed to the console and how to find them

Materials:

- A computer with the p5.js editor installed
- [The p5.js reference documentation](https://p5js.org/reference/)
- A few example sketches (provided by the teacher or found online)

## Procedure:

### Do Now: 
Open VS code and create a new p5.js sketch with a circle in the middle of the canvas. Open it in the browser. 

### 1. Introduction to coordinates (15 minutes)
- How big is our canvas?
- x and y -> width and height
- Co-ordinates X Y -> Y is flipped!! (0,0) at top left 

- code blocks {this is a block in curlies}

what is the coordinate of the middle? Top left corner, top right, bottom right, bottom left

### 2. Lets talk about functions (7 minutes)
- What are they? 
- functions are like recipies they need to be written, then followed to actually make the cake!

- write the recepie -> define
- make the cake -> call

- How do we call functions?
- deep dive into createCanvas parenthese four hundred, four hundred, closed parenthesis semi colon. This is the **syntax**

- setup happens once,  draw runs sequentially through our code, looping 30 times a second

- functions, arguments. "You told me to do star jumps I would need to ask you, how many" 

- What are our arguments in createCanvas?

- What are our arguments in setBackground

- what are our arguments in circle()

### 3. Some more functions in p5.js (10 min)
- rect() guessing numbers to figure out how it works 

- use intellesence to figure out what the arguments are

### 4. The reference 
- Navigate to the [reference](https://p5js.org/reference/)

- find the 2D shapes list

![shapes list](assets\shapes.png)

- Code order -> what appears on top or behind

## 5. assignment: 
- make your own drawing, self portrait or landscape show me good use of each of the shapes in the reference.  

example:
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(100, 100, 25, 25);
  ellipse(300, 100, 25, 25);
  triangle(175, 175, 225, 175, 200, 200);
  arc(175, 200, 50, 50, 0, HALF_PI);
  arc(225, 200, 50, 50, HALF_PI, PI);
}
```
