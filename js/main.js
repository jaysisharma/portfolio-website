const button1 = document.querySelectoor('.btn');
button1.onmousemove = function(e){
    const x = e.pageX - button1.offsetLeft;
    const y = e.pageY - button1.offsetTop;

    button1.style.setProperty('--x', x + 'px');
    button1.style.setProperty('--y', y + 'px');

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:1,
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  