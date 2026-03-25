function setup() {
  createCanvas(800,600);
  noLoop(); //obraz
  // frameRate(25); //animacja
}
 
//noprotect
function draw() {
  // niebo
  background(200,200,225);

  // trawa
  for(y=height*2/3; y<height; y++){
    for(x=0; x<width; x++){
      set(x,y,color(0,100,0));
    }
  }

  // kwiaty
  for(i=0; i<1000; i++){
    x=random(0, width);
    y=random(height*2/3, height);
    c1=random(0,255);
    c2=random(0,255);
    c3=random(0,255);
    set(x,y,color(c1,c2,c3));
  }

  // fasada
  for(y=height*1/3; y<height*2/3; y++){
    for(x=width*1/4; x<width*3/4; x++){
      set(x,y,color(99,50,30));
    }
  }

  // dach
  for(y=height*1/15; y<height*1/3; y++){
    y_div=(y-(height*1/15))/(height*(1/3-1/15))
    x1=width/2-(width*3/8)*y_div;
    x2=width/2+(width*3/8)*y_div;
    for(x=x1; x<x2; x++){
      set(x,y,color(254,100,100));
      // Ponieważ wymiary są parzyste, a powyższe wartości są zaokrąglane do int
      // set(-x-1,y+1,color(254,100,100));
    }
  }
  
  updatePixels();
}
