export default function initSoftScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

  function scrollToSecction(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSecction);
  });
}
