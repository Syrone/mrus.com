const scrollSections = document.querySelectorAll('.section-scroll'),
			scrollScrollAccordions = document.querySelectorAll('.accordion-scroll'),
			scrollNavigations = document.querySelectorAll('.nav-scroll')

window.onscroll = () => {
	if (scrollSections.length > 0) {
		scrollSections.forEach((section) => {
			let top = window.scrollY,
					offset = section.offsetTop - 20,
					height = section.offsetHeight,
					id = section.getAttribute('id')

			if (top >= offset && top < offset + height) {
				if (scrollNavigations.length > 0) {
					scrollNavigations.forEach((nav) => {
						const scrollNavigation = document.querySelector('.nav-scroll[href*="' + id + '"]');

						if (scrollScrollAccordions.length > 0) {
							scrollScrollAccordions.forEach((accordion) => {
								accordion.open = false
							})
						}
						if (nav.classList.contains('tabs__nav-btn--active')) {
							nav.classList.remove('tabs__nav-btn--active');
						}
						nav.classList.remove('is-active')
						scrollNavigation.classList.add('is-active')
						if (scrollNavigation.closest('.accordion-scroll')) {
							const scrollScrollAccordion = scrollNavigation.closest('.accordion-scroll')
							scrollScrollAccordion.open = true
						}
					})
				}
			}
		})
	}
}