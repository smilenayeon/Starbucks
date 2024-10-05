const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(  // _.throttle(함수, 시간)
  function () {
    console.log(window.scrollY);
    if (window.scrollY > 500 ){
      //배지 숨기기
      //gsap.to(요소, 지속시간, {옵션 객체데이터 형태로})
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
      //버튼 보이기
      gsap.to(toTopEl, .2,{   //gsap은 querySelector로 요소 define 안하고 css의 이름만 입력해도 알아서 찾아주기도함
        x:0, //버튼이 원래 위치에 보여짐

      })
    } else {
      //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity:1,
        display: 'block'
      });
      //버튼숨기기
      gsap.to(toTopEl, .2,{
        x:100, //버튼이 오른쪽으로 100px 이동해서 숨겨짐.

      })
    }
  },300
));  

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //각각의 요소들이 순차적으로 지연되도록. 0.7초 뒤에, 1.4도 뒤에, 2.1초 뒤에 보임 -- 로직 자동화
    opacity: 1
  })
});

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay:true,
  loop:true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView:3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 간격 10px
  centeredSlides:true, //1번 슬라이드 가운데보이기
  loop: true,
  // autoplay: {
  //   delay:5000,  //5초에 한번씩 자동슬라이드
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지번호요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true, 
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }


});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion =false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리!
    promotionEl.classList.add('hide');
  }else{
    //보임 처리!
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간 (최소, 최대)
    {//옵션
    y: size,
    repeat: -1, //무한반복을 의미함
    yoyo: true, //한번 재생됨 움직임 뒤로 돌려서 다시 재생
    ease: Power1.easeInOut,
    delay: random(0, delay),
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls =document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, //보여짐 여부를 감시한 요소 
      triggerHook:.8, //뷰포트의 어느 지점에 보여지면 트리거
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
