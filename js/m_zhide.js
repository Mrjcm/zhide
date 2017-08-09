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
// 律师详情页点击更多增加数据
	$('.moreButton').on('click',function(){
		if ($(this).hasClass('link')) {
			$(this).removeClass('link');
			$('.more .add').remove();
			$(this).html('<i style="margin:0 5px 0 0;" class="fa fa-link" aria-hidden="true"></i>更多');
			$(this).css({'color':'#76442F'});
		}else{
			$(this).addClass('link');
			var str='<li class="add">1.新增的信息——信托业务领域和资管业务领域</li>'+
				    '<li class="add">1.新增的信息——信托业务领域和资管业务领域</li>'+
				    '<li class="add">1.新增的信息——信托业务领域和资管业务领域</li>'+
				    '<li class="add">1.新增的信息——信托业务领域和资管业务领域</li>'+
				    '<li class="add">1.新增的信息——信托业务领域和资管业务领域</li>';
				$(".more").append(str);
				$(this).html('<i style="margin:0 5px 0 0;" class="fa fa-link" aria-hidden="true"></i>返回');
				$(this).css({'color':'#C81432'});
		}
	})
// -jcm-
})