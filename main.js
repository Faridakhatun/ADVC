var mouseEvent = "Empty";
color="Red";
width_of_line="2";

Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - Canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - Canvas.offsetTop;

    if (mouseEvent =="mouseDown") {
        console.log("Current position of x and y coordinates=");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
 function Clear_area(){
     ctx.clearRect(0,0,Canvas.width, Canvas.height);
 }
