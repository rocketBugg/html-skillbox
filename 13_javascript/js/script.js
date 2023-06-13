const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){

  tabsBtn.addEventListener('click', function(e){

  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){

  btn.classList.remove('tabs-nav__btn--active');});

  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){

  tabsBtn.classList.remove('tabs-item--active');});

  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false
  });

let burger = document.querySelector('.burger');
let menu = document.querySelector ('.menu');
let menuLinks = document.querySelectorAll ('.menu__links')

burger.addEventListener('click',

  function () {

  burger.classList.toggle('active');

  menu.classList.toggle('active');

  document.body.classList.toggle('stop-scroll');
})

// $(document).ready(function() {
//   $('.menu__links').click(function(event) {
//       $('.menu, .burger').removeClass('active');
//       $('body').removeClass('stop-scroll')
//   });
// });

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('active');

    menu.classList.remove('active');

    document.body.classList.remove('stop-scroll');
  })
})


document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--active');
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--active');
    })

    document.getElementById('search-form').addEventListener('submit', (e) => {
      e.preventDefault()
    })
  })
