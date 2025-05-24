document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // CARROSSEL
  // ============================
  function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    const cards = document.querySelectorAll('.card');

    if (!track || cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 20;
    const visibleCards = window.innerWidth <= 1020 ? Math.floor(window.innerWidth / cardWidth) : 5;
    const totalCards = cards.length;
    const maxOffset = track.scrollWidth - visibleCards * cardWidth;

    let currentOffset = 0;

    const scrollTo = (offset) => {
      currentOffset = Math.max(0, Math.min(offset, maxOffset));
      track.style.transform = `translateX(-${currentOffset}px)`;
    };

    btnRight?.addEventListener('click', () => {
      scrollTo(currentOffset + cardWidth * visibleCards);
    });

    btnLeft?.addEventListener('click', () => {
      scrollTo(currentOffset - cardWidth * visibleCards);
    });
  }

  initCarousel();

  window.addEventListener('resize', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
      track.style.transform = 'none';
    }
    initCarousel();
  });

  // ============================
  // BARRA DE BUSCA RESPONSIVA
  // ============================

  const searchContainer = document.querySelector('.search-container');

  if (searchContainer) {
    const searchInput = searchContainer.querySelector('input');
    const searchIcon = searchContainer.querySelector('i');

    searchIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      searchContainer.classList.toggle('expanded');
      searchInput.focus();
    });

    document.addEventListener('click', (e) => {
      if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove('expanded');
        searchInput.value = '';
      }
    });
  }

  // ============================
  // MENU MOBILE
  // ============================

  const menuBtn = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-menu');

  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  }
});
