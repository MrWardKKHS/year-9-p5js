# Lesson 1

This lesson plan will introduce color to students using p5.js

## Objectives:

By the end of this lesson, students will be able to:
- understand the many ways of adding color in p5.js
- use the ```fill()``` and ```stroke()``` functions
- use ```noStroke() noFill() blendMode() strokeWeight()```
- understand that color is 3 channels of RGB 
- understand the concept of alpha

Materials:

- A computer with VS Code installed
- The p5.js [reference documentation](https://p5js.org/reference/)

## Procedure:

### 0. Do Now:
- [coordinate practice](https://editor.p5js.org/Alexwatermelon/full/G2Is_g7Dc) Reward the longest streak

### 1. Introduction (15 minutes)
- navigate to dev\p5 folders start a new sketch called color
- NOTE: always spell color without the U
- What do we know that changes the color on a sketch already (the argument passed to background)
- What happens if we make this 2 numbers? 3? 4? 5?
- how high can these numbers go? 
- How low?

### 2. What's happening here? (10 minutes)
- 1 number: Greyscale 0-255
- 2 numbers: grey + alpha
- 3 numbers: R G B
- 4 RGBA

What is alpha? 

### 3. other modes
- [Named web colors](https://www.w3schools.com/colors/colors_names.asp) as a string
- Hex values as strings "#FB5" "#7DE621"
- [google color picker](https://www.google.com/search?q=web+color+picker&rlz=1C1GCEA_enNZ995NZ995&sxsrf=ALiCzsb3-qzmQFNzzT4gHaoDa2LCfLuUCw%3A1657164689298&ei=kVPGYqfcEfKf4-EPzdaP0AY&oq=web+colo&gs_lcp=Cgdnd3Mtd2l6EAMYATIFCAAQkQIyBAgAEEMyBAgAEEMyBQgAEIAEMgQIABBDMgUIABCRAjIKCAAQgAQQhwIQFDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoKCAAQsQMQgwEQQzoLCC4QgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOgwILhDHARDRAxAKEEM6BwgAELEDEEM6EAgAEIAEEIcCELEDEIMBEBQ6CwguEIAEEMcBEK8BSgQIQRgASgQIRhgAUABYwwhgxBFoAHABeACAAdkBiAGwDJIBBTAuNC40mAEAoAEBwAEB&sclient=gws-wiz)

### 3. Let's DRAW! (30 minutes)

**Challenge:** make a sketch with 3 overlapping circles
- Give each one a color using fill()
- Make sure each one has alpha
- give each one a border using stroke() and strokeWeight()
- change blendMode

Example:
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  blendMode(LIGHTEST)
  noStroke()
  strokeWeight(4)
  fill(255, 0, 0, 50)
  circle(200, 200, 150)
  fill(0, 255, 0, 50)
  circle(230, 230, 150)
  fill(0, 0, 255, 50)
  circle(170, 230, 150)
}
```
