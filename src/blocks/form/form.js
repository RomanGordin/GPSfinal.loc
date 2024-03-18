export function form(openButtons, closeButton, overlay, form) {
  document.querySelectorAll(openButtons).forEach(function (el) {
    el.addEventListener('click', open)
  })
  document.querySelectorAll(closeButton).forEach(function (el) {
    el.addEventListener('click', close)
  })
  document.querySelectorAll(overlay).forEach(function (el) {
    el.addEventListener('click', close)
  })

  function open(event) {
    event.preventDefault()
    document.querySelector(form).classList.toggle('form-wrapper--active')
    document.querySelector('body').classList.add('hidden')
    document.querySelector(form).classList.toggle('form-wrapper--zindex')
  }

  function close() {
    document.querySelector(form).classList.remove('form-wrapper--active')
    setTimeout(() => {
      document.querySelector(form).classList.remove('form-wrapper--zindex')
    }, 500)

    if (
      document
        .querySelector('.sidebar-container')
        .classList.contains('sidebar--active')
    ) {
    } else {
      setTimeout(() => {
        document.querySelector('body').classList.remove('hidden')
      }, 500)
    }
  }
}
