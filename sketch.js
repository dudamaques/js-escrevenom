function setup(){
    createcanvas(600,600);
    background("black");
}

function draw(){
    stroke("blue");
    fill("red");

if(mouseIsPressed){
    Reflect(mouseX, mouseY, 20, 35);
}

}


