canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width="120";
car1_height="70";
car1_image="car1.png";
car1_X="10";
car1_Y="10";

car2_width = "120";
car2_height = "70";
car2_image = "car2.png";
car2_X = "10";
car2_Y = "100";

background_img="racingbackground.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed)
        if (keyPressed == "38") {
        car1_up();
        console.log("up arrow key");
        }
        if (keyPressed == "40") {
            car1_down();
            console.log("down arrow key");
        }
        if (keyPressed == "37") {
            car1_left();
            console.log("left arrow key");
        }
        if (keyPressed == "39") {
            car1_right();
            console.log("right arrow key");
        }


        if (keyPressed == "87") {
            car2_up();
            console.log("key w");
        }
        if (keyPressed == "83") {
            car2_down();
            console.log("key s");
        }
        if (keyPressed == "65") {
            car2_right();
            console.log("key a");
        }
        if (keyPressed == "68") {
            car2_left();
            console.log("key d");
        }
}