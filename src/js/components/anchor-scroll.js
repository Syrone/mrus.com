const scrollSections = document.querySelectorAll('.section-scroll'),
			scrollScrollAccordions = document.querySelectorAll('.accordion-scroll'),
			scrollNavigations = document.querySelectorAll('.nav-scroll')

window.onscroll = () => {
	if (scrollSections.length > 0) {
		scrollSections.forEach((section) => {
			let top = window.scrollY,
					offset = section.offsetTop + 400,
					height = section.offsetHeight,
					id = section.getAttribute('id')

			if (top >= offset && top < offset + height) {
				if (scrollNavigations.length > 0) {
					scrollNavigations.forEach((nav) => {
						const scrollNavigation = document.querySelector('.nav-scroll[href*=' + id + ']'),
									scrollScrollAccordion = scrollNavigation.closest('.accordion-scroll')


						if (scrollScrollAccordions.length > 0) {
							scrollScrollAccordions.forEach((accordion) => {
								accordion.open = false
							})
						}
						nav.classList.remove('is-active')
						scrollNavigation.classList.add('is-active')
						if (scrollScrollAccordion) {
							scrollScrollAccordion.open = true
						}
					})
				}
			}
		})
	}
}