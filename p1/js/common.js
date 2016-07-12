function initTab(headSelector,bodySelector,onClass){
	var $nav_li=$(headSelector);
	$nav_li.mouseover(function(){
		$(this).addClass(onClass)
			   .siblings().removeClass(onClass);
			   
	var index=$nav_li.index(this);
	$(bodySelector)
			.eq(index).show()
			.siblings().hide();
	});
}

