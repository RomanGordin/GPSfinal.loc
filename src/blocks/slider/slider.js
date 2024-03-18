import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export function slider(className) {
  var swiper = new Swiper(className, {
    wrapperClass: 'slider-wrapper',
    slideClass: 'slider-slide',
    slidesPerView: 'auto',
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        autoHeight: true,
        pagination: {
          el: '.slider-pagination'
        }
      },
      768: {
        enabled: false
      }
    }
  })
}
