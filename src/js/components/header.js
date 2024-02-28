import { getHeaderHeight } from '../functions/header-height';

let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
  const header = document?.querySelector('.header');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 80) {
    header?.classList.add('header-fixed');

    if (scrollPosition < prevScrollPosition) {
      header?.classList.add('header--full');
    } else {
      header?.classList.remove('header--full');
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