const accordion = document.querySelectorAll('.accordion');

if ( accordion.length > 0 ) {
	accordion.forEach( (e) => {
		const detailsSummary = e.querySelector('.accordion__title');
		const detailsContent = e.querySelector('.accordion__content');
		let summaryHeight = parseInt( detailsSummary.offsetHeight );

		e.style.height = `${summaryHeight}px`;

		e.addEventListener('toggle', (event) => {

			if ( e.open ) {
				let contentHeight = parseInt( detailsContent.offsetHeight );
				let fullHeight = ( summaryHeight + contentHeight );

				e.style.height = `${fullHeight}px`;
			} else {
				e.style.height = `${summaryHeight}px`;
			}
		});
	});
}