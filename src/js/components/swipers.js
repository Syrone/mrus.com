import Swiper, { Navigation, Pagination, Thumbs, Autoplay, Zoom } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, Autoplay, Zoom]);
new Swiper('.swiper__hero', {
  grabCursor: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper__hero-next',
    prevEl: '.swiper__hero-prev',
  },

  pagination: {
    el: '.swiper__hero-pagination',
    type: 'bullets',
    clickable: true,
  },

});

new Swiper('.swiper__card', {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper__card-next',
    prevEl: '.swiper__card-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    389: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  }
});

new Swiper('.swiper__interested', {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper__interested-next',
    prevEl: '.swiper__interested-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    389: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16
    },
  }
});

new Swiper('.swiper__tech', {
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 16,

  navigation: {
    nextEl: '.swiper__tech-next',
    prevEl: '.swiper__tech-prev',
  },

  pagination: {
    el: '.swiper__tech-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    389: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    2560: {
      slidesPerView: 3,
      spaceBetween: 24
    },
  }
});

const classCardImage = document.querySelectorAll('.swiper__card-image')

if (classCardImage.length > 0) {
  classCardImage.forEach((swiper) => {
    const pagination = swiper.getElementsByClassName('swiper__card-image-pagination')[0];
    new Swiper(swiper, {
      nested: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 16,
    
      pagination: {
        el: pagination,
        type: 'bullets',
        clickable: true,
      },
    
      breakpoints: {
        0: {
          spaceBetween: 10
        },
        768: {
          spaceBetween: 10
        },
        1400: {
          spaceBetween: 16
        }
      }
    });
  })
}

const swiperProducts = document.querySelectorAll('.swiper-wrapper-product')

if (swiperProducts.length > 0) {
  swiperProducts.forEach((wrapper) => {
    const thumbClass = wrapper.querySelector('.swiper__product-thumb'),
          mainClass = wrapper.querySelector('.swiper__product')

    const thumbNextClass = wrapper.querySelector('.swiper__product-thumb-next'),
          thumbPrevClass = wrapper.querySelector('.swiper__product-thumb-prev')

    const thumbSwiper = new Swiper(thumbClass, {
      direction: 'vertical',
      grabCursor: true,
      slidesPerView: 6,
      spaceBetween: 12,
      freeMode: true,
      watchSlidesProgress: true,
    
      navigation: {
        nextEl: thumbNextClass,
        prevEl: thumbPrevClass,
      },
    
      breakpoints: {
        0: {
          direction: 'horizontal',
          slidesPerView: 4,
          spaceBetween: 10
        },
        389: {
          direction: 'horizontal',
          slidesPerView: 4,
          spaceBetween: 10
        },
        768: {
          direction: 'vertical',
          slidesPerView: 4,
          spaceBetween: 10
        },
        1024: {
          direction: 'vertical',
          slidesPerView: 5,
          spaceBetween: 12
        },
        1200: {
          direction: 'vertical',
          slidesPerView: 6,
          spaceBetween: 12
        },
      }
    });
    
    const mainSwiper = new Swiper(mainClass, {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 16,
      thumbs: {
        swiper: thumbSwiper,
      },
    });
  })

}

const swiperPictures = document.querySelectorAll('.swiper-wrapper-picture')

if (swiperPictures.length > 0) {
  swiperPictures.forEach((wrapper) => {
    const thumbClass = wrapper.querySelector('.swiper-picture-thumb'),
          mainClass = wrapper.querySelector('.swiper-picture-zoom')

    const thumbNextClass = wrapper.querySelector('.swiper-picture-thumb-next'),
          thumbPrevClass = wrapper.querySelector('.swiper-picture-thumb-prev')

    const mainNextClass = wrapper.querySelector('.swiper-picture-zoom-next'),
          mainPrevClass = wrapper.querySelector('.swiper-picture-zoom-prev')

    const mainPaginationClass = wrapper.querySelector('.swiper-picture-zoom__pagination')

    
    const thumbSwiper = new Swiper(thumbClass, {
      direction: 'vertical',
      grabCursor: true,
      slidesPerView: 'auto',
      spaceBetween: 12,
      freeMode: true,
      watchSlidesProgress: true,
    
      navigation: {
        nextEl: thumbNextClass,
        prevEl: thumbPrevClass,
      },
    })
    
    const mainSwiper = new Swiper(mainClass, {
      zoom: {
        limitToOriginalSize: true,
        maxRatio: 2,
      },
      loop: true,
      maxRatio: 1,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 40,

      thumbs: {
        swiper: thumbSwiper,
      },

      navigation: {
        nextEl: mainNextClass,
        prevEl: mainPrevClass,
      },

      pagination: {
        el: mainPaginationClass,
      },
    })
  })
}