const choiceLists = document.querySelectorAll('.product__choice-list');

if (choiceLists.length > 0) {
  choiceLists.forEach((list) => {
    const buttons = list.querySelectorAll('.product__choice-btn');

    buttons.forEach((button) => {
      button.addEventListener('click', function() {
        buttons.forEach((btn) => {
          btn.classList.remove('is-active');
        });

        button.classList.add('is-active');
      });
    });
  });
}