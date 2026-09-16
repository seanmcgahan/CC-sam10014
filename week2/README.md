# Week 2

## Initial Drawing
I originally drew this out slightly differently, with the square still rotated 45 degrees, but pushed closer to the bottom left corner where the triangle and line. I ended up preferring the look of the square staying dead-center of the canvas so i left it there instead.

## Variation 1
I wanted to keep my first variation simple enough with the transformations. I wasn't sure how this would work in terms of writing it in code yet. So I avoided rotations in this one. I kept the triangle values hardcoded since it was easier for me to find the exact coordinates I wanted each point to be at. In this case with a right triangle, I just needed to keep proportions the same as the corner of the right angle stayed the same and the other points either moved up or out by equal amounts. 

By having the square using the rotation(45) command, it was easy to get it to move where I wanted it to, as this only required me to move the coodinates of the position, resulting in it moving in the diagonal direction I wanted it to.

## Variation 2
I introduced some rotations in this one. I was able to recreate the positioning of my drawing almost exactly, but I achieved this in a different way than I thought I would. Due to the order of operations, I was having some trouble getting the rotations to work correct. However, I found a work-around. Since I was using hard-coded coordinates, I was able to just invert these. I flipped the x and y of each point of the triangle, and swapped the y coordinates of the points of the line. These both worked exactly to move the shapes to their new positions. 

One thing I did not account for in my drawing was the layering of shapes on top of each other. In the drawing, you can see the line underneath the square and the triangle, but due to my order of shapes in the code, (Triangle first, then line, then square) the square is covering the line in my final image.

## Variation 3
Once again, I used the positioning coordinates of both the triangle and the line to "rotate" them here to their new positions I made in my drawing for this variation. 

Since I wanted the square to be positioned in the center of the y axis and on the left side of the canvas, I adjusted the translate command to move the origin. By setting the origin to (200, 400) rather than the previous (400, 400) allowed me to not have to deal with moving the square's x,y coordinates once rotated.

I originally was trying to position it using the coordinates of the square, but found this very difficult as the x and y coordinates where shifted 45 degrees already. Figuring out how to get around this helped me better understand how the rotate command works and what it is doing to the shapes in my sketch.

## Variation 4
I used the same strategy to rotate the triangle 180 degrees. The triangle got a whole new set of coordinates that kept the same proportions but gave it a rotation to its new spot. I used the x and y scale parts of the rect command to scale the square down and keep it in the same spot. 

## Variation 5
Here I used the rotation function to get the square rotated back to 0 degrees. However, I moved the origin of the square back to (400, 400) to make the positioning of it more straight forward. The triangle and line were repositioned/resized using the hardcoded coordinates.


## Getting Started

Open `index.html` in your web browser and start editing `sketch.js`.

## Running Locally

For projects with media files, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

## Resources

- [p5.js 2.0](https://beta.p5js.org/)
- [p5.js Reference](https://p5js.org/reference/)
