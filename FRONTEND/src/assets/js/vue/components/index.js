import Vue from 'vue'

import './forms'
import './acessibilidade'
import './icons'

import BsCarousel  from './BsCarousel.vue'
import OwlCarousel from './OwlCarousel.vue'
import Paginacao   from './Paginacao.vue'
import PageItem    from './PageItem.vue'
import MenuItem    from './MenuItem.vue'
import LazyImage   from './LazyImage.vue'
import MsgCookies  from './MsgCookies.vue'
import SpriteSvg   from './SpritesSvg.vue'
import BtnWhatsapp from './BtnWhatsapp.vue'
import PageHeader  from './PageHeader.vue'

// COMPONENTES====================================

Vue.component('msg-cookies', MsgCookies)
Vue.component('lazy-image', LazyImage)
Vue.component('lazyimage', LazyImage)
Vue.component('bs-carousel', BsCarousel)
Vue.component('owl-carousel', OwlCarousel)
Vue.component('menu-item', MenuItem)
Vue.component('paginacao', Paginacao)
Vue.component('page-item', PageItem)
Vue.component('btn-whatsapp', BtnWhatsapp)
Vue.component('sprite-svg', SpriteSvg)
Vue.component('page-header', PageHeader);
