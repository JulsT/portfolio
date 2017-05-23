/**
 * Created by Yolka on 23.05.2017.
 */
// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(function () {
    if ($(window).scrollTop()> 1500) {
        $("#myBtn").fadeIn(500);
    } else {
        $("#myBtn").fadeOut(500);
    }
});


// When the user clicks on the button, scroll to the top of the document
$("#myBtn").click(function() {
    $(window).scrollTop(0);
});

