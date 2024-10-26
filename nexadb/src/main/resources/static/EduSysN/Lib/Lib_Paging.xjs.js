//XJS=Lib_Paging.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.onStaticClick = function(obj, e) {
            // 모든 Static 컴포넌트의 배경색을 기본값으로 되돌림
            for (var i = 1; i <= 10; i++) {
                var staticID = "page" + i;
                var staticComp = this[staticID];
                staticComp.set_color("black");  // 기본 배경색
            }

            // 클릭된 Static 컴포넌트만 파란색으로 변경
        	currentIndex = parseInt(obj.name.replace("page", ""));
        //	trace("Current Static Index: " + currentIndex);
            obj.set_color("blue");
        	this.fn_paging(obj.text);
        };

        this.btn_right_onclick = function(obj,e)
        {
        	if(currentIndex%10 == 0){
        		return;
        	}

            var currentStatic = this["page" + currentIndex];
            currentStatic.set_color("black");


            currentIndex++;

            var nextStatic = this["page" + currentIndex];
            nextStatic.set_color("blue");
        	this.fn_paging(currentIndex);
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
