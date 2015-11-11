$(document).ready(function() {
	// create an array of the slide images
	var image, imageCounter = 0, imageCache = [];
	$("#slides img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
   	});
	
	// start slide show
	var nextImage;
    $("#links").click(
        function (event) {
            event.preventDefault();
            $("#links a").css("color", "blue");
            $(event.target).css("color", "red");
            imageCounter = eval($(event.target).html()) - 1;
        	$("#caption").hide;
        	$("#slide").hide; 
            nextImage = imageCache[imageCounter];
            $("#slide").attr("src", nextImage.src).show;
            $("#caption").text(nextImage.title).show;
        });
})
