function preload(){

}

function setup(){
    canvas = createCanvas(800, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.show();
    video.position(190, 305);
    

    

}

function draw() {
    image(video, 0, 0, 640, 480);
    
    circle(40, 40, 80);
    circle(760, 40, 80);
    circle(760, 560, 80);
    circle(40, 560, 80);
    tint(tint_colour);
    
}

function take_snapshot(){
    save('picture.png');
}



