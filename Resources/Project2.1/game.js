/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!



/*
	Note for unicode arrows
	8592 = left arrow
	8593 = up arrow
	8594 = right arrow
	8595 = down arrow
*/


//Save a bunch of specific x y coordinates for use in multiple areas
let gridX;
let gridY;

let startX;
let startY;

let endX;
let endY;

let direction;

let currentX;
let currentY;

let nextX;
let nextY;

let won = false;
let checked = false;
let level = 1;

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	loadNextLevel();

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	// PS.statusText( "Game" );

	// Add any other initialization code you need here.
};



//Loads whatever the next level of the puzzle is
function loadNextLevel() {
	if(level == 1) {
		loadLevel1();
	} 
	else if(level == 2) {
		loadLevel2();
	}
	else if(level == 3) {
		loadLevel3();
	}
	else if(level == 4) {
		loadLevel4();
	}
};



//Displays the text for the appropriate level
function displayLevelText() {
	if(level == 1) {
		PS.statusText("Click arrows to form a path (Space to check)");
	}
	else if(level == 2) {
		PS.statusText("The line can not cross itself");
	}
	else if(level == 3) {
		PS.statusText("Test Level");
	}
	else if(level == 4) {
		PS.statusText("Thanks For Playing!");
	}
};



//Load the first level of the puzzle
function loadLevel1() {
	//Displays instructions
	displayLevelText();

	//Sets grid size
	gridX = 5;
	gridY = 5;
	PS.gridSize(gridX, gridY);

	//Load start
	startX = 0;
	startY = 0;
	PS.glyph(startX, startY, PS.random(4) + 8591);
	PS.color(startX, startY, PS.COLOR_BLUE);

	//Load end
	endX = 4;
	endY = 4;
	PS.color(endX, endY, PS.COLOR_GREEN);

	//Load other arrows
	PS.glyph(3, 0, PS.random(4) + 8591);
	PS.glyph(3, 2, PS.random(4) + 8591);
	PS.glyph(1, 2, PS.random(4) + 8591);
	PS.glyph(1, 4, PS.random(4) + 8591);
}


//Load the second level of the puzzle
function loadLevel2() {
	//Displays instructions
	displayLevelText();

	//Sets grid size
	gridX = 7;
	gridY = 5;
	PS.gridSize(gridX, gridY);

	//Load start
	startX = 1;
	startY = 1;
	PS.glyph(startX, startY, PS.random(4) + 8591);
	PS.color(startX, startY, PS.COLOR_BLUE);

	//Load end
	endX = 5;
	endY = 2;
	PS.color(endX, endY, PS.COLOR_GREEN);

	//Load other arrows
	PS.glyph(3, 1, PS.random(4) + 8591);
	PS.glyph(3, 0, PS.random(4) + 8591);
	PS.glyph(2, 0, PS.random(4) + 8591);
	PS.glyph(4, 0, PS.random(4) + 8591);
	PS.glyph(2, 2, PS.random(4) + 8591);
	PS.glyph(4, 3, PS.random(4) + 8591);
	PS.glyph(2, 3, PS.random(4) + 8591);
	PS.glyph(0, 2, PS.random(4) + 8591);
	PS.glyph(0, 4, PS.random(4) + 8591);
	PS.glyph(5, 4, PS.random(4) + 8591);
	PS.glyph(6, 0, PS.random(4) + 8591);
	PS.glyph(6, 1, PS.random(4) + 8591);
}



//Loads level 3 of the puzzle
function loadLevel3() {
	//Displays instructions
	displayLevelText();

	//Sets grid size
	gridX = 3;
	gridY = 3;
	PS.gridSize(gridX, gridY);

	//Load start
	startX = 0;
	startY = 0;
	PS.glyph(startX, startY, PS.random(4) + 8591);
	PS.color(startX, startY, PS.COLOR_BLUE);

	//Load end
	endX = 2;
	endY = 0;
	PS.color(endX, endY, PS.COLOR_GREEN);

	//Load other arrows
	PS.glyph(1, 0, PS.random(4) + 8591);
};



//Load an end screen
function loadLevel4() {
	//Displays text
	displayLevelText();

	//Sets grid size
	gridX = 5;
	gridY = 5;
	PS.gridSize(gridX, gridY);

	PS.color(PS.ALL, PS.ALL, PS.COLOR_YELLOW);
};



/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.touch = function( x, y, data, options ) {
	//Saves the value of the current character on the tile
	let glyphValue = PS.glyph(x, y);

	//Checks if the tile has an arrow in it, and if so switch it to the next one
	if(glyphValue >= 8592 && glyphValue < 8595) {
		PS.glyph(x, y, glyphValue + 1);
	}
	else if(glyphValue == 8595) {
		PS.glyph(x, y, 8592);
	}
};



/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};



/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};



/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};



/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};



/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.keyDown = function( key, shift, ctrl, options ) {
	if(!checked && key == PS.KEY_SPACE && level != 4) {
		//0 is left, going clockwise from there
		direction = PS.glyph(startX, startY) % 8592;

		//Sets the x and y to the start position, and generates the next value
		currentX = startX;
		currentY = startY;
		nextStep();

		//Loops while the next space in the line is in grid bounds
		while(nextX >= 0 && nextX < gridX && nextY >= 0 && nextY < gridY) {
			//If the next space is the end you win
			if(nextX == endX && nextY == endY) {
				won = true;
				break;
			}

			//Checks if you have overlapped yourself
			if(PS.color(nextX, nextY) == PS.COLOR_BLUE) {
				break;
			}

			//Sets the next space to be blue
			PS.color(nextX, nextY, PS.COLOR_BLUE);
			
			//Checks if the next space is an arrow, if so change the direction
			if(PS.glyph(nextX, nextY) != 0) {
				direction = PS.glyph(nextX, nextY) % 8592;
			}

			//Updates the positions for next iteration
			currentX = nextX;
			currentY = nextY;
			nextStep();
		}

		checked = true;

		if(won) {
			PS.statusText("You got it! (Space to confirm)");
		} else {
			PS.statusText("Not quite (Space to confirm)");
		}
	} else if(level != 4) {
		//Checks to see if the loop stopped because you won or because you hit a wall
		if(won) {
			won = false;
			level++;
			loadNextLevel();
		} else {
			//Resets all the colors back to start
			displayLevelText();
			PS.color(PS.ALL, PS.ALL, PS.DEFAULT);
			PS.color(startX, startY, PS.COLOR_BLUE);
			PS.color(endX, endY, PS.COLOR_GREEN);
		}
		checked = false;
	}
};


//Calculates what the next tile to move to will be based on current location and direction
function nextStep() {
	if(direction == 0) {
		nextX = currentX - 1;
		nextY = currentY;
	}
	else if(direction == 1) {
		nextX = currentX;
		nextY = currentY - 1;
	}
	else if(direction == 2) {
		nextX = currentX + 1;
		nextY = currentY;
	}
	else if(direction == 3) {
		nextX = currentX;
		nextY = currentY + 1;
	}
};



/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};



/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/
PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};
