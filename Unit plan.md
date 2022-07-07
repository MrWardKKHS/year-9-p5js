Lessons: The Editor, Events, coordinates, primative shapes, math, strings, variables, 2D shapes, colour,  itteration, arrays, conditionals, functions 

Code examples:
2D shapes
2D Shapes with variables (+copy)
flashlight (additive color)
submittable animal or location
color giggle
bouncing ball
Bouncing Ball
Bouncing Ball Keyboard Controlled
Arrow Commands
Ball Keyboard
coordinate practice
jiggly kelidescpoe + Chill sing


arrays
basic rotation
random walker
befitting attention
tag
challenges for year 9s
face
Time Leader
Loopy labs
simplistic sumac
Keyboard year 9s
collision detection
car race
Disco dance party
The Virus

KKHS Bubbles Arrays
KKHS Bouncing Ball Year 9
create P demo
Earth and moon
advanced: Living pediatrition copy
Fanatical Athlete
Youtube make a game with p5.js
strawflower - test

Japanese stitching patterns?

Lesson 0.5: The Editor - play with background numbers, play button, turn off auto-refresh 

do file save, make an account using log in, show share abilities,  

Dark Mode 

  

Lesson 1 - 2: Shapes and drawing - deep dive into createCanvas parenthese four hundred, four hundred, closed parenthesis semi colon. 

code blocks {this is a block in curlies} 

functions, arguments. "You told me to do star jumps I would need to ask you, how many" 

JavaScript or p5? -> Reference page 2D primitives 

rect() guessing numbers to figure out how it works 

Co-ordinates X Y -> Y is flipped!! (0,0) at top left 

assignment -> make your own drawing, self portrait or landscape show me good use of each of the shapes in the reference.  

Good formatting!!  

Code order -> what appears on top or behind 

rectMode() 

  

Lesson 3: Color - WARNING - American spelling on all color functions 

Say is with 3 syllables "R - G - B". Mixing some amount of red, green and blue 

change background to (200, 0, 100) (200, 0, 0) (0, 0, 0) (1000, 1000, 1000) 

additive - flashlight metaphor 

 

Flashlight lesson  

maximum value 255 

If red and blue and green are all the same number this is "greyscale"  

Check the reference -> setting the color 

default fill is white, default stroke is black 

set the color Before you draw! 

noStroke vs stroke(0) 

Bonus! alpha - seethroughyness - transparency 

attributes strokeWeight()  

go back to the drawing from last lesson. Assignment: use all setting color functions 

  

Lesson 4: Code comments and errors if needed 

error messages are your friend. They help you get it working 

Case sensitive 

console.log() 

camel Case 

; <- what's this about 

edit Tidy Code 

 

SUBMITTABLE 1: 

An animal or a location 

  

Lesson 5: Variables 

setup() block draw block as the fundimental functions in p5 

Controll flow -> how do we controll time in p5? 

setup() happens once draw() is a forever loop 

How do we make things move? We need to vary what heppens each time draw() happens 

mouseX 

move the background to setup() 

ellipse(mouseX, mouseY) fill(color with alpha) <- painting program 

function() mousePressed(). An Event! 

duplicate background() inside mousePressed() 

  

Lesson 6 (at least): custom variables 

How do we make a variable?  

1) Declare 

2) Initilise 

3) Use 

let  

make up a name. Anything you choose!! Rainbow. Probably something useful though 

the = sign 

declare at the top above setup 

change circleX BUT ONLY USE LITTERALS 

After this do circleX = circleX + 1 in draw() 

reminder = sign means to assign not is it equal to? 

Assignment - make more variables for the Y position, size, color, use mouseX with color, size, have things change at different rates.  

  

lesson 7: Conditionals. Get students used to IF statements, esp 

brackets. Combine with the idea that speed is the change of position. Use an IF to bounce a ball.  

  

lesson 9: User inputs. mousePressed() - change background color 

combine with random() 

each time the mouse is pressed a new background is made and a new fill is made 

combine with other properties, location, strokeWeight, stroke etc 

  

lesson 10: keyIsPressed() Dont use KeyPressed()!!! 

Needs 4x if blocks - good 'if' revision  

use to controll ball location and make etch'n'sketch 

suggest + - for size from reference  

or z x for color either mono or HSB 

  

lesson 11: rotation translate to center 

class activity where they spin by PI amounts  

try to get students to guess how much is half a turn  

DON'T TRY TO USE THE TERM RADIANS! 

get a spinning propeller working, maybe draw up a basic aeroplane with the nose at the centre. 

translate(mouseX, mouseY) 

start Earth and Moon.  

  

  

lesson 7 Objects 

Refactoring the supplied code 

variables that go together x y diameter 

var circle = {x:0, y:100, diameter} 

circle is the "container" for these three variables 

dot syntax  

nothing new changes but the variables are organised 

assignment -> make more circles circle1, circle2, make a rectangle object or two  

and get each object to do something 