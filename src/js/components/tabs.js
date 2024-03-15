import GraphTabs from 'graph-tabs';

const classProductTabs = document.querySelector('[data-tabs="productTabs"]'),
			btnAllReviews = document?.getElementById('allReviews'),
			btnAllFeature = document?.getElementById('allFeatures')

const targetElements = document.querySelectorAll('[data-tabs-nav-traget]');

if (classProductTabs) {
	const productTabs = new GraphTabs('productTabs');
	
	function handleClick(target, offset) {
		target.click();
		window.scrollTo({
			top: target.getBoundingClientRect().top + window.pageYOffset - offset,
			behavior: 'smooth'
		});
	}

	targetElements.forEach((target) => {
		const targetValue = target.getAttribute('data-tabs-nav-traget');

		if (targetValue === btnAllFeature.id) {
			btnAllFeature.addEventListener('click', function() {
				handleClick(target, 50);
			});
		}
		
		if (targetValue === btnAllReviews.id) {
			btnAllReviews.addEventListener('click', function() {
				handleClick(target, 50);
			});
		}
	});
}

const classOrderTabs = document.querySelector('[data-tabs="orderTabs"]')

if (classOrderTabs) {
	const productTabs = new GraphTabs('orderTabs');
}

const classAccountSignInTabs = document.querySelector('[data-tabs="accountSignin"]')

if (classAccountSignInTabs) {
	const accountSignInTabs = new GraphTabs('accountSignin');

	const btnTabs = classAccountSignInTabs.querySelectorAll('.tabs__nav-btn')

	if (btnTabs.length > 0) {
		btnTabs.forEach((btn) => {
			btn.addEventListener('click', function () {
				btnTabs.forEach((otherBtn) => {
					otherBtn.closest('.tabs__nav-item').classList.remove('is-active')
				})

				if (btn.classList.contains('tabs__nav-btn--active')) {
					btn.closest('.tabs__nav-item').classList.add('is-active')
				}
			})
		})
	}
}