//XJS=Lib_Util.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.lfn_getFirstDay = function ()
        {
        	var objDate = new Date();
        	//01일
        	var sDate  = objDate.getFullYear().toString();//년
        	sDate += (objDate.getMonth()+1).toString().padLeft(2, "0");//월
        	sDate += "01";//일

        	return sDate;
        };

        this.lfn_getToday = function ()
        {
        	var objDate = new Date();
        	//오늘날짜
        	sDate  = objDate.getFullYear().toString();
        	sDate += (objDate.getMonth()+1).toString().padLeft(2, "0");
        	sDate += objDate.getDate().toString().padLeft(2, "0");

        	return sDate;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
