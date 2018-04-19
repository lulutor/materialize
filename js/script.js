

/*$('.pushpin-demo-nav').each(function() {
var $this = $(this);
var $target = $('#' + $(this).attr('blue'));
$this.pushpin({
  top: $target.offset().top,
  bottom: $target.offset().top + $target.outerHeight() - $this.height()
});
});*/

//pushpin
$(document).ready(function(){
    $('.target').pushpin({
      top: 80,
      bottom: 600,
      offset: 40
    });
});


 // parallax jQuery

 $(document).ready(function(){
   $('.parallax').parallax();
 });
