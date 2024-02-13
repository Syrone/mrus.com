import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
new Swiper('.swiper__hero', {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,

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

new Swiper('.swiper__tech', {
  grabCursor: true,
  slidesPerView: 4,
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
    }
  }
});