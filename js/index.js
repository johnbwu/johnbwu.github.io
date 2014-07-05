+function ($) {
  $(window).on('load', function () {
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },6000);
    });
    $('.skillbar').tooltip();
});
}
