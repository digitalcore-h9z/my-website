document.addEventListener("DOMContentLoaded", function () {
    // Get the video element
    var video = document.getElementById("introVideo");

    // Get the content element to hide
    var content = document.querySelector(".content");

    // Play the video
    video.play();

    // Add an event listener for when the video ends
    video.addEventListener("ended", function () {
        // Smoothly fade out the video
        fadeOut(video);
    });

    function fadeOut(element) {
        var opacity = 1;
        var fadeInterval = setInterval(function () {
            if (opacity <= 0.01) {
                clearInterval(fadeInterval);
                element.style.display = "none"; // Hide the video after fading out
                // Show the content after the video is done
                content.style.transition = "opacity 1s ease-in-out";
                content.style.opacity = 1;
            } else {
                opacity -= 0.01;
                element.style.opacity = opacity;
                // Hide the content while fading out the video
                content.style.opacity = opacity;
            }
        }, 10); // Adjust the interval for smoother or faster fade-out
    }
});
