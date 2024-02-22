function showAlertModal(element) {
	element.closest('.alert').style.display = 'block';
	element.style.display = 'flex';
}

function closeAlertModal(element) {
	const alertModal = element.closest('.alert__modal');
	const alertContainer = element.closest('.alert');

	alertContainer.style = '';
	alertModal.style = '';
}

const closeAlertModals = document.querySelectorAll('.alert__modal-close')
if (closeAlertModals.length > 0) {
	closeAlertModals.forEach((btn) => {
		btn.addEventListener('click', () => closeAlertModal(btn));
	});
}

function nextOrderStep(button) {
	const parentStep = button.closest('.order__step');

	parentStep.setAttribute('data-step-collapse', 'false');
	parentStep.setAttribute('data-step-complete', 'true');

	const nextStep = parentStep.nextElementSibling;

	if (nextStep && nextStep.classList.contains('order__step')) {
		nextStep.setAttribute('data-step-collapse', 'true');
		nextStep.setAttribute('data-step-complete', 'false');
	}
}

function editOrderStep(button) {
	const parentStep = button.closest('.order__step');

	parentStep.setAttribute('data-step-collapse', 'true');
	parentStep.setAttribute('data-step-complete', 'false');
}

const editButtons = document.querySelectorAll('.order__step-header-edit')

if (editButtons.length > 0) {
	editButtons.forEach((button) => {
		button.addEventListener('click', () => {
			editOrderStep(button);
		});
	});
}

const orderValidateForms = document.querySelectorAll('.order-validate');

if (orderValidateForms.length > 0) {
	orderValidateForms.forEach((form) => {
		const btnSubmit = form.querySelector('button[type="submit"]');
		const wrapperFields = form.querySelectorAll('.wrapper-field__inner');

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

			if (isValid) {
				form.onsubmit = function (event) {
					event.preventDefault();
				};
				nextOrderStep(btnSubmit);
			}
		});
	});
}

const radioIDSubmits = document.querySelectorAll('[data-id-submit]');

function toggleIsShow() {
  const idSubmitTarget = this.getAttribute('data-id-submit');
  const targetElements = document.querySelectorAll('[data-id-submit-target]');

  if (this.checked) {
    targetElements.forEach(function(element) {
      if (element.getAttribute('data-id-submit-target') === idSubmitTarget) {
        element.classList.add('is-show');
      } else {
        element.classList.remove('is-show');
      }
    });
  } else {
    targetElements.forEach(function(element) {
      element.classList.remove('is-show');
    });
  }
}

if (radioIDSubmits.length > 0) {
	radioIDSubmits.forEach(function(input) {
		input.addEventListener('change', toggleIsShow);
	
		if (input.checked) {
			toggleIsShow.call(input);
		}
	});
}

const formPromocode = document.querySelector('#formPromocode');

let isSubmit = false;

if (formPromocode) {
	const formPromocodeField = formPromocode.querySelector('.field'),
		iconSuccess = formPromocode.querySelector('.field-success')

	formPromocode.onsubmit = function (event) {
		event.preventDefault();

		if (!(isSubmit === true)) {
			isSubmit = true

			showAlertModal(document.querySelector('#alertSuccessPromocode'))
			formPromocodeField.setAttribute('readonly', 'readonly');
			formPromocodeField.setAttribute('disabled', 'disabled');
			iconSuccess?.classList.add('is-show')
		}
	}
}