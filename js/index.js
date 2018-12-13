$(function(){
	
	var mySwiper = new Swiper ('.swiper-container', {
//	    direction: 'vertical', // 垂直切换选项
	    loop: true, // 循环模式选项
	    
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    

	    // 如果需要滚动条
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    },
	  }) 
	
	
	$(' #titles a').on('mouseenter',function(){
		var indexs  = $(this).index();
		console.log(indexs);
		$(this).siblings().removeClass('hover');
		$(this).addClass('hover');
		
		var m  = $('.titles_list');
		console.log(m);
		$('.titles_list').eq(indexs).siblings().removeClass('show');
		$(' .titles_list').eq(indexs).addClass('show');
		
	});
	
	$('.department_title a').on('mouseenter',function(){
		console.log('sdadsfasdf');
		var indexs = $(this).index();
		$(this).siblings().removeClass('hover');
		$(this).addClass('hover');
		$('.department_list').eq(indexs).siblings().removeClass('shows');
		$('.department_list').eq(indexs).addClass('shows');
	})
	
	
})


