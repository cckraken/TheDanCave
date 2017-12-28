/*File for JavaScript functions*/

/*Below 5 functions handle the mouseover events for the title pages. When the text is hovered over, a small image containing what is on the page is shown. Hidden when not hovered over*/

$(document).ready(function() {
    $(".personal a").mouseover(function () {
        $(".personal a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".personal a").mouseout(function () {
        $(".personal a img").css("display", "none"); // hide all product images
    })
});

$(document).ready(function() {
    $(".university a").mouseover(function () {
        $(".university a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".university a").mouseout(function () {
        $(".university a img").css("display", "none"); // hide all product images
    })
});

$(document).ready(function() {
    $(".dailypost a").mouseover(function () {
        $(".dailypost a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".dailypost a").mouseout(function () {
        $(".dailypost a img").css("display", "none"); // hide all product images
    })
});

$(document).ready(function() {
    $(".learningtidbits a").mouseover(function () {
        $(".learningtidbits a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".learningtidbits a").mouseout(function () {
        $(".learningtidbits a img").css("display", "none"); // hide all product images
    })
});

$(document).ready(function() {
    $(".music a").mouseover(function () {
        $(".music a img").css("display", "none"); // hide all product images
        $(this).find("img").css("display", "inline-block"); // show current hover image
    })
    $(".music a").mouseout(function () {
        $(".music a img").css("display", "none"); // hide all product images
    })
});