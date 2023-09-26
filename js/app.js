$().ready(function () {
  $(".es-products-slick").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="/img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="/img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".es-feedback-slick").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="/img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="/img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".es-main-brands-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="/img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="/img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".es-years-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    centerPadding: 0,
    asNavFor: ".es-history-slider",
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="/img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="/img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          adaptiveHeight: true,
          centerMode: true,
          variableWidth: true,
          variableHeight: true,
          arrows: true,
        },
      },
    ],
  });

  $(".es-history-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerPadding: 0,
    asNavFor: ".es-years-slider",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          adaptiveHeight: true,
          centerMode: true,
        },
      },
    ],
  });

  $(".es-years-slider").slick("slickGoTo", 2);

  $(".es-partners-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick-prev slick-arrow slick-white-arrow" aria-label="Previous" type="button"><img src="../img/ic_slick_blue_left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow slick-white-arrow" aria-label="Next" type="button"><img src="../img/ic_slick_blue_right.svg"/></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".es-achivements-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: .78,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".employees-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="/img/ic_slider-left.svg"/></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="/img/ic_slider-right.svg"/></button>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  let t = $("#back-top");
  $(window).on("scroll", function () {
    ($scrollTop = $(window).scrollTop()),
      (t = $("#back-top")),
      $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

    $scrollTop > 0
      ? $(".es-navbar").addClass("es-navbar-fixed")
      : $(".es-navbar").removeClass("es-navbar-fixed");
  });
  ($htmlBody = $("html, body")),
    t.length &&
      t.on("click", function (t) {
        $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
      });

  // Plugins
  $("input[data-plugin='phone-mask']").inputmask({
    mask: "+\\9\\9\\8 99 999-99-99",
  });
  $("input[data-plugin='birthday-mask']").inputmask({ mask: "99.99.9999" });
});
