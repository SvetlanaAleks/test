import slick from "../libs/slick.min";
// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
const Sliders = (function () {
  "use strict";
  const authorsSlider = $(".js-authors-slider");
  const reviewsSlider = $(".js-reviews-slider");
  const btnReview = $(".js-btn-review");
  return {
    initAuthorsSlider: function () {
      authorsSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: "linear",
        dots: true,
        dotsClass: "authors__dots slick-dots",
        adaptiveHeight: true,
        prevArrow:
          '<button class="prev"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939805 10.9181C0.353768 11.5037 0.353362 12.4534 0.938898 13.0395L10.4808 22.5895C11.0663 23.1755 12.016 23.1759 12.6021 22.5904C13.1881 22.0048 13.1885 21.0551 12.603 20.4691L4.12133 11.9802L12.6102 3.4985C13.1963 2.91297 13.1967 1.96322 12.6112 1.37718C12.0256 0.791147 11.0759 0.790741 10.4898 1.37628L0.939805 10.9181ZM99.0006 10.5208L2.00065 10.4792L1.99937 13.4792L98.9994 13.5208L99.0006 10.5208Z" fill="url(#paint0_linear_656_6)"/><defs><linearGradient id="paint0_linear_656_6" x1="109.219" y1="12.6085" x2="108.241" y2="0.976584" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
        nextArrow:
          '<button class="next"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.0607 13.0607C98.6464 12.4749 98.6464 11.5251 98.0607 10.9393L88.5147 1.3934C87.9289 0.807611 86.9792 0.807611 86.3934 1.3934C85.8076 1.97919 85.8076 2.92893 86.3934 3.51472L94.8787 12L86.3934 20.4853C85.8076 21.0711 85.8076 22.0208 86.3934 22.6066C86.9792 23.1924 87.9289 23.1924 88.5147 22.6066L98.0607 13.0607ZM0 13.5H97V10.5H0V13.5Z" fill="url(#paint0_linear_422_192)"/><defs><linearGradient id="paint0_linear_422_192" x1="-10.2196" y1="11.4167" x2="-9.23595" y2="23.0481" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
        responsive: [
          {
            breakpoint: 640,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
            },
          },
        ],
      });
    },
    initReviewsSlider: function () {
      reviewsSlider.not(".slick-initialized").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        dotsClass: "reviews__dots slick-dots",
        centerMode: true,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1330,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
              arrows: true,
              dots: true,
              variableWidth: false,
              prevArrow:
                '<button class="prev"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939805 10.9181C0.353768 11.5037 0.353362 12.4534 0.938898 13.0395L10.4808 22.5895C11.0663 23.1755 12.016 23.1759 12.6021 22.5904C13.1881 22.0048 13.1885 21.0551 12.603 20.4691L4.12133 11.9802L12.6102 3.4985C13.1963 2.91297 13.1967 1.96322 12.6112 1.37718C12.0256 0.791147 11.0759 0.790741 10.4898 1.37628L0.939805 10.9181ZM99.0006 10.5208L2.00065 10.4792L1.99937 13.4792L98.9994 13.5208L99.0006 10.5208Z" fill="url(#paint0_linear_656_6)"/><defs><linearGradient id="paint0_linear_656_6" x1="109.219" y1="12.6085" x2="108.241" y2="0.976584" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
              nextArrow:
                '<button class="next"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.0607 13.0607C98.6464 12.4749 98.6464 11.5251 98.0607 10.9393L88.5147 1.3934C87.9289 0.807611 86.9792 0.807611 86.3934 1.3934C85.8076 1.97919 85.8076 2.92893 86.3934 3.51472L94.8787 12L86.3934 20.4853C85.8076 21.0711 85.8076 22.0208 86.3934 22.6066C86.9792 23.1924 87.9289 23.1924 88.5147 22.6066L98.0607 13.0607ZM0 13.5H97V10.5H0V13.5Z" fill="url(#paint0_linear_422_192)"/><defs><linearGradient id="paint0_linear_422_192" x1="-10.2196" y1="11.4167" x2="-9.23595" y2="23.0481" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
            },
          },
          {
            breakpoint: 1220,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
              arrows: true,
              dots: true,
              variableWidth: false,
              prevArrow:
                '<button class="prev"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939805 10.9181C0.353768 11.5037 0.353362 12.4534 0.938898 13.0395L10.4808 22.5895C11.0663 23.1755 12.016 23.1759 12.6021 22.5904C13.1881 22.0048 13.1885 21.0551 12.603 20.4691L4.12133 11.9802L12.6102 3.4985C13.1963 2.91297 13.1967 1.96322 12.6112 1.37718C12.0256 0.791147 11.0759 0.790741 10.4898 1.37628L0.939805 10.9181ZM99.0006 10.5208L2.00065 10.4792L1.99937 13.4792L98.9994 13.5208L99.0006 10.5208Z" fill="url(#paint0_linear_656_6)"/><defs><linearGradient id="paint0_linear_656_6" x1="109.219" y1="12.6085" x2="108.241" y2="0.976584" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
              nextArrow:
                '<button class="next"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.0607 13.0607C98.6464 12.4749 98.6464 11.5251 98.0607 10.9393L88.5147 1.3934C87.9289 0.807611 86.9792 0.807611 86.3934 1.3934C85.8076 1.97919 85.8076 2.92893 86.3934 3.51472L94.8787 12L86.3934 20.4853C85.8076 21.0711 85.8076 22.0208 86.3934 22.6066C86.9792 23.1924 87.9289 23.1924 88.5147 22.6066L98.0607 13.0607ZM0 13.5H97V10.5H0V13.5Z" fill="url(#paint0_linear_422_192)"/><defs><linearGradient id="paint0_linear_422_192" x1="-10.2196" y1="11.4167" x2="-9.23595" y2="23.0481" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
              arrows: true,
              dots: true,
              variableWidth: false,
              prevArrow:
                '<button class="prev"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939805 10.9181C0.353768 11.5037 0.353362 12.4534 0.938898 13.0395L10.4808 22.5895C11.0663 23.1755 12.016 23.1759 12.6021 22.5904C13.1881 22.0048 13.1885 21.0551 12.603 20.4691L4.12133 11.9802L12.6102 3.4985C13.1963 2.91297 13.1967 1.96322 12.6112 1.37718C12.0256 0.791147 11.0759 0.790741 10.4898 1.37628L0.939805 10.9181ZM99.0006 10.5208L2.00065 10.4792L1.99937 13.4792L98.9994 13.5208L99.0006 10.5208Z" fill="url(#paint0_linear_656_6)"/><defs><linearGradient id="paint0_linear_656_6" x1="109.219" y1="12.6085" x2="108.241" y2="0.976584" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
              nextArrow:
                '<button class="next"><svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M98.0607 13.0607C98.6464 12.4749 98.6464 11.5251 98.0607 10.9393L88.5147 1.3934C87.9289 0.807611 86.9792 0.807611 86.3934 1.3934C85.8076 1.97919 85.8076 2.92893 86.3934 3.51472L94.8787 12L86.3934 20.4853C85.8076 21.0711 85.8076 22.0208 86.3934 22.6066C86.9792 23.1924 87.9289 23.1924 88.5147 22.6066L98.0607 13.0607ZM0 13.5H97V10.5H0V13.5Z" fill="url(#paint0_linear_422_192)"/><defs><linearGradient id="paint0_linear_422_192" x1="-10.2196" y1="11.4167" x2="-9.23595" y2="23.0481" gradientUnits="userSpaceOnUse"><stop stop-color="#3DA1DA"/><stop offset="0.473958" stop-color="#366CBD"/><stop offset="0.958333" stop-color="#3DACD0"/></linearGradient></defs></svg></button>',
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              arrows: true,
              dots: true,
              variableWidth: false,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              arrows: true,
              dots: true,
              variableWidth: false,
            },
          },
        ],
      });
      reviewsSlider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          $(".js-text-review").removeClass("show");
          const slide = reviewsSlider.find(".slick-active");
          const currentBtn = slide.find(btnReview);

          currentBtn.text("Читать весь отзыв...");
          currentBtn.data("text", "Скрыть...");
        }
      );
    },
    destroyReviewsSlider: function () {
      reviewsSlider.slick("unslick");
    },
    showReviewsText: function () {
      btnReview.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const replaceText = _this.data("text");
        const currentText = _this.text();
        _this.data("text", currentText);
        _this.prev(".js-text-review").toggleClass("show");
        _this.text() === currentText
          ? _this.text(replaceText)
          : _this.text(currentText);
      });
    },
    animateReviewsSlider: function () {
      const reviews = gsap.utils.toArray(".review");
      const reviewsContainer = document.querySelector(".js-reviews-slider");
      let tween = gsap.to(reviews, {
        // xPercent: -60 * reviews.length - 1,
        x: () =>
          -(
            reviewsContainer.scrollWidth - document.documentElement.clientWidth
          ) + "px",
        ease: "linear",
        scrollTrigger: {
          trigger: "#reviews",
          scrub: true,
          pin: true,
          start: "top top",
          end: () => "+=" + reviewsContainer.offsetWidth,
        },
      });

      gsap.from(".bar", {
        scrollTrigger: {
          trigger: "#reviews",
          onUpdate: (self) => {
            for (let i = 0; i < reviews.length; i++) {
              const review = reviews[i];
              const reviewWidth = review.offsetWidth;
              let reviewsContainerWidth = reviewWidth * reviews.length;
              let positionReview = review.offsetLeft / reviewsContainerWidth;
              if (self.progress > positionReview) {
                review.classList.add("show");
              } else {
                review.classList.remove("show");
              }
            }
          },
          value: 100,
          pinSpacing: true,
          scrub: true,
          pin: true,
          end: () => "+=" + reviewsContainer.offsetWidth,
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
      });
    },
    init: function () {
      Sliders.initAuthorsSlider();
      Sliders.showReviewsText();
      Sliders.initReviewsSlider();
    },
  };
})();

export default Sliders;
