// src/assets/js/plugins.js
export function initPlugins() {
  const $win = $(window);

  // Pre Loader
  $(".preloader").fadeOut(500).remove();

  // Mobile Menu
  $('.navbar-toggler').off("click").on('click', function() {
    $('.navbar-collapse').addClass('menu-opened');
  });
  $('.close-mobile-menu').off("click").on('click', function() {
    $('.navbar-collapse').removeClass('menu-opened');
  });

  // Sticky Navbar
  $win.off(".sticky").on('scroll.sticky', function() {
    const $stickyNavbar = $('.sticky-navbar');
    if ($win.scrollTop() > 150) {
      $stickyNavbar.addClass('is-sticky');
    } else {
      $stickyNavbar.removeClass('is-sticky');
    }
  });

  // ... (বাকিগুলোও একইভাবে move করবেন)
}
