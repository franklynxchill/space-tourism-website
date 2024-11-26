document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.home-link, .destination-link, .technology-link'); // Select both types of links
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename

  links.forEach(link => {
    const linkHref = link.getAttribute('href').split('/').pop(); // Get the filename from href
    if (linkHref === currentPage) {
      link.classList.add('active');
    } 
  });
});




const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const menuNav = document.getElementById('menu-nav');

hamburgerBtn.addEventListener('click', ()=> {
  menuNav.classList.add('show-menu');
})

closeBtn.addEventListener('click', ()=> {
  menuNav.classList.remove('show-menu');
})


const swiper = new Swiper('.swiper', {
  slidesPerView: 1, 
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



