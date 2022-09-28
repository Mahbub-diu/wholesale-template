$('.requestto-stock-btn').click(function () {
  $(this).addClass('d-none');
  $(this).next().toggleClass('d-none');
});

$('.addtocart-btn').click(function () {
  $(this).addClass('d-none');
  $(this).next().toggleClass('d-none');
});

$('.addto-quote-btn').click(function () {
  $(this).addClass('d-none');
  $(this).next().toggleClass('d-none');
});

// home page hot sale counter start from here
var target_date = new Date().getTime() + 1000 * 3600 * 48; // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById('tiles'); // get tag element

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML =
    '<span>' +
    days +
    '</span><span>' +
    hours +
    '</span><span>' +
    minutes +
    '</span><span>' +
    seconds +
    '</span>';
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

// home page hot sale counter end here

// brand shop slider start from here
$('.brand-shop').slick({
  dots: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  arrows: true,
  infinite: true,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// brand shop slider end  here

// fruits-slider slider start from here
$('.fruits-slider').slick({
  dots: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  arrows: true,
  infinite: true,
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// fruits-slider slider end  here

// hotsale slider start from here
$('.hotsale-slider').slick({
  dots: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  arrows: true,
  infinite: true,
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// hotsale slider end  here

// popular product slider start from here
$('.popularproduct-slider').slick({
  dots: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  autoplay: true,
  arrows: true,
  infinite: true,
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// popular product slider end  here

// always offer slider from here
$('.always-offer-main').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// homepage main slider start from here
$('.homeslider-wrapper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  infinite: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$('.right-top-slider-wrapper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});

$('.right-bottom-slider-wrapper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});
$('.secondary-first-wraper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});
$('.secondary-second-wraper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});
$('.secondary-third-wraper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});
// homepage main slider end here

// sidebar related script start from here
document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('.sidebar .parent-link')
    .forEach(function (element) {
      element.addEventListener('click', function (e) {
        console.log(this);
        $(this).toggleClass('icon-rotate');
      });
    });
});

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('fulll-width');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
    element.addEventListener('click', function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains('show')) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector('.submenu.show');
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });
});
// DOMContentLoaded  end

// sidebar related script end here

// carrer page slider start from here
$('.main-slider-wrapper').slick({
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,
});
// carrer page slider end here
