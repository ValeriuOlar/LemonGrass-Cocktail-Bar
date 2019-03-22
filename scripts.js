/* Select a class on click event litle corner bar */
$('.menu').on('click', function () {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');
});
/* to add more functions */