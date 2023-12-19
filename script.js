$(".to-pack-button").click(function() {
    var userin = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "**Im going to pack" + userin + "**");
});