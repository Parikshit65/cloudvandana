document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "logo.jpg",
        "premanandji.jpg",
        "GENESIS.jpg"
    ];
    
    let currentIndex = 0;
    const imageElement = document.getElementById("sliderImage");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    
    function updateImage() {
        imageElement.src = images[currentIndex];
    }
    
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    
    updateImage();
});
