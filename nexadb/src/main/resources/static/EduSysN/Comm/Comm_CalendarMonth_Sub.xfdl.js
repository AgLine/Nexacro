(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_CalendarMonth_Sub");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,225);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_POP_Title");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","5","45","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","70","45","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","135","45","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","5","90","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("04");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","70","90","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("05");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","135","90","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("06");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","5","135","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("07");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","70","135","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("08");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","135","135","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("09");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","5","180","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","70","180","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("11");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","135","180","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("12");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","6","11","21","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_calMonthPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"11","21","18","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_calMonthNext");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_year","58","5","85","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_min("1900");
            obj.set_max("2900");
            obj.set_value("2900");
            this.addChild(obj.name, obj);

            obj = new Static("sta_year","58","5",null,"30","57",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("9999");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,225,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_CalendarMonth_Sub.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_CalMMPdv (공통 월달력 Popup Div link 사용)
        *  @FileName 	Comm_CalMMPdv.xfdl
        *  @CreateDate 	2018.01.01
        *  @Desction    월달력, 년도 수정 가능
        */


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var sDate = this.parent.calObj.value;

            if(this.gfn_isNull(sDate)) sDate = this.gfn_getDate(); // 오늘 날자 세팅
            this.sta_year.set_text(sDate.substr(0,4));
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btn_prev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.sta_year.text);
        	this.sta_year.set_text(sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btn_next_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.sta_year.text);
        	this.sta_year.set_text(sDate + 1 );
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.sta_year.text + obj.name.substr(3);  //btn01, btn02...
        	this.parent.calObj.set_value(rtn);
        	this.parent.closePopup();
        };
        this.sta_year_onclick = function(obj,e)
        {
            this.spn_year.set_value(obj.text);
        	obj.set_visible(false);
            this.spn_year.set_visible(true);
        };

        this.spn_year_onchanged = function(obj,e)
        {
            this.sta_year.set_text(e.postvalue);
        	obj.set_visible(false);
            this.sta_year.set_visible(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn01.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn02.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn03.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn04.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn05.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn06.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn07.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn08.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn09.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn_prev.addEventHandler("onclick",this.pdvCal_btn_prev_onclick,this);
            this.btn_next.addEventHandler("onclick",this.pdvCal_btn_next_onclick,this);
            this.spn_year.addEventHandler("onchanged",this.spn_year_onchanged,this);
            this.spn_year.addEventHandler("onkillfocus",this.spn_year_onkillfocus,this);
            this.sta_year.addEventHandler("onclick",this.sta_year_onclick,this);
        };
        this.loadIncludeScript("Comm_CalendarMonth_Sub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
