var current_fs, next_fs, previous_fs; //fieldsets
var animating;
	
	
	var next = $('.next');
	var prev = $('.previous');


	next.click(function () {
	

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		current_fs.removeClass('block');
		next_fs.addClass('block');
		$(".nav-item .nav-link").eq($(".a10contents").index(current_fs)).removeClass("active");
		$(".nav-item .nav-link").eq($(".a10contents").index(next_fs)).addClass("active");
	});


	prev.click(function () {
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		current_fs.removeClass('block');
		previous_fs.addClass('block');
		$(".nav-item .nav-link").eq($(".a10contents").index(current_fs)).removeClass("active");
		$(".nav-item .nav-link").eq($(".a10contents").index(previous_fs)).addClass("active");
	});
























console.log('ok');