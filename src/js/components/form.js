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
					if (document.querySelector('#alertFormValid')) showAlertModal(document.querySelector('#alertFormValid'))
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
				const action = form.getAttribute('action');
				if (action) {
					window.location.href = action;
				} else {
					form.onsubmit = function (event) {
						event.preventDefault();
					};
				}
			}
		});
	})
}

const passwordFields = document.querySelectorAll('.wrapper-field--password');

if (passwordFields.length > 0) {
	passwordFields.forEach((field) => {
		const input = field.querySelector('.field');
		const btnShow = field.querySelector('.js-show-password');

		function showPassword() {
			input.setAttribute('type', 'text');
			btnShow.classList.add('is-active');
		}

		function hidePassword() {
			input.setAttribute('type', 'password');
			btnShow.classList.remove('is-active');
		}

		btnShow.addEventListener('click', function () {
			if (input.getAttribute('type') === 'password') {
				showPassword();
			} else {
				hidePassword();
			}
		});
	});
}

const formSigninPhone = document.querySelector('.js-signin-phone'),
	formSigninEmail = document.querySelector('.js-signin-email'),
	btnSigninPhone = document.querySelectorAll('.js-signin-btn-phone'),
	btnSigninEmail = document.querySelectorAll('.js-signin-btn-email')

const lastActiveSignin = localStorage.getItem('lastActiveSignin');

function signinPhone() {
	formSigninEmail?.classList.remove('is-show')
	formSigninPhone?.classList.add('is-show')

	localStorage.setItem('lastActiveSignin', 'signinPhone');
}

function signinEmail() {
	formSigninPhone?.classList.remove('is-show')
	formSigninEmail?.classList.add('is-show')

	localStorage.setItem('lastActiveSignin', 'signinEmail');
}

if (lastActiveSignin === 'signinPhone') {
	signinPhone();
} else if (lastActiveSignin === 'signinEmail') {
	signinEmail();
}

btnSigninPhone?.forEach((btn) => { btn.addEventListener('click', signinPhone) })
btnSigninEmail?.forEach((btn) => { btn.addEventListener('click', signinEmail) })

const repeatCodes = document.querySelectorAll('.js-repeat-code');

repeatCodes?.forEach((wrapper) => {
	const text = wrapper.querySelector('.js-repeat-code-text');
	const btn = wrapper.querySelector('.js-repeat-code-btn');
	const timer = wrapper.querySelector('.js-repeat-code-timer');

	let timeLeft = 0.15 * 60;
	let interval;

	function updateTimer() {
		const minutes = Math.floor(timeLeft / 60);
		const seconds = timeLeft % 60;

		timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

		if (timeLeft === 0) {
			clearInterval(interval);
			text.classList.remove('is-show');
			btn.classList.add('is-show');
		} else {
			timeLeft--;
		}
	}

	updateTimer();

	interval = setInterval(updateTimer, 1000);

	btn.addEventListener('click', () => {
		clearInterval(interval);
		timeLeft = 0.15 * 60;
		updateTimer();
		interval = setInterval(updateTimer, 1000);
		btn.classList.remove('is-show');
		text.classList.add('is-show');
	});
});