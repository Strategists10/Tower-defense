var tiles = [];
var map1 = [];
var map1Set = [];
function preload(){
	//Loading the tiles 
	for(var k = 1; k < 8; k++){
		tiles[k] = loadImage("assets/tiles/tile" + k + ".gif");
	}
	map1 = loadStrings("assets/maps/map1.txt");
}
function drawMap(){
	for(var i = 0; i < 17; i++){
		map1Set = map1[i].split(" ");
		for(var j = 0; j < 17; j++){
			if(map1Set[j]>0){
				image(tiles[map1Set[j]], j*46, i*46);
			}
		}
	}
}


function setup(){
	createCanvas(1182,782);
	
}
function draw(){
	background(25);
	drawMap();
}