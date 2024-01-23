let arrIndex = 1;
display(arrIndex)
function nextElem(n){
    display(arrIndex += n)
}

function currentElem(n){
    display(arrIndex = n)
}
function display(n){
    let pictureElem = document.getElementsByClassName("..");
    let dots = document.getElementsByClassName("dot");

    if(n > pictureElem.length){arrIndex = 1};
    if (n < 1){arrIndex = pictureElem.length}
    for (let i = 0; i < pictureElem.length; i++){
        arrIndex[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }
    pictureElem[arrIndex - 1].style.display = "block";
    dots[arrIndex-1].className = " active"
}