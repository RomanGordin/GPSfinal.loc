import '../scss/style.scss'

// functions declarations
import { sidebar } from '../blocks/sidebar/sidebar.js'
import { slider } from '../blocks/slider/slider.js'
import { dropdown } from '../blocks/slider/dropdown.js'
import { form } from '../blocks/form/form.js'

// functions use
document.addEventListener('DOMContentLoaded', () => {
  sidebar(
    '.header-button',
    '.sidebar-buttons__button',
    '.overlay',
    '.sidebar-container'
  )
  form('[form-call]', '.form-closer', '.form-overlay', '.form-call')
  form('[form-callback]', '.form-closer', '.form-overlay', '.form-callback')
  slider('.slider-partners')
  slider('.slider-order')
  dropdown('.slider-partners', 8, 6)
  dropdown('.slider-order', 4, 3)
  slider('.slider-price')
})
