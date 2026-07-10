//mansonry plugin
$('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  columnWidth: '.grid-sizer',
  percentPosition: true
})
//more btn
const gridItems = document.querySelectorAll('.grid-item a');
const moreBtn = document.querySelector('main section.img-sec .inner button.more-btn');
const secinner = document.querySelector('main section.img-sec .inner');
let showIndex = 8;
let showItemSetTimeout;
let moreTrigger = false;
function indexSetFn(){
  if(window.innerWidth>1024){
    showIndex=8;
  }else if(window.innerWidth<=1024 && window.innerWidth>440){
    showIndex=3;
  }else if(window.innerWidth<=440){
    showIndex=12;
  }
}
function itemShowFn(){
  if(!moreTrigger){
    for(let i=0;i<gridItems.length;i++){
      gridItems[i].setAttribute('tabindex', '-1');
    }
    for(let i=0;i<showIndex;i++){
      gridItems[i].setAttribute('tabindex', '0');
    }
  }else{
    for(let i=0;i<gridItems.length;i++){
      gridItems[i].setAttribute('tabindex', '0');
    }
  }
};
window.addEventListener('DOMContentLoaded', (e)=>{
  indexSetFn();
  itemShowFn();
});
window.addEventListener('resize', function(){
  clearTimeout(showItemSetTimeout);
  showItemSetTimeout = setTimeout(indexSetFn(), 300);
  itemShowFn();
});
moreBtn.addEventListener('click', function(e){
  if(e.target == moreBtn) secinner.classList.add('more');
  moreTrigger = true;
  itemShowFn();
  gridItems[showIndex-1].focus();
});