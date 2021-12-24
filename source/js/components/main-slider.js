if (document.documentElement.clientWidth > 767) {
  let slider = document.querySelector('.cards__slider');
  let turnLeftSlider = false;

  let swiper = initSwiper(turnLeftSlider);

  function initSwiper(direction) {
    return new Swiper(slider, {
       // Optional parameters
      slidesPerView: 'auto',
      speed: 1000,
      freeMode: true,
      autoplay: {
        delay: 0,
        stopOnLastSlide: true,
        reverseDirection: direction,
      },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-btn--next',
        prevEl: '.swiper-btn--prev',
      },
    });
  }

  function changeDirection() {
    turnLeftSlider = !turnLeftSlider;
    let slideIndex = swiper.activeIndex;
    swiper.destroy(true, true);
    swiper = initSwiper(turnLeftSlider);
    swiper.slideTo(slideIndex,0);
  }

  swiper.autoplay.stop()

  slider.addEventListener('mousemove', (event) => {
    if (event.clientX < slider.clientWidth * 0.05) {
      if (!turnLeftSlider) {
        changeDirection()
        swiper.autoplay.start()
      } else {
        swiper.autoplay.start()
      }
    } else if (event.clientX > slider.clientWidth * 0.95) {
      if (turnLeftSlider) {
        changeDirection()
        swiper.autoplay.start()
      } else {
        swiper.autoplay.start()
      }
    } else {
      swiper.autoplay.stop()
    }
  })

  slider.addEventListener('mouseleave', () => {
    swiper.autoplay.stop()
  })
}





