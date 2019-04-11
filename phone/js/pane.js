(function($) {
    uap.button("#nav-left", "btn-act",
    function() {});
    uap.button("#nav-right", "btn-act",
    function() {});

    uap.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent_grfUjb").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent_grfUjb").trigger("more", this);
        }).reload();
    })

    var tabview_Tab_96bNbc = uap.tab({
        selector: $("#Tab_96bNbc"),
        hasIcon: true,
        hasAnim: false,
        hasLabel: true,
        hasBadge: false,
        index: 0,
        data: [{
            "label": "首页",
            "icon": "fa-home"
        },
        {
            "label": "个人",
            "icon": "fa-user"
        },
        {
            "label": "分类",
            "icon": "fa-list"
        },
        {
            "label": "搜索",
            "icon": "fa-search"
        }]
    });
    
    tabview_Tab_96bNbc.on("click",function(obj,index){
    	$(".tab_pane").removeClass("active");
    	$($(".tab_pane")[index]).addClass("active");

    })
})($);