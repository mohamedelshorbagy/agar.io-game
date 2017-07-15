/*
  
  # Mohamed Elshorbagy
  # 15 / 06 / 2017
  # Agar.io Game

 */

// Global Variables

var blob;

var food = [];

var blobSize = 56;

var foodSize = Math.floor(blobSize / 4);


var scl = 1;

var score = 0;


// Optional Feature ==> Press Space Key to Add More Food

// function keyPressed() {

// if(key == ' ') {
//   for(var i = 0 ; i < 20 ; i++) {
    
//   var randX2 = random(-width*2 , width*2);
//   var randY2 = random(-height*2 , height*2);

//     food.push(new Blob(randX2 , randY2 , foodSize,color(random(255) , 200 , 220)));

//   }


// }


// }


// Start of Setup Function 
function setup() {


createCanvas(600 , 600);
colorMode(HSB);

// Realtion Between Blob and Food Size ===> blobSize / 4 ===> foodSize



// Drawing the Main Blob
blob = new Blob(0 , 0 , blobSize,255);




// Making Foods ==> Put Blob Object in Food Array 

for(var i = 0 ; i < 500 ; i++) {

  var randX = random(-width*2 , width*2);
  var randY = random(-width*2 , width*2);

  food[i] = new Blob(randX , randY , foodSize,color(random(255) , 100 , 255));

}



}
// End of Setup Function 


// Start of Draw Function 
function draw() {
background(0);


// Priniting the Score
fill(255);
textSize(22);
text('Score : ' +  score , width /2 - 35 , 20);



// World Translation and Scaling


// Translating to Center of the Window
translate(width /2 , height /2);

// interpolating Scaling Factor

newScale = blobSize / blob.r;
scl = lerp(scl , newScale, 0.1);
scale(scl);


// To Make Sure Every Thing in World is Moving Related to Main Blob
translate(-blob.pos.x ,-blob.pos.y);






// To Add 100 Food if it food length array equals to 1 
if(food.length == 1) {
  for(var i = 0 ; i < 100 ; i++) {
    
  var randX2 = random(-width*2 , width*2);
  var randY2 = random(-height*2 , height*2);

    food.push(new Blob(randX2 , randY2 , foodSize,color(random(255) , 200 , 220)));

  }


}


// Drawing Food
for(var i = food.length - 1; i >= 0 ; i--) {
  food[i].show();

  // Eating the Food :D 
  // Increminting Score
  if(blob.eat(food[i])) {
    food.splice(i , 1);
    score++;
  }





}


// Main Blob Functions 
blob.show();
blob.update();


} 
// End of draw Function