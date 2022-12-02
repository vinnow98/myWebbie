let imageTracker = "i"
function imageChange() {

    var image = document.getElementById("lightmode")
    if (imageTracker == "i") {
        image.src = "resources/lightOn.png"
        imageTracker = "I"
    } else {
        image.src = "resources/lightOff.png"
        imageTracker = "i"
    }
}