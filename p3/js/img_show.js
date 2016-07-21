function imgShow(imgContainer,imgHide){
	var $img_div=$(imgContainer);
	var $img_hid=$(imgHide);
	
	$img_div.hover(function(){
		$img_hid.show("slow")
		        .siblings().hide();
	});
	
}
