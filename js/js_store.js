//hero banner - responsive width & height
const heroBanner = document.querySelector('#hero-banner .banner-slider');
const heroBannerUl = document.querySelector('#hero-banner .banner-slider ul');
const heroBannerUlLi = document.querySelectorAll('#hero-banner .banner-slider ul li');
const heroBannerUlLiImg = document.querySelectorAll('#hero-banner .banner-slider ul li img');
const lastSlide = heroBannerUlLi[heroBannerUlLi.length-1].cloneNode(true);
const firstSlide = heroBannerUlLi[0].cloneNode(true);
heroBannerUl.prepend(lastSlide);
heroBannerUl.append(firstSlide);
const heroSlideLength = heroBannerUl.childElementCount;
heroBannerUl.style.width = `calc(100% * ${heroSlideLength} + 20px * ${heroSlideLength-1})`;
function heroBannerHeightFn(num){
  let bannerHeight = heroBanner.offsetWidth*num;
  heroBanner.style.height = bannerHeight+'px';
};
let ratioNum;
let heightSetTimeout;
window.addEventListener('resize', function(){
  clearTimeout(heightSetTimeout);
  heightSetTimeout=setTimeout(function(){
    if(window.innerWidth>1024){
      ratioNum=500/1240;
      heroBannerUl.style.width = `calc(100% * ${heroSlideLength} + 20px * ${heroSlideLength-1})`;
    }else if(window.innerWidth>440 && window.innerWidth<=1024){
      ratioNum=484/976;
      heroBannerUl.style.width = `calc(100% * ${heroSlideLength})`;
    }else if(window.innerWidth<=440){
      ratioNum=440/400;
      heroBannerUl.style.width = `calc(100% * ${heroSlideLength})`;
    };
    heroBannerHeightFn(ratioNum);
  }, 300)
});
//hero - auto slider
const heroPagerCurrent = document.querySelector('#hero-banner .banner-slider span.slider-pager span.current');
const heroPagerTotal = document.querySelector('#hero-banner .banner-slider span.slider-pager span.total');
heroPagerTotal.innerText = heroSlideLength-2;
let currentNum=0;
function heroSliderFn(){
  currentNum++;
  const gap = heroBannerUlLi[2].offsetLeft - heroBannerUlLi[1].offsetLeft;
  if(currentNum>=heroSlideLength-1){
    currentNum=0;
    heroBannerUl.style.left = -1*currentNum*gap +'px';
    heroBannerUl.style.transition = 0+'ms';
    setTimeout(heroSliderFn, 0);
  }else if(currentNum<=0){
    heroBannerUl.style.left = -1*(heroSlideLength-1)*gap +'px';
    heroBannerUl.style.transition = 0+'ms';
    setTimeout(heroSliderFn, 0);
    currentNum=heroSlideLength-2;
  }else{
    heroBannerUl.style.transition = 'left ease 0.3s';
    heroBannerUl.style.left = -1*currentNum*gap +'px';
  }
  heroPagerCurrent.innerText = currentNum;
};
let heroSliderInt = setInterval(heroSliderFn, 3000);
(()=>{heroSliderFn()})();
heroBannerUl.addEventListener('mouseover', function(e){
  heroBannerUlLiImg.forEach((el, idx)=>{
    if(e.target == el){
      clearInterval(heroSliderInt);
    }
  })
});
heroBannerUl.addEventListener('mouseout', function(e){
  heroBannerUlLiImg.forEach((el, idx)=>{
    if(e.target == el){
      heroSliderInt = setInterval(heroSliderFn, 3000);
    }
  })
});
let downTrigger = false;
let startX;
heroBannerUl.addEventListener('mousedown', function(e){
  e.preventDefault();
  downTrigger=true;
  startX = e.pageX
});
heroBannerUl.addEventListener('mouseup', function(e){
  e.preventDefault();
  if(downTrigger){
    const endX = e.pageX;
    const walk = startX - endX;
    if(walk>0){
      currentNum++;
      const gap = heroBannerUlLi[2].offsetLeft - heroBannerUlLi[1].offsetLeft;
      if(currentNum>=heroSlideLength-1){
        heroBannerUl.style.left = 0 +'px';
        heroBannerUl.style.transition = 0+'ms';
        setTimeout(function(){
          heroBannerUl.style.left = -1*gap +'px';
          heroBannerUl.style.transition = 'left ease 0.3s';
        }, 0);
        currentNum=1;
      }else{
        heroBannerUl.style.left = -1*currentNum*gap +'px';
        heroBannerUl.style.transition = 'left ease 0.3s';
      }
      heroPagerCurrent.innerText = currentNum;
    }else if(walk<0){
      currentNum--;
      const gap = heroBannerUlLi[2].offsetLeft - heroBannerUlLi[1].offsetLeft;
      if(currentNum<=0){
        heroBannerUl.style.left = -1*(heroSlideLength-1)*gap +'px';
        heroBannerUl.style.transition = 0+'ms';
        setTimeout(function(){
          heroBannerUl.style.left = -1*(heroSlideLength-2)*gap +'px';
          heroBannerUl.style.transition = 'left ease 0.3s';
        }, 0);
        currentNum=heroSlideLength-2;
      }else{
        heroBannerUl.style.left = -1*currentNum*gap +'px';
        heroBannerUl.style.transition = 'left ease 0.3s';
      }
      heroPagerCurrent.innerText = currentNum;
    }else{
      e.defaultPrevented = false;
    }
  }else{
    return;
  }
});
//product list create
import {storePageDataFn, classicData, seoulData, gyeongjuData, busanData, geojeData, jejuData} from './product-rawdata.js';
const classicProductBox = document.querySelector('section.miffy-classic .product-box');
classicProductBox.innerHTML = storePageDataFn(classicData);
const seoulProductBox = document.querySelector('section.seoul-store .product-box');
seoulProductBox.innerHTML = storePageDataFn(seoulData);
const gyeongjuProductBox = document.querySelector('section.gyeongju-store .product-box');
gyeongjuProductBox.innerHTML = storePageDataFn(gyeongjuData);
const busanProductBox = document.querySelector('section.busan-cafe .product-box');
busanProductBox.innerHTML = storePageDataFn(busanData);
const geojeProductBox = document.querySelector('section.geoje-cafe .product-box');
geojeProductBox.innerHTML = storePageDataFn(geojeData);
const jejuProductBox = document.querySelector('section.jeju-store .product-box');
jejuProductBox.innerHTML = storePageDataFn(jejuData);