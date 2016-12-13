// Cache toute les sections à l'initialisation
$( document ).ready(function() {
    $('.mainaccro').hide();
    $('.mainanni').hide();
    $('.mainbist').hide();
    $('.mainev').hide();
    $('.mainskate').hide();
});

function onglet1() {

    $('.mainaccro').hide();
    $('.mainanni').hide();
    $('.mainbist').hide();
    $('.mainev').hide();
    $('.mainskate').hide();


    $( ".mainac" ).animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/style.css');
    });

}

function onglet2() {

    // On cache les sections non uttilisé
    $('.mainac').hide();
    $('.mainanni').hide();
    $('.mainbist').hide();
    $('.mainev').hide();
    $('.mainskate').hide();

    // Animation !
    $( ".mainaccro" ).animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/accrobranche.css');


    });
}

function onglet3() {

    // On cache les sections non uttilisé
    $('.mainac').hide();
    $('.mainanni').hide();
    $('.mainbist').hide();
    $('.mainev').hide();
    $('.mainaccro').hide();

    // Animation !
    $( ".mainskate" ).animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/skatepark.css');

    });
}

function onglet4() {

    // On cache les sections non uttilisé
    $('.mainac').hide();
    $('.mainanni').hide();
    $('.mainev').hide();
    $('.mainaccro').hide();
    $( ".mainskate" ).hide();

    // Animation !
    $( ".mainbist" ).animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/bistrot.css');

    });
}

function onglet5() {

    // On cache les sections non uttilisé
    $('.mainac').hide();
    $('.mainanni').hide();
    $('.mainaccro').hide();
    $( ".mainskate" ).hide();
    $( ".mainbist" ).hide();

    $('.mainev').animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/événement.css');

    });
}

function onglet6() {

    // On cache les sections non uttilisé
    $('.mainac').hide();

    $('.mainev').hide();
    $('.mainaccro').hide();
    $( ".mainskate" ).hide();
    $( ".mainbist" ).hide();

    $('.mainanni').animate({
        width: [ "show", "linear" ]

    }, 1500, function() {
        // Animation complete.
        $('link').attr('href','./css/anniversaire.css');

    });
}