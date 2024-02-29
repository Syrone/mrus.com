const aboutAsideListBtns = document.querySelectorAll('.about__way-aside-anchor');

if (aboutAsideListBtns.length > 0) {
	aboutAsideListBtns.forEach((link) => {
		link.addEventListener('click', function () {
			aboutAsideListBtns.forEach((otherLink) => {
				otherLink.classList.remove('is-active');
			});

			link.classList.add('is-active');
		});
	});

	
}