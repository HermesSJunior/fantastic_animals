import SoftScroll from './modules/soft_scroll.js';
import Accordion from './modules/accordion.js';
import TabNavigation from './modules/tab_navigation.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import Dropdown from './modules/dropdown_menu.js';
import MenuMobile from './modules/menu_mobile.js';
import DateObject from './modules/date_object.js';
import fetchAnimals from './modules/fectch_animals.js';
import fetchBitcoins from './modules/fetch_bitcoins.js';
import ScrollAnimation from './modules/scroll_animation.js';

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

const scrollAnimation = new ScrollAnimation('[data-animation="scroll"]');
scrollAnimation.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const dateObject = new DateObject('[data-week]', 'open');
dateObject.init();

fetchAnimals('./animalsAPI.json', '.numbers_grid');
fetchBitcoins('https://blockchain.info/ticker', '.bitcoin_price');
