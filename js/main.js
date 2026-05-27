$(document).ready(function () {
  //navigation
  const $body = $('body'),
    $closeMobileNavIcon = $('#close-mobile-nav-icon'),
    $openMobileNavIcon = $('#open-mobile-nav-icon'),
    $mobileNav = $('#mobile-nav')

  function openNav() {
    $body.addClass('body--mobile-nav-open')
    $openMobileNavIcon.removeClass('is-visible')
    $closeMobileNavIcon.addClass('is-visible')
    $mobileNav.addClass('is-visible')
    $mobileNav.addClass('is-faded-in')
  }

  function closeNav() {
    $openMobileNavIcon.addClass('is-visible')
    $closeMobileNavIcon.removeClass('is-visible')
    $mobileNav.removeClass('is-faded-in')
    setTimeout(function () {
      $body.removeClass('body--mobile-nav-open')
      $mobileNav.removeClass('is-visible')
    }, 400)
  }

  $('#open-mobile-nav').on('click', function () {
    if ($openMobileNavIcon.hasClass('is-visible')) {
      openNav()
    } else {
      closeNav()
    }
  })

  $('.header__nav-item-link, .header__mobile-nav-item-link').on(
    'click',
    function (e) {
      e.preventDefault()
      closeNav()
      const href = $(this).attr('href')
      $('html, body').animate({ scrollTop: $(href).offset().top }, 400)
    },
  )

  //close mobile nav when window is resized to desktop width
  const mediaQuery = window.matchMedia('(min-width: 768px)')

  function handleTabletChange(e) {
    if (e.matches) {
      closeNav()
    }
  }

  mediaQuery.addEventListener('change', handleTabletChange)
  handleTabletChange(mediaQuery)

  $('#five-ways__slider').slick({
    infinite: false,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
  })

  //accordian
  $('.accordian').on('click', '.accordian__title', function () {
    $(this)
      .toggleClass('accordian__title--open')
      .next('.accordian__content')
      .slideToggle(200)
  })
})
