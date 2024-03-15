const formValidate = document.querySelectorAll('.form-validate')

function showAlertModal(element) {
	const alertContainer = element.closest('.alert');

	const showAlert = element.dataset.showAlert

	alertContainer.style.display = 'block';
	element.style.display = 'flex';

	if (showAlert) {
		setTimeout(() => {
			alertContainer.style.display = 'none';
			element.style.display = 'none';
		}, showAlert);
	}
}

if (formValidate.length > 0) {
	formValidate.forEach((form) => {
		const btnSubmit = form.querySelector('button[type="submit"]');
		const wrapperFields = form.querySelectorAll('.wrapper-field__inner');
		const selectChoices = form.querySelectorAll('.choices')

		wrapperFields.forEach((wrapper) => {
			const input = wrapper.querySelector('.field');

			input.addEventListener('input', () => {
				if (input.value.trim() !== '') {
					wrapper.classList.remove('is-valid');
				}
			});
		});

		btnSubmit.addEventListener('click', (event) => {
			event.preventDefault();

			let isValid = true;

			wrapperFields.forEach((wrapper) => {
				const input = wrapper.querySelector('.field');

				if (input.hasAttribute('required') && input.value.trim() === '') {
					input.value = '';
					wrapper.classList.add('is-valid');
					showAlertModal(document.querySelector('#alertFormValid'))
					isValid = false;
				} else {
					wrapper.classList.remove('is-valid');
				}
			});

			if (selectChoices.length > 0) {
				selectChoices.forEach((select) => {
					const selectPlaceholder = select.querySelector('.choices__list--single .choices__placeholder')
					const selectedValue = select.getAttribute('data-value');
	
					if (!selectedValue && !selectPlaceholder.querySelector('.required')) {
						selectPlaceholder.insertAdjacentHTML('beforeend', '<span class="required">*</span>'.trim());
					}
					isValid = false;
				})
			}

			if (isValid) {
				form.onsubmit = function (event) {
					event.preventDefault();
				};
			}
		});
	})
}