(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1022,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"7","54","18","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userNm",null,"7","41","18","203",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_TF_Text1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_deptNm",null,"7","127","18","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(투비소프트 교육팀)");
            obj.set_cssclass("sta_TF_Text2");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_logo","27","21","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","244","20","772","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_borderRadius("20px / 20px");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_top.form
            obj = new Layout("default","",0,0,this.div_top.form,function(p){});
            this.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1022,70,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Top.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = this.gfn_getApplication();
        this.fv_prefix = "TOP_";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Frame_Top_onload = function(obj,e)
        {
        	this.sta_userNm.set_text(nexacro.getEnvironmentVariable("ev_userName"));
        };

        this.btn_logout_onclick = function(obj,e)
        {
        	if(system.navigatorname == "nexacro")
        	{
        		var sMsgId = "confirm.logout";
        		var arrArg = "";
        		var sPopId = sMsgId;
        		var sMsgCallback = "fn_msgCallback";

        		// 변경된 내역을 저장 하시겠습니까?
        		this.gfn_alert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };

        this.fn_msgCallback = function (strId, strVal)
        {
        	if(strId == "confirm.logout"){
        		if(strVal)
        		{
        		    this.objApp.exit();
        		}
        	}
        };

        this.st_logo_onclick = function(obj,e)
        {
            this.objApp.av_VFrameSet1.set_separatesize("32,*,0");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_Top_onload,this);
            this.addEventHandler("onsize",this.Frame_Top_onsize,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.st_logo.addEventHandler("onclick",this.st_logo_onclick,this);
        };
        this.loadIncludeScript("Frame_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
