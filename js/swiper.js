// #slider swiper
var slider_swiper = new Swiper(".sliderSwiper", {
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// #new swiper
var new_swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
        el: "#new .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    },
    slidesPerGroup: 3
});



// 서브페이지 스와이퍼
const authorSwiper = new Swiper('.authorSwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
