console.log("créé par : BORNET Floryan");

AOS.init();

var chevronContainer = document.querySelector(".chevron");

var sectionCible = document.getElementById("down");

chevronContainer.addEventListener("click", function() {

    sectionCible.scrollIntoView();
});


function smoothScroll(target) {
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 570; 
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

        function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


const chevron = document.querySelector(".chevron")

if (navigator.userAgent.includes("Firefox")) {
    chevron.classList.add("active")
}
else {
    chevron.classList.remove("active")
}