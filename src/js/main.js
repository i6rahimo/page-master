
$(document).ready(function () {
  // ============== Debug ===============
  function res() {
    var winW = $(window).width();
    var winH = $(window).height();
    var resolution = winW + 'x' + winH;
    $('.resolution-marker').text(resolution);
  }

  $(document).ready(function () {
    res();
  });

  $(window).on('resize', function () {
    res();
  });
  // ============  End Debug ============

  //tabs hotel card
  $('[data="tab-hotel-card"]').each(function (index) {
    $(this).on('click', function () {
      $('[data="tab-hotel-card"]').removeClass('bg-[#6170FF] text-white');
      $('[data="tab-content-hotel-card"]').addClass('hidden');
      $('[data="tab-el-hotel-card"]').removeClass('bg-[#6170FF]');
      $(this).addClass('bg-[#6170FF] text-white');
      $('[data="tab-content-hotel-card"]').eq(index).removeClass('hidden');
      $(this).prev().addClass('bg-[#6170FF]');
    });
  });

  //swiper image
  const swiperImage = new Swiper('.swiper-image', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function () {
        return `<span class="swiper-pagination-bullet bg-[#6170FF] w-[32px] rounded-[2px] h-[2px] mx-[2px] border-none p-0"></span>`;
      },
      clickable: true,
    },
  });

  //swiper feed
  const swiperFeed = new Swiper('.swiper-feed', {
    loop: false,
    spaceBetween: 32,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.swiper-feed-button-next',
      prevEl: '.swiper-feed-button-prev',
      enabled: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        navigation: {
          enabled: false,
        },
      },
      600: {
        slidesPerView: 2,
      },
      761: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
});


function listDrop() {
  const listBtnCity = document.querySelector('.city')
  const listWrapper = document.querySelector('.city-lists')
  listBtnCity.addEventListener('click', ()=> {
    listWrapper.classList.toggle('drop')
  })
  console.log(listBtnCity); 
}

listDrop()

function cardActive() {
  const cards = document.querySelectorAll('.intro-card');
  cards.forEach(e => {
    e.addEventListener('click', ()=> {
      e.classList.toggle('active')
    })
  })
}
cardActive()

