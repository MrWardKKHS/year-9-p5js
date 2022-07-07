# Lesson 1

This lesson plan will provide an introduction to VS code and how to set up p5.js on VS code. 

## Objectives:

By the end of this lesson, students will be able to:
- open VS code, open a folder in VS code, install a package and run a command from the command pallett
- Understand what the p5.js editor is and what it can be used for
- Have a basic understanding of how the editor works
- Be familiar with the interface and some of the features of the editor

Materials:

- A computer with VS Code installed
- The p5.js [reference documentation](https://p5js.org/reference/)

## Procedure:

### 1. Introduction (15 minutes)
- Get students to navigate to their p: drives, make a dev folder and a p5js folder inside that
- Introduce students to VS code, show them how to open the folder they have just made
- Install the p5.vscode extension by using the navbar on the LH side
- Create a new sketch by using ctl shift P "Create p5.js Project

### 2. What are we looking at? (10 minutes)

- What is HTML?
- What is jsconfig, why is it there?
- style.css??? - Dont worry you'll learn about these next year.

- Sketch.js - the only one that matters
- JS stands for? 
- What is a programming language? 
- How do we write a program?
- How do we run a program?
- The browser! Click on index.html and choose "Open with Live Server"

### 3. Let's DRAW! (10 minutes)

get a circle in the middle of the screen
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 50)
}
```

- What do each of those numbers do?
Change them and find out.

- Intellesense!!
It will tell you what to do!!! 🤯


### 4. Explore (10 minutes)

use intellesense to find out what is possible. 
introduce 2D primitive shapes to find out

### 5. Conclusion (5 minutes)

Teacher will summarize what was covered in the lesson and answer any questions students may have.