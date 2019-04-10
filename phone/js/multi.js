(function($) {
	var status=0;
	
    uap.button("#nav-left", "btn-act",
    function() {
    	status=(status?0:1);
    	$("#Page_1")
    	.css("box-shadow","rgba(120,120,120,0.298039) -10px 0px 8px")
    	.animate({
    		"translateX":status?"70%":"0%"
    	})
    	$("#Header").animate({
    		"translateX":status?"70%":"0%"
    	})
    	
    	
    });
    uap.button("#nav-right", "btn-act",
    function() {
    	status=(status?0:1);
    	$("#Page_1")
    	.css("box-shadow","rgba(120,120,120,0.298039) 10px 0px 8px")
    	.animate({
    		"translateX":status?"-70%":"0%"
    	})
    	$("#Header").animate({
    		"translateX":status?"-70%":"0%"
    	})
    });

})($);