/*植德移动端js*/
$(function(){
	$('.nav_button').on('click',function(){
		if($(".nav").is(":hidden")){
		       $(".nav").show('fast');    //如果元素为隐藏,则将它显现
		}else{
		      $(".nav").hide('fast');     //如果元素为显现,则将其隐藏
		}
	}).end();

	// 职业机会
	$(".jobList h5").on('click',function(){
		if ($(this).siblings('.recruit_require').is(":hidden") ) {
			$(this).siblings('.recruit_require').show('fast');
			$(this).css({'borderColor':'#fff'});
			$(this).parent('.outShow').css({'borderColor':'#C81432'});
			$(this).parent('.outShow').siblings('.outShow').css({'borderColor':'#fff'});
			$(this).parent('.outShow').siblings('.outShow').children('.recruit_require').hide('fast');
			$(this).parent('.outShow').siblings('.outShow').children('h5').css({'borderColor':'#C4AE78'});
		}else{
			$(this).siblings('.recruit_require').hide('fast');
			$(this).css({'borderColor':'#C4AE78'});
			$(this).parent('.outShow').css({'borderColor':'#fff'});
		}
	}).end();
// -jcm-
})
	/*------------------高德地图--------------*/
     //创建和初始化地图函数：
   
	/*---------------------------------------------------*/