const counters = document.querySelectorAll('.counter');

if (counters.length > 0) {
	counters.forEach((item) => {
		const input = item.querySelector('.counter__input');
		const minusBtn = item.querySelector('.counter__minus');
		const plusBtn = item.querySelector('.counter__plus');

		minusBtn.addEventListener('click', function() {
			if (event.shiftKey) {
				decrementCounterBy(10);
			} else {
				decrementCounter();
			}
			updateInputWidth();
		});
		
		plusBtn.addEventListener('click', function() {
			if (event.shiftKey) {
				incrementCounterBy(10);
			} else {
				incrementCounter();
			}
			updateInputWidth();
		});

		input.addEventListener('input', function() {
			validateInput()
			updateInputWidth();

			if (input.value === '' || input.value === '0') {
				input.value = '1';
			}
		});

		function incrementCounter() {
			let currentValue = parseInt(input.value);
			input.value = isNaN(currentValue) ? 1 : currentValue + 1;
		}
	
		function decrementCounter() {
			let currentValue = parseInt(input.value);
			if (isNaN(currentValue)) {
				input.value = 1;
			} else if (currentValue > 1) {
				input.value = currentValue - 1;
			}
		}

		function incrementCounterBy(value) {
			let currentValue = parseInt(input.value);
			input.value = isNaN(currentValue) ? value : currentValue + value;
		}
	
		function decrementCounterBy(value) {
			let currentValue = parseInt(input.value);
			if (isNaN(currentValue) || currentValue === 10) {
				input.value = 1;
			} else if (currentValue >= value) {
				input.value = currentValue - value;
			}
		}

		function validateInput() {
			input.value = input.value.replace(/\D/g, '');
		}
		
		function updateInputWidth() {
			const valueLength = input.value.length;
			input.style.width = `${valueLength + 0.25}ch`;
		}
	})
}