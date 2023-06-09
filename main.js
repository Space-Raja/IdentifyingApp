//img="";
status="";
objects=[];
model="";
capture="";
videeo="";

/*
let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture({
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }
  });
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
}

function draw() {
  background(0);
  image(capture, 0, 0, width, height);
}


*/

function preload(){
   // img = loadImage("dog_cat.jpg");
}

function setup(){
    

        canvas = createCanvas(windowWidth, windowHeight);
        capture = createCapture({
          audio: false,
          videeo: {
            facingMode: {
              exact: "environment"
            }
          }
        });
        capture.elt.setAttribute('playsinline', '');

        model = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Started detecting";




    
}


function modelLoaded(){
    console.log("Model loaded!!!!");
    status = true;
   
}

function gotResult(error, results){
    if(error){
        console.error(error);

    }
    else{
        console.log(results);
        objects=results;


    }
}

function draw(){
 //   image(img,0,0,700,500);

    if(status!=""){
 r = random(255);
 g = random(255);
 b = random(255);
 
    model.detect(capture, gotResult);
 
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML="Detection complete";

       
        fill(r,g,b);
        stroke(r,g,b);
percent = Math.floor(objects[i].confidence * 100);

        text(objects[i].label+" "+percent+" %",objects[i].x+10, objects[i].y+20);
        noFill();
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        
    }
       
    
        }
   
}
