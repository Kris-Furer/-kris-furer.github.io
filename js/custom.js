(function() {
  // make refresh go to home automatically opened landing
  window.location.replace('#home2');


  AOS.init();

  //:::::::::::::::::::::::: Modals ::::::::::::::::::::::::::::::::::::::::

  // Mobile menu::::::::::::::::::::::::::::::::::::::::::::::::::::
  var mobOverlay = document.querySelector('.mob-overlay');
  var mobMenu = document.querySelector('.fa-bars');

  mobMenu.onclick = function() {
    $('.mob-overlay').fadeIn();
  };
  $('.fa-close').click(function() {
    $('.mob-overlay').fadeOut();
  });

  $('.closeModal').click(function() {
    $('.modalContainer').fadeOut();
    $('.modal').fadeOut();
  });
  $('.modalContainer').click(function() {
    $('.modalContainer').fadeOut();
    $('.modal').fadeOut();
  });

  // Contact Modal ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  var contactBtn = document.querySelectorAll('.contact')
  for (var i = 0; i < contactBtn.length; i++) {
    contactBtn[i].onclick = function() {
      $('.contactContainer').css('display', 'block');
      $('.contactModal').css('display', 'flex');
    }
  }
  // close contact
  $('.closeContact').click(function() {
    $('.contactModal').fadeOut();
    $('.contactContainer').fadeOut();
  });
  $('.contactContainer').click(function() {
    $('.contactContainer').fadeOut();
    $('.contactModal').fadeOut();
  });

  // Close Oops
  $('.closeOops').click(function() {
    $('.oops-container').fadeOut()
    $('.oops').fadeOut()
  })


  // Custom Slide Controls ::::::::::::::::::::::::::::::::::::::::::::::::::
  var customLeft = document.querySelectorAll('.customLeft');
  var customRight = document.querySelectorAll('.customRight');

  for (var i = 0; i < customLeft.length; i++) {
    $(customLeft).click(function() {
      $.fn.fullpage.moveSlideLeft();
    });
  }
  for (var i = 0; i < customRight.length; i++) {
    $(customRight).click(function() {
      $.fn.fullpage.moveSlideRight();
    });
  }
}()); // iife ends
