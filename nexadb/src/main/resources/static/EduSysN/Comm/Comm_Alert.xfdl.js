(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_Alert");
            this.set_titletext("알림창");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("uWord").set("popup.notice");
            obj.set_cssclass("sta_WF_msg_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","135",null,"80","30",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16","10",null,null,"1","10","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_msg_line");
            this.addChild(obj.name, obj);

            obj = new Static("sta_icon","20","48","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_msg_alert");
            this.addChild(obj.name, obj);

            obj = new Static("st_msg","70","20","266","90",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_Alert.xfdl", function() {


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	var sContents = this.getOwnerFrame().paramContents;
        	this.fn_msgSet(sContents);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fn_msgSet = function (sMsgContent)
        {
        	this.st_msg.set_text(sMsgContent);
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btn_ok_onclick = function(obj,e)
        {
        	this.close(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("Comm_Alert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
