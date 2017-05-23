/**
 * Created by Yolka on 10.05.2017.
 */
$(function () {
    $('._hamburger').click(function () {
        $('.responsive-menu').toggleClass('expand')
    });
});

/**
 * Created by Yolka on 23.05.2017.
 */
$('#contactMe').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);// Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient)
});

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


/**
 * Created by Yolka on 10.05.2017.
 */
$(document).ready(function(){
    $('.slides-container').slick({
        autoplay:true,
        autoplaySpeed:1000,
        dots: true,
        swipe: true
    })
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZGFsLmpzIiwic2Nyb2xsVG9Ub3AuanMiLCJzbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBZb2xrYSBvbiAxMC4wNS4yMDE3LlxyXG4gKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuX2hhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcucmVzcG9uc2l2ZS1tZW51JykudG9nZ2xlQ2xhc3MoJ2V4cGFuZCcpXHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFlvbGthIG9uIDIzLjA1LjIwMTcuXHJcbiAqL1xyXG4kKCcjY29udGFjdE1lJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBidXR0b24gPSAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpOy8vIEJ1dHRvbiB0aGF0IHRyaWdnZXJlZCB0aGUgbW9kYWxcclxuICAgIHZhciByZWNpcGllbnQgPSBidXR0b24uZGF0YSgnd2hhdGV2ZXInKTsgLy8gRXh0cmFjdCBpbmZvIGZyb20gZGF0YS0qIGF0dHJpYnV0ZXNcclxuICAgIC8vIElmIG5lY2Vzc2FyeSwgeW91IGNvdWxkIGluaXRpYXRlIGFuIEFKQVggcmVxdWVzdCBoZXJlIChhbmQgdGhlbiBkbyB0aGUgdXBkYXRpbmcgaW4gYSBjYWxsYmFjaykuXHJcbiAgICAvLyBVcGRhdGUgdGhlIG1vZGFsJ3MgY29udGVudC4gV2UnbGwgdXNlIGpRdWVyeSBoZXJlLCBidXQgeW91IGNvdWxkIHVzZSBhIGRhdGEgYmluZGluZyBsaWJyYXJ5IG9yIG90aGVyIG1ldGhvZHMgaW5zdGVhZC5cclxuICAgIHZhciBtb2RhbCA9ICQodGhpcyk7XHJcbiAgICBtb2RhbC5maW5kKCcubW9kYWwtdGl0bGUnKS50ZXh0KCdOZXcgbWVzc2FnZSB0byAnICsgcmVjaXBpZW50KTtcclxuICAgIG1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5IGlucHV0JykudmFsKHJlY2lwaWVudClcclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFlvbGthIG9uIDIzLjA1LjIwMTcuXHJcbiAqL1xyXG4vLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biAyMHB4IGZyb20gdGhlIHRvcCBvZiB0aGUgZG9jdW1lbnQsIHNob3cgdGhlIGJ1dHRvblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCk+IDE1MDApIHtcclxuICAgICAgICAkKFwiI215QnRuXCIpLmZhZGVJbig1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI215QnRuXCIpLmZhZGVPdXQoNTAwKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGJ1dHRvbiwgc2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIGRvY3VtZW50XHJcbiQoXCIjbXlCdG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKDApO1xyXG59KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFlvbGthIG9uIDEwLjA1LjIwMTcuXHJcbiAqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgJCgnLnNsaWRlcy1jb250YWluZXInKS5zbGljayh7XHJcbiAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcclxuICAgICAgICBhdXRvcGxheVNwZWVkOjEwMDAsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBzd2lwZTogdHJ1ZVxyXG4gICAgfSlcclxufSk7Il19
