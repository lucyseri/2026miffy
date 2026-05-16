//mansonry plugin
$('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer',
  columnWidth: '.grid-sizer',
  percentPosition: true
})
//more btn
const moreBtn = document.querySelector('main section.img-sec .inner span.more-btn');
const secinner = document.querySelector('main section.img-sec .inner');
moreBtn.addEventListener('click', function(e){
  if(e.target == moreBtn) secinner.classList.add('more');
});