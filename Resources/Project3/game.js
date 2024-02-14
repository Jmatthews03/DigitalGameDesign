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




//Player sprite
let player;

//Player position
let playerX;
let playerY;

//True if player should not be able to move due to dialogue
let locked;

//Grid dimensions
let gridX;
let gridY;

//Room number
let roomNum;

//NPC sprite and dialogue holders
let tempSprite;
let dialogueLine;

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
	//Initial variables
	locked = false;
	dialogueLine = 0;
	roomNum = 0;

	//Player initialization
	player = PS.spriteSolid(2, 2);
	PS.spritePlane(player, 2);

	//Starting grid settings
	gridX = 15;
	gridY = 6;
	PS.gridSize(gridX, gridY);
	PS.gridColor(PS.COLOR_GRAY_DARK);
	PS.color(PS.ALL, PS.ALL, PS.COLOR_GRAY);
	//PS.border(PS.ALL, PS.ALL, 0);

	//Displays the start screen
	PS.glyph(1, 1, "T");
	PS.glyph(2, 1, "H");
	PS.glyph(3, 1, "E");
	PS.glyph(5, 1, "C");
	PS.glyph(6, 1, "O");
	PS.glyph(7, 1, "R");
	PS.glyph(8, 1, "R");
	PS.glyph(9, 1, "I");
	PS.glyph(10, 1, "D");
	PS.glyph(11, 1, "O");
	PS.glyph(12, 1, "R");

	PS.glyph(2, 3, "P");
	PS.glyph(3, 3, "r");
	PS.glyph(4, 3, "e");
	PS.glyph(5, 3, "s");
	PS.glyph(6, 3, "s");
	PS.glyph(8, 3, "S");
	PS.glyph(9, 3, "p");
	PS.glyph(10, 3, "a");
	PS.glyph(11, 3, "c");
	PS.glyph(12, 3, "e");
	PS.glyphColor(PS.ALL, 3, PS.COLOR_GRAY_DARK);

	PS.glyph(3, 4, "T");
	PS.glyph(4, 4, "o");
	PS.glyph(6, 4, "S");
	PS.glyph(7, 4, "t");
	PS.glyph(8, 4, "a");
	PS.glyph(9, 4, "r");
	PS.glyph(10, 4, "t");
	PS.glyphColor(PS.ALL, 4, PS.COLOR_GRAY_DARK);
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
	// Uncomment the following code line
	// to inspect x/y parameters:

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
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
	if(key == PS.KEY_SPACE) {
		if(locked) {
			dialogueSequencer();
		}
		else if(roomNum == 0) {
			nextRoom();
		}
	}
	else if(!locked && key == PS.KEY_ARROW_UP)
	{
		playerY = playerY - 1;

		if(playerY < 0) {
			nextRoom();
		}
		else {
			PS.spriteMove(player, playerX, playerY);
		}
	}
	else if(!locked && key == PS.KEY_ARROW_DOWN && playerY < gridY - 2) {
		playerY = playerY + 1;
		PS.spriteMove(player, playerX, playerY);
	}
};


//Loads the next room
function nextRoom() {
	roomNum += 1;

	playerX = 2;
	playerY = 30;
	PS.spriteMove(player, playerX, playerY);

	if(roomNum == 1) {
		gridX = 6;
		gridY = 32;
		PS.gridSize(gridX, gridY);
		PS.gridColor(PS.COLOR_GRAY_DARK);
		PS.color(PS.ALL, PS.ALL, PS.COLOR_GRAY);
		PS.border(PS.ALL, PS.ALL, 0);
		playerY = 29;
		PS.spriteMove(player, playerX, playerY);
		PS.statusColor(PS.COLOR_WHITE);
		PS.statusText("(Arrows keys to move)");
		PS.audioPlay("caramelldansen");
	}
	else if(roomNum == 2) {
		tempSprite = PS.spriteSolid(2, 2);
		PS.spriteSolidColor(tempSprite, PS.COLOR_ORANGE);
		PS.spritePlane(tempSprite, 2);
		PS.spriteMove(tempSprite, 2, 1);
		dialogueSequencer();
	}
	else if(roomNum == 3) {
		PS.color(1, 0, PS.COLOR_RED);
		PS.color(4, 1, PS.COLOR_RED);
		PS.color(2, 3, PS.COLOR_RED);
		PS.color(3, 6, PS.COLOR_RED);
	}
	else if(roomNum == 4) {
		PS.color(4, 0, PS.COLOR_RED);
		PS.color(2, 4, PS.COLOR_RED);
		PS.color(3, 7, PS.COLOR_RED);
		PS.color(3, 8, PS.COLOR_RED);
		PS.color(3, 11, PS.COLOR_RED);
		PS.color(3, 12, PS.COLOR_RED);
		PS.color(2, 17, PS.COLOR_RED);
		PS.color(2, 18, PS.COLOR_RED);
		PS.color(2, 25, PS.COLOR_RED);
		PS.color(2, 26, PS.COLOR_RED);
	}
	else if(roomNum == 5) {
		PS.color(2, 0, PS.COLOR_RED);
		PS.color(2, 1, PS.COLOR_RED);
		PS.color(2, 2, PS.COLOR_RED);
		PS.color(3, 0, PS.COLOR_RED);
		PS.color(3, 1, PS.COLOR_RED);
		PS.color(3, 13, PS.COLOR_RED);
		PS.color(2, 9, PS.COLOR_RED);
		PS.color(2, 10, PS.COLOR_RED);
		PS.color(2, 11, PS.COLOR_RED);
		PS.color(2, 13, PS.COLOR_RED);
		PS.color(3, 14, PS.COLOR_RED);
		PS.color(2, 16, PS.COLOR_RED);
		PS.color(2, 19, PS.COLOR_RED);
		PS.color(3, 18, PS.COLOR_RED);
		PS.color(3, 19, PS.COLOR_RED);
		PS.color(3, 20, PS.COLOR_RED);
		PS.color(3, 21, PS.COLOR_RED);
		PS.color(3, 22, PS.COLOR_RED);
		PS.color(3, 23, PS.COLOR_RED);
		PS.color(2, 27, PS.COLOR_RED);
	}
	else if(roomNum == 6) {
		PS.color(PS.ALL, PS.ALL, PS.COLOR_GRAY);
		tempSprite = PS.spriteSolid(1, 1);
		PS.spriteSolidColor(tempSprite, PS.COLOR_GREEN);
		PS.spritePlane(tempSprite, 2);
		PS.spriteMove(tempSprite, 3, 4);
		dialogueSequencer();
	}
}

//Moves the dialogue to the next line
function dialogueSequencer() {
	locked = true;

	

	if(roomNum == 2) {
		PS.audioPlay("fx_click");
		if(dialogueLine == 0) {
			PS.statusColor(PS.COLOR_ORANGE);
			PS.statusText("Hello there... (Space to cont. dialogue)");
			dialogueLine += 1;
		}
		else if(dialogueLine == 1) {
			PS.statusText("I am here to warn you...");
			dialogueLine += 1;
		}
		else if(dialogueLine == 2) {
			PS.statusText("You need to be careful of...");
			dialogueLine += 1;
		}
		else if(dialogueLine == 3) {
			PS.statusColor(PS.COLOR_RED);
			PS.statusText("*Screams and dies*");
			dialogueLine += 1;
			PS.audioPlay("fx_blast1");
			PS.audioPlay("fx_wilhelm");
			PS.spriteSolidColor(tempSprite, PS.COLOR_RED);
		}
		else if(dialogueLine == 4) {
			PS.statusText("");
			dialogueLine = 0;
			locked = false;
			PS.spriteDelete(tempSprite);
		}
	}
	else if(roomNum == 6) {
		PS.audioPlay("fx_squawk");
		if(dialogueLine == 0) {
			PS.statusColor(PS.COLOR_GREEN);
			PS.statusText("*quack*");
			dialogueLine += 1;
		}
		else if(dialogueLine == 1) {
			PS.statusText("");
			dialogueLine = 0;
			locked = false;
			PS.spriteDelete(tempSprite);
		}
	}
}


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
