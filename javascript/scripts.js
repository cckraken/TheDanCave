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

/*This script changes the content on the university page depending on the current dropdown menu selection*/

$(document).ready(function() {

  $(".menu").click(function() {
   var selectedContainerId = $(this).attr("data-target");
	
   //show the selected container
   var selectedContainer = $(selectedContainerId);
   selectedContainer.show();
 
   //hide others
   $('div[id*="container_"]').not(selectedContainer).hide();
 
  });
});

/*Google maps for DMU*/
function initMap() {
  let dmu = {lat: 52.629780, lng: -1.139370};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: dmu
  });

  // these set different markers you want to show on your map
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
  });
  google.maps.event.addListener(map, "idle", function(){
  google.maps.event.trigger(map, 'resize'); 
  
});
$(document).ready(function(){
  setTimeout(initMap, 1000);
});
 
}

/*JSON*/

