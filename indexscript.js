// Fuktion til at åbne/lukke nav
function toggleNav(){
    // Hvis nav er åben, luk den
    if ($("nav").is(":visible")){
        $("nav").fadeOut();
        $("button").removeClass("menu");
    }
    // Hvis nav er lukket, åben den
    else {
        $("button").addClass("menu");
        $("nav").fadeIn().css('display', 'flex');
    }
}

// Når man trykker på "+" eller "☰" knappen
$("button").click(function() {
    //Når man trykker på "☰" åbner nav
    if ($("header").hasClass("open")) {
        toggleNav();
    }
    // når man trykker på "+" knappen, åben header
    else {
        $("header").addClass("open");
    }
});

// Lukke nav
$("nav-close").click(function(){
    toggleNav();
});

// Scroll til sektioner
$("nav li").click(function(){
    // Få den index af den valgde li og valg af korrekte section
    var index = $(this).index();
    var target = $("content section").eq(index);

    toggleNav();

    $('html, body').delay(300).animate({
        scrollTop: target.offset().top
    }, 500);
});