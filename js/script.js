



/*карусель*/
document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left - 420;
    if (left < - 1680) {
        left = 0;
    }
        polosa.style.left = left +'px';
};




document.getElementById('slider-right').onclick = sliderRight;
var right = 0;
function sliderRight() {
    var polosa = document.getElementById('polosa');
   left = left + 420;
    if (left == 0) {
        left = -1680;
    }
    if (left == 420) {
        left = -1680;
    }
   
    polosa.style.left = left +'px';
   };



/*Галарея "Науковці"*/
jQuery(document).ready(function ($) {


  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');

        });
    };

    $('a.control_prev').click(function () {
        event.preventDefault();
        moveLeft();
    });

    $('a.control_next').click(function () {
        event.preventDefault();
        moveRight();
    });

});    



/*При нажатті на кнопку плавне переміщення на початок сторінки*/


var limit     = $(window).height()/3,
    $backToTop = $('#back-to-top');
 
$(window).scroll(function () {
    if ( $(this).scrollTop() > limit ) {
     $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});
 
// scroll body to 0px on click
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});





//var flex = document.getElementsByClassName('flex-slider').style.display = "none";

//jQuery(document).ready(function ($) {
  
  //$(".flex-slider").css("display","none");




//});

   