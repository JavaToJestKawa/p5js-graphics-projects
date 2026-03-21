function setup() {
  createCanvas(800, 600);
  noLoop();
}

//noprotect
function draw() {
  background(0);
  stroke(255);
  
  x1=300;
  y1=100;
  x2=x1/4;
  y2=height-y1;
  x3=x1+(x1-x2);
  y3=y2;
  
  // set(x1,y1);
  // set(x2,y2);
  // set(x3,y3);
  
  point(x1,y1);
  point(x2,y2);
  point(x3,y3);
  
  cx=x1;
  cy=y1;
  
  for(i=0; i<30000; i++){
    a=int(random(0,3));
    if(a==0){
      cx=(cx+x1)/2;
      cy=(cy+y1)/2;
      point(cx,cy);
    }
    else if(a==1){
      cx=(cx+x2)/2;
      cy=(cy+y2)/2;
      point(cx,cy);
    }
    else{
      cx=(cx+x3)/2;
      cy=(cy+y3)/2;
      point(cx,cy);
    }
  }
  
  updatePixels();
}
