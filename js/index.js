$(window).scroll(function() {
		$('section').each(function(){
	        if ($(window).scrollTop() >= $(this).offset().top - 2*$('header').height() - 2*$('footer').height()    ){
	            $('section').removeClass('current'); //убираем во всех секциях класс сurrent
	            $(this).addClass('current'); //и добавляем его сюда
	        }
    	});
    	if( $("section:last-of-type").hasClass('current') ){ //если находимя на последней секции
    		$(".footer__arow_next").hide() //убираем навигаионую стрелку вниз
    	}else{
			$(".footer__arow_next").show();
    	}
    	if( $("section:first-of-type").hasClass('current') ){
    		$(".footer__arow_prev").hide();	//убираем навигаионую стрелку вниз
    	}else{
			$(".footer__arow_prev").show();
    	}

});	
$('.footer__arow').click(function(){
	//клик может произойти на img и на btn, проверяем оба
	if( $(event.target).hasClass('footer__arow_next') ||
						$(event.target).parent().hasClass('footer__arow_next')){
		
		var scrollTo = $('section.current').next();
	}
	else if( $(event.target).hasClass('footer__arow_prev') ||
						$(event.target).parent().hasClass('footer__arow_prev') ){ 
		var scrollTo = $('section.current').prev();


	}

	$('html, body').animate({scrollTop: scrollTo.position().top}, 1000);

})


$('.header__btn_reg, .login__btn_reg').click(function(){
	$("body, html").addClass('open-modal');

	$(".popup-wrapper").show();
	$(".popup__content").hide()
	$(".popup__content_registration").show();
});

$('.header__btn_login, .registration__question').click(function(){
	$(".popup-wrapper").show();
	$("body, html").addClass('open-modal');
	$(".popup__content").hide()
	$(".popup__content_login").show();
});
$('.login__btn_forgot').click(function(){
	$(".popup__content").hide()
	$(".popup__content_forgot").show();
});
$('.popup__close, .login__submit, .forgot__submit, .activate__btn').click(function(){
	$("body, html").removeClass('open-modal');
	$(".popup-wrapper").hide();
});
$('.registration__input_submit, email__submit').click(function(){
	$(".popup__content").hide();
	$(".popup__content_finish-reg").show();
});
$('.registration__social-btn').click(function(){
	$(".popup__content").hide()
	$(".popup__content_email").show();
});
$('.finish-reg__btn').click(function(){
	$(".popup__content").hide()
	$(".popup__content_activate").show();
});


