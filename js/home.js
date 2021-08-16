(function() {
  // 'use strict';

  // make refresh go to home to avoid glitch
  window.location.replace('#home2');
  document.body.style.overflowY = "visible";
console.log(window.location.pathname);
  // initialze aos for fade effects
  AOS.init();

  var circle = document.querySelector('#circle');
  var main = document.querySelector('#main');
  var h1Main = document.querySelector('#h1Main');
  var landh1 = document.querySelector('.landing-h1');
  var getColour;
  var section = document.querySelectorAll('.section');
  var num1 = document.querySelector('#num1');
  var getArrows = 2; // placeholder value to prevent error

  expandPt1();
  initFullpage();
  expandPt2();
  setScreenshotHeight()

// Set heights for scrolling containers and mobile screenshots
function setScreenshotHeight(){
  var screenshot1 = document.querySelector('#screenshot1');
  var screenshotHeight = window.getComputedStyle(screenshot1, null)
    .getPropertyValue("height");
  var screenshotContainer = document.querySelectorAll(
    '.screenshotContainer');

  $('.screenshot-scroll').height(screenshotHeight);
  $('.mobile-img').height(screenshotHeight);
}

  function expandPt1() {
    // Get the current colour to display as back ground
    var getColour = window.getComputedStyle(circle, null)
      .getPropertyValue("background-color");
    circle.classList.remove('animation');
    circle.style.background = getColour;
    circle.classList.remove('circle');
    circle.classList.add('full-screen');
    circle.classList.add('clipy');
    section[0].classList.remove('shrink');
    $("#main").css("display", "block");
    // reveal the first section first
  }

  // initialize fullpage and hide arrows temporarily ::::::::::::::::::::::::::
  function initFullpage() {
    // initialze fullpage js
    $('#fullPage').fullpage({
      autoscrolling: true,
      navigation: false,
      anchors: ['section1', 'section2', 'section3', 'section4'],
      scrollingSpeed: 700,
      controlArrows: false,
      slidesNavigation: false,
      normalScrollElements: '.screenshot-scroll',
      setAllowScrolling: false,
      scrollBar: false,
      responsiveWidth: 800,
      // afterRender: AOS.init(),
      afterRender: function() {
        setTimeout(function() {
          jQuery('.section [data-aos]').removeClass("aos-animate");
        }, 300);
      },
      onSlideLeave: function() {
        setTimeout(function() {
          jQuery('.slide [data-aos]').removeClass("aos-animate");
        }, 300);
      },
      afterSlideLoad: function() {
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
      },
      afterLoad: function() {
        jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
      }
    });
  };

  // Bring the remaining elements back to normal ::::::::::::::::::::::::::::::
  function expandPt2() {
    setTimeout(function() {
      // set colour so page fades to black
      circle.style.background = '#232428';
      // rezize remaining sections
      section[1].classList.remove('shrink');
      section[2].classList.remove('shrink');
      section[3].classList.remove('shrink');
      // Hide landing header
      landh1.style.display = 'none';
    }, 1000); // set timeout ends
  }

  // Modals ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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
  $('.closeOops').click(function(){
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
