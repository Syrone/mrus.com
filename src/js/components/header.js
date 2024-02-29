import { getHeaderHeight } from '../functions/header-height';

const header = document?.querySelector('.header');
const dependentElements = document.querySelectorAll('.dependent-element')
let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 80) {
    header?.classList.add('header-fixed');

    if (scrollPosition < prevScrollPosition) {
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