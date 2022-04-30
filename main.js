image_show = ""
function setup() 
{
  canvas= createCanvas(600,500)
  canvas.center()

}

function draw()
{
   image(image_show,0, 0, 500, 600);
}

function preload()
{
   image_show = loadImage("istockphoto-1199644391-612x612.jpg");
}