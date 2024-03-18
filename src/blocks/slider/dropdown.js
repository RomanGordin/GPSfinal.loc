export function dropdown(className, counterSliderDesktop, counterSliderLaptop) {
  let slider = document.querySelector(className),
    slideCount = slider.querySelectorAll('.slider-slide'),
    buttonActions = slider
      .querySelector('.slider-actions')
      .querySelector('button')

  slider
    .querySelector('.slider-actions')
    .querySelector('button')
    .addEventListener('click', function () {
      this.hasAttribute('active') ? hidden() : show()
    })

  function hidden() {
    for (let index = 0; index < slideCount.length; index++) {
      if (index + 1 > counterSliderDesktop && window.innerWidth > 1120) {
        slideCount[index].style.display = 'none'
      }
      if (index + 1 > counterSliderLaptop && window.innerWidth < 1120) {
        slideCount[index].style.display = 'none'
      }
    }
    buttonActions.toggleAttribute('active')
    buttonActions.textContent = 'Показать все'
  }

  function show() {
    for (let index = 0; index < slideCount.length; index++) {
      slideCount[index].style.display = 'flex'
    }
    buttonActions.toggleAttribute('active')
    buttonActions.textContent = 'Скрыть'
  }

  hidden()
}
