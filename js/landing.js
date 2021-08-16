(function() {
  var circle = document.querySelector('#circle');
  var main = document.querySelector('#main');
  var h1Main = document.querySelector('#h1Main');
  var landh1 = document.querySelector('.landing-h1');
  var getColour;
  var section = document.querySelectorAll('.section');

  pageTransistion();


  function pageTransistion() {
    compressCircle();
    // Hover effect starts:::::::::::::::::::::::::::::::::::
    circle.addEventListener('mouseover', function() {
      expandPt1();
      initFullpage();
      expandPt2();
      document.body.style.overflowY = "visible!important";
    }, {
      once: true // so fullPage only initalizes once
    });


    // Compress page and before hover ::::::::::::::::::::::::::
    function compressCircle() {
      // Hide inner body so circle is clean
      $("#main").css("display", "none");
      // Shirnk elements before circle expands
      for (var i = 0; i < section.length; i++) {
        section[i].classList.add('shrink');
      }
    }

    // Bring back the body to normal on hover ::::::::::::::::::::::::::::::::
    function expandPt1() {
      // Get the current colour to display as back ground
      var getColour = window.getComputedStyle(circle, null)
        .getPropertyValue("background-color");
      circle.classList.remove('animation');
      circle.style.background = getColour;
      circle.classList.remove('circle');
      circle.classList.add('full-screen');
      circle.classList.add('clipy');
      // reveal the first section first
      section[0].classList.remove('shrink');
      $("#main").css("display", "block");

    }

    // initialize fullpage and help AOS fade ::::::::::::::::::::::::::
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
        afterRender: function() {
          setTimeout(function() {
            jQuery('.section [data-aos]').removeClass(
              "aos-animate");
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

      // Set mobile and scrolling images to same height as screenshot
      var screenshot1 = document.querySelector('#screenshot1');
      var screenshotHeight = window.getComputedStyle(screenshot1, null)
        .getPropertyValue("height");
      $('.screenshot-scroll').height(screenshotHeight);
      $('.mobile-img').height(screenshotHeight);
    }

    // Bring the remaining elements back to normal ::::::::::::::::::::::::::
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
  }
}());
