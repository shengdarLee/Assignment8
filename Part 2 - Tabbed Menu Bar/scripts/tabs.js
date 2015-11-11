$(document).ready(function() {

    $("#tabs li:eq(0)").css("background-color", "white");
    $("#tabs div:gt(0)").hide();

    $("#tabs li").click(
        function (event) {
            $("#tabs li a").css("background-color", "silver");
            $(event.target).css("background-color", "white");
            $("#tabs div").hide();
            $($(event.target).attr("href")).show();
        });
})
