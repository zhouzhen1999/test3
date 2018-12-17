require(["./js/main.js"], function() {
    require(["jquery"], function($) {
        $("#location").on("touchstart", function() {
            location.href = "../../page/location.html"
        })
    })
})