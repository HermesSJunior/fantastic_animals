import SoftScroll from './modules/soft_scroll.js';
import Accordion from './modules/accordion.js';
import TabNavigation from './modules/tab_navigation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdown from './modules/dropdown_menu.js';
import initMenuMobile from './modules/menu_mobile.js';
import initDateObject from './modules/date_object.js';
import fetchAnimals from './modules/fectch_animals.js';
import initFetchBitcoins from './modules/fetch_bitcoins.js';
import initScrollAnimation from './modules/scroll_animation.js';

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-animation="accordion"] dt');
accordion.init();

const tabNavigation = new TabNavigation('[data-tab="menu"] li', '[data-tab="content"] section');
tabNavigation.init();

const modal = new Modal('[data-modal="toOpen"]', '[data-modal="toClose"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdown();
initMenuMobile();
initDateObject();
initFetchBitcoins();
initScrollAnimation();
fetchAnimals('./animalsAPI.json', '.numbers_grid');
