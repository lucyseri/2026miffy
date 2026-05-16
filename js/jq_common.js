$('#header-include').load("html/header.html", function(){
  $('header .top-menu .goto-menu a.menu').click(function(){
    $('header nav.slide-menu').addClass('active');
    return false;
  })
  $('header nav.slide-menu span.close-btn').click(function(){
    $('header nav.slide-menu').removeClass('active');
  });
  $('.depth1 > li:not(:has(ul.depth2)) > .depth1-txt span.arrow-btn').hide();
  $('.depth1 > li .depth1-txt span.arrow-btn').click(function(){
    $(this).parent().parent().toggleClass('down');
    if($(this).parent().parent().hasClass('down')){
      $(this).parent().parent().find('ul.depth2').stop().slideDown(300);
    }else{
      $(this).parent().parent().find('ul.depth2').stop().slideUp(300);
    }
  });
});
$('#footer-include').load("html/footer.html", function(){});