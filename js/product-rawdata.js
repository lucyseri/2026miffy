function ProductObj(a, b, c, d, e, f){
  this.imgSrc=a;
  this.category=b;
  this.name=c;
  this.originPrice=d;
  this.finPrice=e;
  this.date=f;
};
ProductObj.prototype.liCreatFn = function(){
  if(this.originPrice == this.finPrice){
    return `<li>
    <a href="product-detail.html" target="_blank" class="product-list">
    <div class="img-thum">
    <img src="img/product/${this.imgSrc}" alt="${this.name}">
    </div>
    <div class="info">
    <p class="category">${this.category}</p>
    <p class="name">${this.name}</p>
    <p class="price">
    <span class="final-price">${Number(this.finPrice).toLocaleString('ko-KR')}원</span>
    </p>
    </div>
    </a>
    </li>`
  }else{
    return `<li>
    <a href="product-detail.html" target="_blank" class="product-list">
    <div class="img-thum">
    <img src="img/product/${this.imgSrc}" alt="${this.name}">
    </div>
    <div class="info">
    <p class="category">${this.category}</p>
    <p class="name">${this.name}</p>
    <p class="price">
    <span class="original-price">${Number(this.originPrice).toLocaleString('ko-KR')}원</span>
    <span class="final-price">${Number(this.finPrice).toLocaleString('ko-KR')}원</span>
    </p>
    </div>
    </a>
    </li>`
  }
};
ProductObj.prototype.productListCreatFn = function(){
  if(this.originPrice == this.finPrice){
    return `<a href="product-detail.html" target="_blank" class="product-list">
    <div class="img-thum">
    <img src="img/product/${this.imgSrc}" alt="${this.name}">
    </div>
    <div class="info">
    <p class="category">${this.category}</p>
    <p class="name">${this.name}</p>
    <p class="price">
    <span class="final-price">${Number(this.finPrice).toLocaleString('ko-KR')}원</span>
    </p>
    </div>
    </a>`
  }else{
    return `<a href="product-detail.html" target="_blank" class="product-list">
    <div class="img-thum">
    <img src="img/product/${this.imgSrc}" alt="${this.name}">
    </div>
    <div class="info">
    <p class="category">${this.category}</p>
    <p class="name">${this.name}</p>
    <p class="price">
    <span class="original-price">${Number(this.originPrice).toLocaleString('ko-KR')}원</span>
    <span class="final-price">${Number(this.finPrice).toLocaleString('ko-KR')}원</span>
    </p>
    </div>
    </a>`
  }
};
export function sortedDataFn(data, startIdx){
  let productConUlHtml='';
  let endIdx = '';
  if((data.length-1)-startIdx<11){
    endIdx = data.length-1;
  }else if((data.length-1)-startIdx>=11){
    endIdx = startIdx + 11;
  }
  for(let i = 0; i<=endIdx - startIdx;i++){
    let iStartIdx = i + startIdx;
    productConUlHtml+=data[iStartIdx].liCreatFn();
  };
  return productConUlHtml;
};
export function storePageDataFn(data){
  let productListHtml ='';
  for(let i=0;i<4;i++){
    productListHtml+=data[i].productListCreatFn();
  }
  return productListHtml;
};
export const classicData = [
  new ProductObj('classic-product-0.png', '미피 클래식', '미피 미니 자수파우치', '15000', '12000', '2025/11/1/00:00:00'),
  new ProductObj('classic-product-1.png', '미피 클래식', '미피 차량용 방향제', '14900', '14900', '2025/12/1/00:00:00'),
  new ProductObj('classic-product-2.png', '미피 클래식', '미피 모니터 피규어', '9800', '8900', '2025/9/1/00:00:00'),
  new ProductObj('classic-product-3.png', '미피 클래식', '미피 드림 키링인형 초승달', '15000', '12000', '2025/8/1/00:00:00'),

  new ProductObj('classic-product-4.png', '미피 클래식', '미피 풍선 피규어', '15000', '15000', '2025/7/1/00:00:00'),
  new ProductObj('classic-product-5.png', '미피 클래식', '미피 잠자는 멜라니 얼굴키링 (브라운)', '11000', '7000', '2025/8/1/00:00:00'),
  new ProductObj('classic-product-6.png', '미피 클래식', '미피 모니터 방향제', '21000', '19900', '2025/9/1/00:00:00'),
  new ProductObj('classic-product-7.png', '미피 클래식', '미피 슬림 파우치', '10000', '10000', '2025/5/1/00:00:00'),
  new ProductObj('classic-product-8.png', '미피 클래식', '미피 빅헤어 클립', '5000', '5000', '2025/4/1/00:00:00'),
  new ProductObj('classic-product-9.png', '미피 클래식', '미피 젤리 파우치 키링', '14000', '14000', '2025/6/1/00:00:00'),
  new ProductObj('classic-product-10.png', '미피 클래식', '미피 세안밴드', '12000', '12000', '2025/3/1/00:00:00'),
  new ProductObj('classic-product-11.png', '미피 클래식', '미피 시팅 가방고리 인형 (오렌지)', '15000', '12000', '2025/2/1/00:00:00'),
  new ProductObj('classic-product-12.png', '미피 클래식', '미피 유령 미피 인형', '24000', '22000', '2025/1/1/00:00:00'),
];
export const seoulData = [
  new ProductObj('seoul-product-0.png', '서울 스토어', '서울 데님 에디션 인형 2종', '42000', '35000', '2026/1/1/00:00:00'),
  new ProductObj('seoul-product-3.png', '서울 스토어', '서울 데님 랜덤 틴뱃지 13종', '8500', '7800', '2026/1/2/00:00:00'),
  new ProductObj('seoul-product-2.png', '서울 스토어', '서울 데님 에코백 3종', '9800', '8900', '2026/1/3/00:00:00'),
  new ProductObj('seoul-product-1.png', '서울 스토어', '서울 데님 에디션 인형키링 3종', '18000', '16000', '2026/1/4/00:00:00')
];
export const gyeongjuData = [
  new ProductObj('gyeongju-product-0.png', '경주 스토어', '경주 찰보리스빵 에디션 파우치키링', '13000', '13000', '2025/11/1/00:00:00'),
  new ProductObj('gyeongju-product-1.png', '경주 스토어', '경주 찰보리스빵 에디션 멜라니 인형키링', '18000', '16000', '2025/11/2/00:00:00'),
  new ProductObj('gyeongju-product-2.png', '경주 스토어', '미피 석굴암 방울 키링', '5600', '5600', '2025/11/3/00:00:00'),
  new ProductObj('gyeongju-product-3.png', '경주 스토어', '반가사유상 미피 인형', '42000', '35000', '2025/11/4/00:00:00')
];
export const busanData = [
  new ProductObj('busan-product-0.png', '부산 카페', '세일러 바바라 인형 키링', '18000', '16000', '2026/2/1/00:00:00'),
  new ProductObj('busan-product-1.png', '부산 카페', '자갈치 에디션 미피인형', '45000', '45000', '2026/2/2/00:00:00'),
  new ProductObj('busan-product-2.png', '부산 카페', '자갈치 에디션 키링인형(3종)', '18000', '18000', '2026/2/3/00:00:00'),
  new ProductObj('busan-product-3.png', '부산 카페', '트래블러 에디션 키링인형', '18000', '16000', '2026/2/4/00:00:00')
];
export const geojeData = [
  new ProductObj('geoje-product-0.png', '거제 카페', '거제 미피 몽돌해수욕장 에디션 파우치', '12000', '12000', '2026/4/1/00:00:00'),
  new ProductObj('geoje-product-1.png', '거제 카페', '거제 미피 몽돌해수욕장 에디션 인형', '18000', '18000', '2026/4/2/00:00:00'),
  new ProductObj('geoje-product-2.png', '거제 카페', '거제 미피 동계올림픽 에디션 키링', '18000', '16000', '2026/4/3/00:00:00'),
  new ProductObj('geoje-product-3.png', '거제 카페', '거제 미피 수국에디션 키링', '18000', '16000', '2026/4/4/00:00:00')
];
export const jejuData = [
  new ProductObj('jeju-product-0.png', '제주 스토어', '제주농부미피', '18000', '18000', '2026/3/1/00:00:00'),
  new ProductObj('jeju-product-1.png', '제주 스토어', '제주해녀미피', '18000', '18000', '2026/3/2/00:00:00'),
  new ProductObj('jeju-product-2.png', '제주 스토어', '제주미피 랜덤피규어', '9800', '9800', '2026/3/3/00:00:00'),
  new ProductObj('jeju-product-3.png', '제주 스토어', '제주 한정 멜라니키링', '8900', '7800', '2026/3/4/00:00:00')
];
//pager length
export function pagerLengthFn(data){
  if(data.length % 12 == 0){
    return data/12;
  }else{
    return Math.floor(data.length/12) + 1;
  }
};
//pager li create
export function pagerLiCreateFn(num){
  let html ='';
  for(let i=0;i<num;i++){
    html += `<li>${i+1}</li>`;
  }
  return html;
};
//pager li active
export function pagerActiveFn(num, li){
  li.forEach((el, idx)=>{
    if(idx==num){
      el.classList.add('active');
    }else{
      el.classList.remove('active');
    }
  });
};
//pager arrow btn active
export function arrowBtnActiveFn(idx, left, right, length){
  if(idx<=0){
    left.classList.add('inactive');
  }else {
    left.classList.remove('inactive');
  }
  if(idx>=length-1){
    right.classList.add('inactive');
  }else{
    right.classList.remove('inactive');
  }
};