$(function () {
    console.log('ready');
    $('#fullpage').fullpage({
      anchors:['home', 'articles'],
      slidesNavigation: true,
      slidesNavPosition: 'top',
      scrollOverflow: true,
    });

    $('.mobile-nav-toggle').click(function () {
      console.log('clicked');
      toggleMenu();
    });


    $('div.navbar-bg').click(function () {
      toggleMenu();
    });

    $('ul.navbar li').click(function () {
      toggleMenu();
    });


    function toggleMenu() {
      $('ul.navbar').toggleClass('open');
      $('div.navbar-bg').toggleClass('open');

      var txt = $('.mobile-nav-toggle i').text();
      $('.mobile-nav-toggle i').text((txt === 'menu') ? 'close' : 'menu');
    }

});
