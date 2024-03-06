const locations = document.querySelectorAll('.location')

if (locations.length > 0) {
	locations.forEach((btn) => {
		const dropdown = document?.querySelector('.location__dropdown'),
					dropdownItem = document?.querySelectorAll('.location__dropdown-item'),
					dropdownClose = document?.querySelector('.location__dropdown-close'),
					text = btn.querySelector('.location__text')

		btn.addEventListener('click', function() {
			btn.classList.add('is-active');
			dropdown.classList.add('is-show');
		})

		dropdownClose.addEventListener('click', function() {
			btn.classList.remove('is-active');
			dropdown.classList.remove('is-show');
		})

		if (dropdownItem.length > 0) {
			dropdownItem.forEach((item) => {
				item.addEventListener('click', function() {
					btn.classList.remove('is-active');
					dropdown.classList.remove('is-show');
					text.textContent = item.innerHTML
				})
			})
		}
	})
}