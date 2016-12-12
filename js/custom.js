/// Apparition des horaires lors du passage du curseur sur l'icône Info
$(function(){
  $('#horaire').hide();
  $('#infohoraire').hover(function(){
    $('#horaire').fadeIn();
  }, function(){
    $('#horaire').fadeOut();
  });
 });

//Toggle acceuil
// $(function chngmain(){
//  function runEffect(){
//    $('link').attr('href', 'css/accrobranche.css');
//  };

//  $('#accrobranche').on("click", function(){
//    $('main').effect("drop");
//    $('main').toggle("slow");
//    runEffect();
//  });
// });


// $(function test(){
//   //démarrage de la séléction de l'effectsTypes
//   function runEffect(){
//     //changement de css
//     $('link').attr('href','css/style.css');
//   };
//
//   //Attacher l'effet à la nav
//   $('#acceuil').on("click", function(){
//     runEffect();
//   });
// });
//
// //Toggle Accrobranche
// //Slider main, utilisation de la fonction toggle(), Drop.
// $(function(){
//   //démarrage de la séléction de l'effectsTypes
//   function runEffect(){
//     //changement de css
//     $('link').attr('href','css/accrobranche.css');
//   };
//
//   //Attacher l'effet à la nav
//   $('#accrobranche').on("click", function(){
//     runEffect();
//   });
// });

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

    $('.mainac').effect('drop');
    $('.mainac').fadeIn();

    $('link').attr('href','./css/style.css');


}

function onglet2() {

    $('.mainac').hide();
    $('.mainanni').hide();
    $('.mainbist').hide();
    $('.mainev').hide();
    $('.mainskate').hide();

    $('.mainaccro').effect('drop');
    $('.mainaccro').fadeIn();
    $('link').attr('href','./css/accrobranche.css');
}

function onglet3() {

  $('.mainac').hide();
  $('.mainanni').hide();
  $('.mainbist').hide();
  $('.mainev').hide();
  $('.mainaccro').hide();

  $('.mainskate').effect('drop');
  $('.mainskate').fadeIn();
    $('link').attr('href','./css/skatepark.css');


}

function switchNav