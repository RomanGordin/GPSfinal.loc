export function sidebar(openButton, closeButton, overlay, menu) {
  document.querySelector(openButton).addEventListener('click', open)
  document.querySelector(closeButton).addEventListener('click', close)
  document.querySelector(overlay).addEventListener('click', close)

  function open() {
    document.querySelector(overlay).classList.toggle('overlay--active')
    document.querySelector(menu).classList.toggle('sidebar--active')
    document.querySelector('body').classList.add('hidden')
  }

  function close() {
    document.querySelector(overlay).classList.toggle('overlay--active')
    document.querySelector(menu).classList.toggle('sidebar--active')
    document.querySelector('body').classList.remove('hidden')
  }
}
