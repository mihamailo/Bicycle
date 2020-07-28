function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

	$('.icon-menu').click(function(event) {
		$(this).toggleClass('active');
		$('.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

	 $(document).ready(function(){
			$('.slider__body').slick({
				arrows:false,
				dots:true,
				adaptiveHeight: false, /*Адаптирует под высоту активной картинки*/
				slidesToShow: 1, 
				slidesToScroll: 1,
				autoplaySpeed:1000,
				accessibility: false,
			});
	});
