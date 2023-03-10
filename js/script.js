import SoftScroll from './modules/soft_scroll.js';
import initScrollAnimation from './modules/scroll_animation.js';
import initAccordion from './modules/accordion.js';
import initTabNavigation from './modules/tab_navigation.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown_menu.js';
import initMenuMobile from './modules/menu_mobile.js';
import initDateObject from './modules/date_object.js';
import initFetchAnimals from './modules/fectch_animals.js';
import initFetchBitcoins from './modules/fetch_bitcoins.js';

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]');
softScroll.init();

initScrollAnimation();
initAccordion();
initTabNavigation();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initDateObject();
initFetchAnimals();
initFetchBitcoins();
