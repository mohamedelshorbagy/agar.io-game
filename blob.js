function Blob(x , y , r,c) {
 this.pos = createVector(x , y);
 this.r = r;
 this.vel = createVector(0,0);
 if(c) {
    this.color = c;
 } else {
    this.color = 255;

 }
 // Function of the Contructor Function 

 this.show = function() {

    fill(this.color);
    noStroke();
    ellipse(this.pos.x , this.pos.y , this.r*2 , this.r*2);

 }


 this.update = function() { 
    var newVel = createVector(mouseX-width/2, mouseY-height/2);
    newVel.setMag(3);
    this.vel.lerp(newVel , 0.2);
    this.pos.add(this.vel);
 }


// Eating Food Function
 this.eat = function(single) {
    var d = p5.Vector.dist(this.pos , single.pos);
    if(d < this.r + single.r) {
        // Calculating the Area of Two blobs
        var sum = this.r * this.r * PI + single.r * single.r * PI;
        var total = sqrt(sum / PI);
        this.r = total;
        return true;
    } else {
        return false;
    }




 }





}