function imgSlider(image)
{
    document.querySelector('.starbuck').src = image;
    if(image == "images/img2.png")
    {
        document.querySelector('.starbuck').style.width = 400 + "px";
    }
    
}

function changeColorCircle(color)
{
    const circle = document.querySelector('.circle')
    circle.style.background = color
}