$('.requestto-stock-btn').click(function () {
  $(this).parent().toggleClass('d-none');

  $(this).parent().next().toggleClass('d-none');
  setTimeout(() => {
    $(this).parent().toggleClass('d-none');
    $(this).parent().next().toggleClass('d-none');
  }, 5000);
});

$('.addtocart-btn').click(function () {
  $(this).parent().toggleClass('d-none');

  $(this).parent().next().toggleClass('d-none');
  setTimeout(() => {
    $(this).parent().toggleClass('d-none');
    $(this).parent().next().toggleClass('d-none');
  }, 5000);
});

$('.addto-quote-btn').click(function () {
  $(this).parent().toggleClass('d-none');
  $(this).parent().next().toggleClass('d-none');
  setTimeout(() => {
    $(this).parent().toggleClass('d-none');
    $(this).parent().next().toggleClass('d-none');
  }, 5000);
});

// brand shop slider start from here
$('.brand-shop').slick({
  dots: true,
  infinite: false,
  slidesToShow: 5,
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
  slidesToShow: 5,
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
  slidesToShow: 5,
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
  slidesToShow: 5,
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
  slidesToShow: 5,
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
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  infinite: true,

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
// homepage main slider end here

// sidebar related script start from here
document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('.sidebar .parent-link')
    .forEach(function (element) {
      element.addEventListener('click', function (e) {
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
      let nextEl = element.parentElementSibling;
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

// feature department slider for home page

$('.fd-wrapper').slick({
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 2,
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
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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

// testimonial slider start from here
$('.testimonial-wrapper').slick({
  dots: false,
  infinite: false,
  slidesToShow: 3,
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
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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

function incrementValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}
function decrementValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  if (value <= 1) {
    return false;
  }
  value = isNaN(value) ? 0 : value;
  value--;

  document.getElementById('number').value = value;
}
$('.recipe-sm-slider-wrapper').slick({
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 2,
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
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
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
