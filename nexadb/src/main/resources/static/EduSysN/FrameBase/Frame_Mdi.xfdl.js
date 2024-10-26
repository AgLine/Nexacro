(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Mdi");
            this.set_titletext("New Form");
            this.set_scrollbartype("none");
            this.set_cssclass("frm_bg");
            this.set_background("#f4f6fd");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_mdi","5","5",null,"30","113",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_MDI_Tab");
            obj.set_tabbuttonheight("30");
            obj.set_tabbuttongap("3");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_mdi);
            obj.set_text("Tabpage5");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_menuOpen","200","90","13","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("left menu open/close");
            obj.set_cssclass("btn_WF_menuClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"8","19","19","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MDI_AllX");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical",null,"8","19","19","24",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_Horz");
            this.addChild(obj.name, obj);

            obj = new Button("btn_horizontal",null,"8","19","19","44",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Verti");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade",null,"8","19","19","64",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_Min");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize",null,"8","19","19","84",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_Max");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_mdi.Tabpage5
            obj = new Layout("default","",0,0,this.tab_mdi.Tabpage5.form,function(p){});
            this.tab_mdi.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,35,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Mdi.xfdl", function() {
        this.objApp = this.gfn_getApplication();

        this.MdiFrame_onload = function(obj,e)
        {
        	//기본 tabpage delete
        	this.tab_mdi.removeTabpage(0);
        };

        // 탭 추가
        this.fn_addTab = function(sFormId, sMenuNm)
        {
        	this.tab_mdi.insertTabpage(sFormId, -1, "", sMenuNm);
        	this.objApp.av_VFrameSet1.set_separatesize("35,0,*");
        }

        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.postindex].name;

        	trace("tab_mdi_onchanged "  + sFormID);
        	this.objApp.av_WorkFrame[sFormID].form.setFocus();
        	this.objApp.av_VFrameSet1.set_separatesize("35,0,*");
        };

        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);
        	this.objApp.av_WorkFrame[sFormID].form.close();

            var nRow = this.objApp.gds_openForm.findRow("FORM_ID", sFormID);
            this.objApp.gds_openForm.deleteRow(nRow);
            if(obj.getTabpageCount() < 1){
                this.objApp.av_VFrameSet1.set_separatesize("35,*,0");
            }

        };

        this.fn_arrange = function(obj,e)
        {
            var strType = obj.name.replace("btn_", "");
        	var arrObj = this.objApp.av_WorkFrame.all;

        	switch(strType)
        	{
        		case "maximize" :
        			for(var i=0; i<arrObj.length; i++)
        			{
        				this.objApp.av_WorkFrame.frames[i].set_openstatus("maximize");
        				this.objApp.av_WorkFrame.frames[i].set_showtitlebar(false);
        				this.objApp.av_WorkFrame.frames[i].set_border("0px none");
        			}
        		break;
        		case "closeAll" :
         			for(var i=arrObj.length-1; i>=0; i--)
        			{
        				trace(arrObj[i].form.name);
         				arrObj[i].form.close();
         				this.tab_mdi.removeTabpage(i);
        			}
                    this.objApp.gds_openForm.clearData();
                    this.objApp.av_VFrameSet1.set_separatesize("35,*,0");
        		break;
        	    default :
        			for(var i=0; i<arrObj.length; i++)
        			{
        				this.objApp.av_WorkFrame.frames[i].set_openstatus("normal");
        				this.objApp.av_WorkFrame.frames[i].set_showtitlebar(true);
        				this.objApp.av_WorkFrame.frames[i].set_border("1px solid #5d6468");
        //				this.objApp.av_WorkFrame.frames[i].titlebar.closebutton.set_enable(false);
        			}
        			this.objApp.av_WorkFrame.arrange(strType);
        	    break;
        	}

        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.objApp.av_VFrameSet1.set_separatesize("35,*,0");
        };

        this.tab_mdi_onlbuttondown = function(obj,e)
        {
        	if(obj.getTabpageCount() > 0){
                this.objApp.av_VFrameSet1.set_separatesize("35,0,*");
            }
        };

        this.btn_menuOpen_onclick = function(obj,e)
        {
            if(this.objApp.av_HFrameSet.separatesize == "0,*"){
                this.objApp.av_HFrameSet.set_separatesize("200,*");
                obj.set_cssclass("btn_WF_menuClose");
            }
            else{
                this.objApp.av_HFrameSet.set_separatesize("0,*");
                obj.set_cssclass("btn_WF_menuOpen");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MdiFrame_onload,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onlbuttondown",this.tab_mdi_onlbuttondown,this);
            this.btn_menuOpen.addEventHandler("onclick",this.btn_menuOpen_onclick,this);
            this.btn_closeAll.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_vertical.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_horizontal.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_cascade.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_maximize.addEventHandler("onclick",this.fn_arrange,this);
        };
        this.loadIncludeScript("Frame_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
