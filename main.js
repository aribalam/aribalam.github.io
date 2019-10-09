$(document).ready(function() {
    
    $('.header').height($(window).height());

    // Set the section content height to full height
    console.log(window.innerHeight);
    $('.section_content').height(window.innerHeight);
    $('.section_content').css('padding', 30);
});