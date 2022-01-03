var points = [];

function setup() {
  createCanvas(360, 780);
  frameRate(1);
 
  var density = 10;
  var space = width / density;
  
  for (var x = 0; x < width; x += space){
    for (var y = 0; y < height; y += space){
      if (x != 0 && y != 0) {
          var p = createVector(x, y);
          points.push(p);
          }
    }
  }
}

function draw() {
  background(0, 255, 191, 1);

  
  for (var i = 0; i < points.length; i++){
    let xr = random(-10, 10);
    let yr = random(-10, 10);
    line(points[i].x, points[i].y, points[i].x + xr, points[i].y + yr);
  }
}