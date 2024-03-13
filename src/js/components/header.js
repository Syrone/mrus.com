import { getHeaderHeight } from '../functions/header-height';

const header = document?.querySelector('.header');
const dependentElements = document.querySelectorAll('.dependent-element')
let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 80) {
    header?.classList.add('header-fixed');

    if (scrollPosition < prevScrollPosition || scrollPosition === 0) {
      header?.classList.add('header--full');

      if (dependentElements.length > 0) {
        dependentElements.forEach((item) => {
          item.classList.add('dependent-element--full')
        })
      }
    } else {
      header?.classList.remove('header--full');

      if (dependentElements.length > 0) {
        dependentElements.forEach((item) => {
          item.classList.remove('dependent-element--full')
        })
      }
    }
  
    prevScrollPosition = scrollPosition;

		getHeaderHeight()
		window.addEventListener('resize', getHeaderHeight);
  } else {
    header?.classList.remove('header-fixed');
		document.documentElement.style.setProperty('--header-height', '0');
		window.addEventListener('resize', function() {
			document.documentElement.style.setProperty('--header-height', '0');
		});
  }
});



const headerDropdowns = document?.querySelectorAll('.header__dropdown')

if (headerDropdowns.length > 0) {
  headerDropdowns.forEach((dropdown) => {
    const btnClose = dropdown.querySelector('.header__dropdown-close')

    dropdown.addEventListener('click', function() {
      headerDropdowns.forEach((otherDropdown) => {
        otherDropdown.classList.remove('is-active')
      })

      dropdown.classList.add('is-active')
    })

    if (btnClose) {
      btnClose.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.remove('is-active');
      });
    }
  })
}