//products display default setting
import {sortedDataFn, geojeData, pagerLengthFn, pagerLiCreateFn, pagerActiveFn, arrowBtnActiveFn} from './product-rawdata.js';
const productConUl = document.querySelector('section.product-sec .product-con ul');
let sortedData = geojeData.sort(function(a, b){
  return new Date(b.date) - new Date(a.date);
});
productConUl.innerHTML = sortedDataFn(sortedData, 0);
//display select
const selectBox = document.querySelector('section.product-sec .title .select-box');
const select = document.querySelector('section.product-sec .title .select-box select');
const selectArrow = document.querySelector('section.product-sec .title .select-box span.select-btn');
select.addEventListener('focus', function(e){
  selectArrow.style.backgroundPosition = '0 0';
});
select.addEventListener('blur', function(e){
  selectArrow.style.backgroundPosition = '0 -18px';
});
select.addEventListener('change', function(e){
  selectArrow.style.backgroundPosition = '0 -18px';
  //products sorting - start
  if(select.value == 'latest'){
    sortedData = geojeData.sort(function(a, b){
      return new Date(b.date) - new Date(a.date);
    });
    productConUl.innerHTML = sortedDataFn(sortedData, 0);
  }else if(select.value == 'lowest'){
    sortedData=geojeData.sort(function(a, b){
      return a.finPrice - b.finPrice;
    });
    productConUl.innerHTML = sortedDataFn(sortedData, 0);
  }
  currentPageIdx=0;
  pagerActiveFn(currentPageIdx, pagerUlLi);
  arrowBtnActiveFn(currentPageIdx, leftArrowBtn, rightArrowBtn, pagerLiLength);
  //products sorting - end
});
document.addEventListener('mousedown', function(e){
  if(!selectBox.contains(e.target)){
    select.blur();
  }
});
//pager - length
let pagerLiLength = pagerLengthFn(geojeData);
const pagerUl = document.querySelector('.product-pager ul');
pagerUl.innerHTML = pagerLiCreateFn(pagerLiLength);
//active pager
const pagerUlLi = document.querySelectorAll('.product-pager ul li');
let currentPageIdx = 0;
pagerActiveFn(currentPageIdx, pagerUlLi);
//pager arrow btn
const leftArrowBtn = document.querySelector('section.product-sec .product-pager span.left-arrow');
const rightArrowBtn = document.querySelector('section.product-sec .product-pager span.right-arrow');
arrowBtnActiveFn(currentPageIdx, leftArrowBtn, rightArrowBtn, pagerLiLength);
leftArrowBtn.addEventListener('click', function(e){
  currentPageIdx--;
  if(currentPageIdx>=0){
    pagerActiveFn(currentPageIdx, pagerUlLi);
    productConUl.innerHTML = sortedDataFn(sortedData, currentPageIdx*12);
    arrowBtnActiveFn(currentPageIdx, leftArrowBtn, rightArrowBtn, pagerLiLength);
  }else{
    return
  }
});
rightArrowBtn.addEventListener('click', function(e){
  currentPageIdx++;
  if(currentPageIdx<=pagerLiLength-1){
    productConUl.innerHTML = sortedDataFn(sortedData, currentPageIdx*12);
    pagerActiveFn(currentPageIdx, pagerUlLi);
    arrowBtnActiveFn(currentPageIdx, leftArrowBtn, rightArrowBtn, pagerLiLength);
  }else{
    return
  }
});
pagerUl.addEventListener('click', function(e){
  pagerUlLi.forEach((el, idx)=>{
    if(e.target == el) currentPageIdx = idx;
  });
  productConUl.innerHTML = sortedDataFn(sortedData, currentPageIdx*12);
  pagerActiveFn(currentPageIdx, pagerUlLi);
  arrowBtnActiveFn(currentPageIdx, leftArrowBtn, rightArrowBtn, pagerLiLength);
});