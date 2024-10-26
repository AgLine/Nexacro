(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Left");
            this.set_titletext("New Form");
            this.set_background("#f4f6fd");
            if (Form == this.constructor)
            {
                this._setFormPosition(230,663);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_left","5","34",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu","0","0",null,null,"0","0",null,null,null,null,this.div_left.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_cssclass("grd_LF_Menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"177\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.div_left.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_left.form
            obj = new Layout("default","",0,0,this.div_left.form,function(p){});
            this.div_left.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",230,663,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Left.xfdl", function() {
        this.objApp = this.gfn_getApplication();

        this.Frame_Left_onload = function(obj,e)
        {

        };

        this.fn_changeMenu = function(auth)
        {
        	var strId    = "svcMenu";
        	var strUrl   = "svc::menu";
        	var inData   = "";
        	var outData  = "gds_menu=out_menu";
        	var param   = "auth="+auth;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        // 	this.objApp.gds_menu.set_enableevent(false);
        // 	var sExpr = "";
        // 	if(auth == 'ADMIN'){
        // 		var sExpr = "MENU_AUTH != 'SYS_ADMIN'";
        // 	}else if(auth == 'USER'){
        // 		var sExpr = "MENU_AUTH == 'USER'";
        // 	}
        // 	trace("sExpr::" +sExpr);
        // 	this.objApp.gds_menu.filter(sExpr);
        //
        // 	this.objApp.gds_menu.set_enableevent(true);
        };


        this.div_left_grd_menu_oncelldblclick = function(obj,e)
        {

        	var objDs = obj.getBindDataset();
            var arrArg = [];

        	this.gfn_openForm(objDs, e.row, arrArg);

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_Left_onload,this);
            this.div_left.form.grd_menu.addEventHandler("oncelldblclick",this.div_left_grd_menu_oncelldblclick,this);
        };
        this.loadIncludeScript("Frame_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
