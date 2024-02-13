import { getHeaderHeight } from '../functions/header-height';

window.addEventListener('scroll', function() {
  const header = document?.querySelector('.header');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 80) {
    header?.classList.add('header-fixed');

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