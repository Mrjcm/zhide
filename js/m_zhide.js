/*植德移动端js*/
$(function(){
	$('.nav_button').on('click',function(){
		if($(".nav").is(":hidden")){
		       $(".nav").show('fast');    //如果元素为隐藏,则将它显现
		}else{
		      $(".nav").hide('fast');     //如果元素为显现,则将其隐藏
		}
	})
// -jcm-
})