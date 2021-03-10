// HIDE & SHOW

/* var menuDown = $(".fa-bars").click(function(){
    $(".hamburger-menu").show("slow");
});
var menuUp = $(".fa-times").click(function(){
    $(".hamburger-menu").hide("fast");
}); */


//ADDCLASS & REMOVECLASS

var menuDown = $(".fa-bars").click(function(){
    $(".hamburger-menu").addClass("active");
});

var menuDown = $(".fa-times").click(function(){
    $(".hamburger-menu").removeClass("active");
});