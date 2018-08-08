window.onload = function () {
    var target = $(".slide ul")
    var len = $(".slide li").length
    var pos = 0
    setInterval(function () {
        pos = (pos + 1) % len
        target.animate({
            marginLeft:-pos*100+"%"
        }, 1000)
    }, 2000)
}