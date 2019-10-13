$(document).ready(function() {
    
    $('.header').height($(window).height());

    // Set the section height to full height
    console.log(window.innerHeight);
    $('.section').height(window.innerHeight);
    $('.section').css('padding', 30);

    // $('.section_content').css('height', '100%');
});