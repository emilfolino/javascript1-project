(function () {
    "use strict";

    var countdown = document.getElementById("countdown");

    window.setTimeout(function () {
        countdown.innerHTML = "Done counting down";
    }, 5000);
})();
