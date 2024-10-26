(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Work");
            this.set_cssclass("frm_WF_MainBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,571);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_title","5","0",null,"40","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("FrameBase::Frame_WorkTitle.xfdl");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","5","div_title:0",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_title
            obj = new Layout("default","",0,0,this.div_title.form,function(p){});
            this.div_title.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_work
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,571,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_MainBg");

                p.div_title.set_taborder("1");
                p.div_title.set_url("FrameBase::Frame_WorkTitle.xfdl");
                p.div_title.set_text("");
                p.div_title.set_background("#ffffff");
                p.div_title.move("5","0",null,"40","5",null);

                p.div_work.set_taborder("0");
                p.div_work.set_background("#ffffff");
                p.div_work.move("5","div_title:0",null,null,"5","5");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Frame_WorkTitle.xfdl");
        };
        
        // User Script
        this.registerScript("Frame_Work.xfdl", function() {
        this.objApp = this.gfn_getApplication();
        this.fv_formId  = "";
        this.fv_menuId  = "";
        this.fv_menuNm  = "";
        this.fv_formUrl = "";

        this.Frame_Work_onload = function(obj,e)
        {
            var objOwnerFrame = this.getOwnerFrame();
            this.fv_formId  = objOwnerFrame.arguments["formId"];
            this.fv_menuId  = objOwnerFrame.arguments["menuId"];
            this.fv_menuNm  = objOwnerFrame.arguments["menuNm"];
            this.fv_formUrl = objOwnerFrame.arguments["formUrl"];

            this.div_work.set_url(this.fv_formUrl);

            var strAuth = this.objApp.gds_menu.lookup("MENU_ID", this.fv_menuId, "MENU_AUTH");
        //     if(this.gfn_isNull(strAuth) || strAuth == "N"){
        // 		// 공통 영역 사용 안함
        // 		this.div_title.set_height(1);
        //     }
        // 	else{
        // 		// 공통 버튼 설정
        // 		this.div_title.form.fn_setAuthBtn(strAuth);
        // 		this.div_title.form.st_title.set_text(this.fv_menuNm);
        // 	}

            this.Frame_Work_onsize();
        };

        // 화면 활성화 시킬 경우 해당 화면의 Tabpage 선택
        this.Frame_Work_onactivate = function(obj,e)
        {
            this.fn_tabActivateClose(this.fv_formId, "ACTIVATE");
        };

        // 화면에서 직접 Close 시 Tabpage 제거
        this.Frame_Work_onclose = function(obj,e)
        {
            this.fn_tabActivateClose(this.fv_formId, "CLOSE");
        };

        this.fn_tabActivateClose = function(sFormId, sType)
        {
            var objFrame = this.objApp.av_MdiFrame;
        	var nCnt = objFrame.form.tab_mdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(objFrame.form.tab_mdi.tabpages[i].name == sFormId)
        		{
                    if(sType == "ACTIVATE"){
                        objFrame.form.tab_mdi.set_tabindex(i);
                    }
                    else if(sType == "CLOSE"){
                        objFrame.form.tab_mdi.removeTabpage(i);
                        var nRow = this.objApp.gds_openForm.findRow("FORM_ID", sFormId);
                        this.objApp.gds_openForm.deleteRow(nRow);
                        if(nCnt == 1){
                            this.objApp.av_VFrameSet1.set_separatesize("30,*,0");
                        }
                    }
                    return;
        		}
        	}
        }

        this.Frame_Work_onsize = function(obj,e)
        {
        	this.resetScroll();
        };


        this.Button00_onclick = function(obj,e)
        {
        	trace(this.div_work.getOffsetWidth() + " : " + this.div_work.getOffsetHeight());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_Work_onload,this);
            this.addEventHandler("onactivate",this.Frame_Work_onactivate,this);
            this.addEventHandler("onclose",this.Frame_Work_onclose,this);
            this.addEventHandler("onsize",this.Frame_Work_onsize,this);
        };
        this.loadIncludeScript("Frame_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
