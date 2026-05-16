//thumnail section
const thumSecImgUl = document.querySelector('section.thum-sec .all-img ul');
const thumSecImgUlLiImg = document.querySelectorAll('section.thum-sec .all-img ul li img');
const thumSecSelectedImg = document.querySelector('section.thum-sec .selected-img img');
const thumSecTotalNum = document.querySelector('section.thum-sec .selected-img span.img-pager span.total');
const thumSecCurrentNum = document.querySelector('section.thum-sec .selected-img span.img-pager span.current');
const leftArrowBtn = document.querySelector('section.thum-sec span.left-arrow');
const rightArrowBtn = document.querySelector('section.thum-sec span.right-arrow');
thumSecTotalNum.innerText = thumSecImgUlLiImg.length;
let selectedImgAlt = '';
let selectedImgSrc = '';
function imgSelectFn(){
  thumSecSelectedImg.setAttribute('alt', selectedImgAlt);
  thumSecSelectedImg.setAttribute('src', selectedImgSrc);
};
let currentThumIdx = 0;
thumSecImgUl.addEventListener('click', function(e){
  thumSecImgUlLiImg.forEach((el, idx)=>{
    if(e.target == el){
      thumSecCurrentNum.innerText = idx+1;
      selectedImgAlt = el.getAttribute('alt');
      selectedImgSrc = el.getAttribute('src');
      imgSelectFn();
    }
  });
});
leftArrowBtn.addEventListener('click', function(){
  currentThumIdx--;
  if(currentThumIdx<0) currentThumIdx=thumSecImgUlLiImg.length-1;
  thumSecImgUlLiImg.forEach((el, idx)=>{
    if(currentThumIdx == idx){
      thumSecCurrentNum.innerText = idx+1;
      selectedImgAlt = el.getAttribute('alt');
      selectedImgSrc = el.getAttribute('src');
      imgSelectFn();
    }
  });
});
rightArrowBtn.addEventListener('click', function(){
  currentThumIdx++;
  if(currentThumIdx>=thumSecImgUlLiImg.length) currentThumIdx=0;
  thumSecImgUlLiImg.forEach((el, idx)=>{
    if(currentThumIdx == idx){
      thumSecCurrentNum.innerText = idx+1;
      selectedImgAlt = el.getAttribute('alt');
      selectedImgSrc = el.getAttribute('src');
      imgSelectFn();
    }
  });
});
//info section
const infoSecMiffy = document.querySelector('section.info-sec .miffy-value');
const infoSecMiffyNum = document.querySelector('section.info-sec .miffy-value input[type=number]')
const infoSecMiffyNumMinus = document.querySelector('section.info-sec .miffy-value span.minus');
const infoSecMiffyNumPlus = document.querySelector('section.info-sec .miffy-value span.plus');
const infoSecMiffyPrice = document.querySelector('section.info-sec .miffy-value input[type=text]');
const infoSecMiffyDelet = document.querySelector('section.info-sec .miffy-value span.delete-btn');
const infoSecMelanie = document.querySelector('section.info-sec .melanie-value');
const infoSecMelanieNum = document.querySelector('section.info-sec .melanie-value input[type=number]');
const infoSecMelanieNumMinus = document.querySelector('section.info-sec .melanie-value span.minus');
const infoSecMelanieNumPlus = document.querySelector('section.info-sec .melanie-value span.plus');
const infoSecMelaniePrice = document.querySelector('section.info-sec .melanie-value input[type=text]');
const infoSecMelanieDelet = document.querySelector('section.info-sec .melanie-value span.delete-btn');
const infoSecTotalPrice = document.querySelector('section.info-sec #total-price1');
//popup order form
const popupFormMiffy = document.querySelector('#tab-order-form .miffy-value');
const popupFormMiffyNum = document.querySelector('#tab-order-form .miffy-value input[type=number]')
const popupFormMiffyNumMinus = document.querySelector('#tab-order-form .miffy-value span.minus');
const popupFormMiffyNumPlus = document.querySelector('#tab-order-form .miffy-value span.plus');
const popupFormMiffyPrice = document.querySelector('#tab-order-form .miffy-value input[type=text]');
const popupFormMiffyDelet = document.querySelector('#tab-order-form .selected-option .miffy-value span.delet-btn');
const popupFormMelanie = document.querySelector('#tab-order-form .melanie-value');
const popupFormMelanieNum = document.querySelector('#tab-order-form .melanie-value input[type=number]');
const popupFormMelanieNumMinus = document.querySelector('#tab-order-form .melanie-value span.minus');
const popupFormMelanieNumPlus = document.querySelector('#tab-order-form .melanie-value span.plus');
const popupFormMelaniePrice = document.querySelector('#tab-order-form .melanie-value input[type=text]');
const popupFormMelanieDelet = document.querySelector('#tab-order-form .selected-option .melanie-value span.delet-btn');
const popupFormTotalPrice = document.querySelector('#tab-order-form #total-price2');
let miffyCount = 0;
let melanieCount = 0;
//input price fn
function priceInputFn(input, num){
  input.value = (16000*num).toLocaleString('ko-KR')+'원';
};
//order form auto complete fn
function orderFormFn(){
  infoSecMiffyNum.value = miffyCount;
  popupFormMiffyNum.value = miffyCount;
  priceInputFn(infoSecMiffyPrice, miffyCount);
  priceInputFn(popupFormMiffyPrice, miffyCount);
  infoSecMelanieNum.value = melanieCount;
  popupFormMelanieNum.value = melanieCount;
  priceInputFn(infoSecMelaniePrice, melanieCount);
  priceInputFn(popupFormMelaniePrice, melanieCount);
  priceInputFn(infoSecTotalPrice, miffyCount+melanieCount);
  priceInputFn(popupFormTotalPrice, miffyCount+melanieCount);
};
//selected option delet
infoSecMiffyDelet.addEventListener('click', function(){
  infoSecMiffy.classList.remove('active');
  popupFormMiffy.classList.remove('active');
  miffyCount=0;
  orderFormFn();
});
infoSecMelanieDelet.addEventListener('click', function(){
  infoSecMelanie.classList.remove('active');
  popupFormMelanie.classList.remove('active');
  melanieCount=0;
  orderFormFn();
});
popupFormMiffyDelet.addEventListener('click', function(){
  infoSecMiffy.classList.remove('active');
  popupFormMiffy.classList.remove('active');
  miffyCount=0;
  orderFormFn();
});
popupFormMelanieDelet.addEventListener('click', function(){
  infoSecMelanie.classList.remove('active');
  popupFormMelanie.classList.remove('active');
  melanieCount=0;
  orderFormFn();
});
//select arrow
const infoSecSelect = document.querySelector('#option');
const popupFormSelect = document.querySelector('#option2');
infoSecSelect.addEventListener('focus', function(){
  infoSecSelect.classList.add('down');
});
infoSecSelect.addEventListener('blur', function(){
  infoSecSelect.classList.remove('down');
});
infoSecSelect.addEventListener('change', function(){
  infoSecSelect.classList.remove('down');
  if(infoSecSelect.value == 'miffy'){
    miffyCount++;
    orderFormFn();
    if(miffyCount<=1){
      infoSecMiffy.classList.add('active');
      popupFormMiffy.classList.add('active');
    }else if(miffyCount<1){
      return;
    }
  }else if(infoSecSelect.value == 'melanie'){
    melanieCount++;
    orderFormFn();
    if(melanieCount<=1){
      infoSecMelanie.classList.add('active');
      popupFormMelanie.classList.add('active');
    }else if(melanieCount>1){
      return;
    }
  }
});
document.addEventListener('mousedown', function(e){
  if(infoSecSelect!=e.target) infoSecSelect.blur();
});
popupFormSelect.addEventListener('focus', function(){
  popupFormSelect.classList.add('down');
});
popupFormSelect.addEventListener('blur', function(){
  popupFormSelect.classList.remove('down');
});
popupFormSelect.addEventListener('change', function(){
  popupFormSelect.classList.remove('down');
  if(popupFormSelect.value == 'miffy'){
    miffyCount++;
    orderFormFn();
    if(miffyCount<=1){
      infoSecMiffy.classList.add('active');
      popupFormMiffy.classList.add('active');
    }else if(miffyCount>1){
      return;
    }
  }else if(popupFormSelect.value == 'melanie'){
    melanieCount++;
    orderFormFn();
    if(melanieCount<=1){
      infoSecMelanie.classList.add('active');
      popupFormMelanie.classList.add('active');
    }else if(melanieCount>1){
      return;
    }
  }
});
document.addEventListener('mousedown', function(e){
  if(popupFormSelect!=e.target) popupFormSelect.blur();
});
//number control btn
infoSecMiffyNumMinus.addEventListener('click', function(){
  miffyCount--;
  orderFormFn();
});
infoSecMiffyNumPlus.addEventListener('click', function(){
  miffyCount++;
  orderFormFn();
});
infoSecMelanieNumMinus.addEventListener('click', function(){
  melanieCount--;
  orderFormFn();
});
infoSecMelanieNumPlus.addEventListener('click', function(){
  melanieCount++;
  orderFormFn();
});
popupFormMiffyNumMinus.addEventListener('click', function(){
  miffyCount--;
  orderFormFn();
});
popupFormMiffyNumPlus.addEventListener('click', function(){
  miffyCount++;
  orderFormFn();
});
popupFormMelanieNumMinus.addEventListener('click', function(){
  melanieCount--;
  orderFormFn();
});
popupFormMelanieNumPlus.addEventListener('click', function(){
  melanieCount++;
  orderFormFn();
});
//tab order bar
const tabOrderBar = document.querySelector('#tab-order-bar');
const tabOrderForm = document.querySelector('#tab-order-form');
tabOrderBar.addEventListener('click', function(e){
  if(tabOrderBar.contains(e.target)){
    tabOrderForm.classList.add('active');
  } 
});
document.addEventListener('click', function(e){
  if(tabOrderForm.classList.contains('active')){
    if(!tabOrderForm.contains(e.target)){
      if(!tabOrderBar.contains(e.target)){
        tabOrderForm.classList.remove('active');
      }
    }
  }
});
//scroll info sec padding
const infoSecInner = document.querySelector('section.info-sec .inner');
window.addEventListener('scroll', function(e){
  const browserWidth = this.window.innerWidth;
  if(browserWidth>1024&&this.scrollY>=500){
    infoSecInner.classList.add('scrollOn');
  }else{
    infoSecInner.classList.remove('scrollOn');
  }
});
//recomendation section - slick slider
$('.slider-inner').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 441,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});