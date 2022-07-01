
# Chess
A simple chess engine in js

 


## Installation

copy and paste the follwing code in your html file
```html
<script type="text/javascript"src="https://cdn.jsdelivr.net/gh/rapythereaper/chess@master/goti.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/rapythereaper/chess@master/board.js"></script>
<script>
    let game=new Game();
</script>
```
## Board 
The chess board in the game is represented as an top down graph with 8 rows and 8 column.
(x,y) cordinate is used to reprecent each cell in starting from (0,0) - (7,7)
![map editor](https://raw.githubusercontent.com/rapythereaper/chess/main/board.png)
## API
### .init():
initilalize the game to starting position.
```js
let game=new Game();
//other logic...
game.init()
```
same result can be achived by createing new game object.

### .print():
print acii representation of the board.
```js
   let game=new Game();
   game.print();
   /*
        e	h	c	k	q	c	h	e
        i	i	i	i	i	i	i	i
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        i	i	i	i	i	i	i	i
        e	h	c	k	q	c	h	e
   */
```

### .getMove(y,x):
returns the list of possible move that that can be taken by pieces in position (y,x)

```js
    let game=new Game();
    let pos=game.getMove(6,0)
    console.log(pos)            // [{y:5,x:0},{y:4,x:0}]
```
for an empty cell or if pieces color is not the color of current player it return empty list

### .getAllMoves():
return all the posible move that can take by the current player.

```js
    let game=new Game();
    console.log(game.getAllMoves());    // [{from:{6,0},to:[{y:5,x:0},{y:4,x:0}]},.....]
```

### .move(from,to):
moves the pieces from(y,x)-to(y,x).

```js
   let game=new Game();
   game.print();
   /*
        e	h	c	k	q	c	h	e
        i	i	i	i	i	i	i	i
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        i	i	i	i	i	i	i	i
        e	h	c	k	q	c	h	e
   */
   let from={y:6,x:0};
   let to={y:4,x:0};
   game.move(from,to);  // move the white pawn form (6,0 ) to (4,0)
   game.print();

   /*
        e	h	c	k	q	c	h	e
        i	i	i	i	i	i	i	i
        *	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        i	*	*	*	*	*	*	*
        *	*	*	*	*	*	*	*
        *	i	i	i	i	i	i	i
        e	h	c	k	q	c	h	e
   */
   
```
for unvalid move throws error

### .moveWithNoRule(from,to):
allows for moveent of piece without rule checking
### .undo():
undo the last played move.





