

/*$('.pushpin-demo-nav').each(function() {
var $this = $(this);
var $target = $('#' + $(this).attr('blue'));
$this.pushpin({
  top: $target.offset().top,
  bottom: $target.offset().top + $target.outerHeight() - $this.height()
});
});*/


$(document).ready(function(){
    $('.target').pushpin({
      top: 80,
      bottom: 600,
      offset: 40
    });
});

$('.tabs-wrapper .row').pushpin('remove');

var elem = document.querySelector('.parallax');
 var instance = M.Parallax.init(elem, options);

 // Or with jQuery

 $(document).ready(function(){
   $('.parallax').parallax();
 });
