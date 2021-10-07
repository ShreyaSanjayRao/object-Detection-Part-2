img="";
status1="";
function setup() {
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status detecting objects";              
}
function draw(){
image(img ,0,0,640,420);
fill("#f013e8");
text("Dog",45,75);
stroke("#eb3455");
noFill();
rect(30,60,450,360);
fill("#d6117e");
text("Cat",420,178);
stroke("#11d6a8");
noFill();
rect(290,80,260,280);
}
function preload(){
img=loadImage("dog_cat.jpg");
}
function modelLoaded() {
    console.log("modelLoaded");
    status1=true;
    objectDetector.detect(img,gotResult);
}
function gotResult( error,results) {
if (error){
    console.log(error);
}
console.log(results);

}