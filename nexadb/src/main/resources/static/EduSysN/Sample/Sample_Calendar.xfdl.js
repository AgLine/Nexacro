(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Calendar");
            this.set_titletext("월/기간 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_calFromTo","10","90","317","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CalendarFromTo.xfdl");
            obj.getSetter("callbackfunc").set("fn_calCallback");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","160","171","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getFromDate","10","222","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Get From Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_fromDate","160","222","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getToDate","10","253","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Get To Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_toDate","160","253","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setFromDate","10","284","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Set From Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setFrom","160","284","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_maxlength("8");
            obj.set_value("20220101");
            obj.set_text("20220101");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setToDate","10","315","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Set To Date");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setTo","160","315","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maxlength("8");
            obj.set_value("20220120");
            obj.set_text("20220120");
            this.addChild(obj.name, obj);

            obj = new Div("div_calMonth","510","90","118","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_CalendarMonth.xfdl");
            obj.getSetter("callbackfunc").set("fn_calMMCallback");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getMonth","510","222","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get Month");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getMonth","660","222","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setMonth","510","253","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Set Month");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setMonth","660","253","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("6");
            obj.set_value("201905");
            obj.set_visible("true");
            obj.set_text("201905");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("기간 달력 / 월 달력");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","50","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("기간 달력");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","510","50","191","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("월 달력 - Div 이용");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_month","510","381","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.getSetter("uCalType").set("MM");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("uCallbackfunc").set("fn_calMonthCallback");
            obj.set_value("20220201");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enable","10","140","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("enable");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonly","160","140","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("readonly");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_essential","10","171","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("essential");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_initM","660","171","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Sub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enableM","510","140","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("enable");
            obj.set_cssclass("btn_WF_Sub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_readonlyM","660","140","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("readonly");
            obj.set_cssclass("btn_WF_Sub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_essentialM","510","171","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("essential");
            obj.set_cssclass("btn_WF_Sub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","510","341","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("월 달력 - User Property 이용");
            obj.set_cssclass("sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","510","422","215","82",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_month","10","10","120","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.getSetter("uCalType").set("MM");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("uCallbackfunc").set("fn_calMonthCallback");
            obj.set_value("20220201");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","40",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","0","80",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_calFromTo
            obj = new Layout("default","",0,0,this.div_calFromTo.form,function(p){});
            this.div_calFromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_calMonth
            obj = new Layout("default","",0,0,this.div_calMonth.form,function(p){});
            this.div_calMonth.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1028,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_calFromTo.form.calFrom","value","dsList","dtFrom");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_calFromTo.form.calTo","value","dsList","dtTo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_calMonth.form.calYM","value","dsList","dtMonth");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_CalendarFromTo.xfdl");
            this._addPreloadList("fdl","Comm::Comm_CalendarMonth.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_Calendar.xfdl", function() {
        /**
         *  교육 샘플 프로젝트
         *  @MenuPath	Sample > 월/기간 달력
         *  @FileName	Sample_Calendar.xfdl
         *  @Creator	education
         *  @CreateDate	2020.01.01
         *  @Desction   월/기간 달력
         ************** 소스 수정 이력 ***********************************************
         *  date          	Modifier                Description
         *******************************************************************************
         *  2020.01.01     	education 	            최초 생성
         *******************************************************************************
         */

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	var today = this.gfn_getDate("date");
        };

        /**
         * 기간 달력 Enable 처리
         * fn_setEnable() 함수 호출
         * @example: this.div_cal.form.fn_setEnable(false)
        */
        this.fv_enable = true;
        this.btn_enable_onclick = function(obj,e)
        {
            this.fv_enable = (this.fv_enable ? false: true);
            this.div_calFromTo.form.fn_setEnable(this.fv_enable);
        };

        /*
        * 기간 달력 Readonly 처리
        * fn_setReadonly() 함수 호출
        * @example: this.div_cal.form.fn_setReadonly(false)
        */
        this.fv_readonly = false;
        this.btn_readonly_onclick = function(obj,e)
        {
            this.fv_readonly = (this.fv_readonly ? false: true);
            this.div_calFromTo.form.fn_setReadonly(this.fv_readonly);
        };

        /*
        * 기간 달력 필수 표시
        * fn_setEssential() 함수 호출
        * @example: this.div_cal.form.fn_setEssential(false)
        */
        this.fv_essential = false;
        this.btn_essential_onclick = function(obj,e)
        {
            this.fv_essential = (this.fv_essential ? false: true);
            this.div_calFromTo.form.fn_setEssential(this.fv_essential);
        };

        /*
        * 기간 달력 초기화
        * fn_init() 함수 호출
        * @example: this.div_cal.form.fn_init()
        */
        this.btn_init_onclick = function(obj,e)
        {
        	this.div_calFromTo.form.fn_init();
        }

        /*
        * 기간 달력 시작일자 가져오기
        * fn_getFromDate() 함수 호출
        * @example: this.div_cal.form.fn_getFromDate()
        */
        this.btn_getFromDate_onclick = function(obj,e)
        {
            var sDate = this.div_calFromTo.form.fn_getFromDate();
            this.edit_fromDate.set_value(sDate);
        };

        /*
        * 기간 달력 종료일자 가져오기
        * fn_getToDate() 함수 호출
        * @example: this.div_cal.form.fn_getToDate()
        */
        this.btn_getToDate_onclick = function(obj,e)
        {
            var sDate = this.div_calFromTo.form.fn_getToDate();

            this.edit_toDate.set_value(sDate);
        };

        /*
        * 기간 달력 시작일자 설정하기
        * fn_setFromDate() 함수 호출
        * @example: this.div_cal.form.fn_setFromDate("20190101")
        */
        this.btn_setFromDate_onclick = function(obj,e)
        {
            var sDate   = this.edt_setFrom.value;
            this.div_calFromTo.form.fn_setFromDate(sDate);
        };

        /*
        * 기간 달력 종료일자 설정하기
        * fn_setToDate() 함수 호출
        * @example: this.div_cal.form.fn_setToDate("20190102")
        */
        this.btn_setToDate_onclick = function(obj,e)
        {
            var sDate   = this.edt_setTo.value;
            this.div_calFromTo.form.fn_setToDate(sDate);

        };

        /*
        * 기간 달력 콜백함수
        * Div User Prop : callbackfunc
        */
        this.fn_calCallback = function(objId, sFromValue, sToValue)
        {
            trace(objId + " : "  + sFromValue + " : "  + sToValue);
        }


        /*
        * 월 달력 Enable 처리
        * fn_setEnable() 함수 호출
        * @example: this.div_calMonth.form.fn_setEnable(false)
        */
        this.fv_enableM = true;
        this.btn_enableM_onclick = function(obj,e)
        {
            this.fv_enableM = (this.fv_enableM ? false: true);
            this.div_calMonth.form.fn_setEnable(this.fv_enableM);

        };

        /*
        * 월 달력 Readonly 처리
        * fn_setReadonly() 함수 호출
        * @example: this.div_calMonth.form.fn_setReadonly(false)
        */
        this.fv_readonlyM = false;
        this.btn_readonlyM_onclick = function(obj,e)
        {
            this.fv_readonlyM = (this.fv_readonlyM ? false: true);
            this.div_calMonth.form.fn_setReadonly(this.fv_readonlyM);
        };

        /*
        * 월 달력 필수 표시
        * fn_setEssential() 함수 호출
        * @example: this.div_calMonth.form.fn_setEssential(false)
        */
        this.fv_essentialM = false;
        this.btn_essentialM_onclick = function(obj,e)
        {
        	this.fv_essentialM = (this.fv_essentialM ? false: true);
            this.div_calMonth.form.fn_setEssential(this.fv_essentialM);
        };

        /*
        * 월 달력 초기화
        * fn_init() 함수 호출
        * @example: this.div_calMonth.form.fn_init()
        */
        this.btn_initM_onclick = function(obj,e)
        {
        	this.div_calMonth.form.fn_init();

        };

        /*
        * 월 달력 월 Get
        * fn_getValue() 함수 호출
        * @example: this.div_calMonth.form.fn_getValue()
        */
        this.btn_getMonth_onclick = function(obj,e)
        {
        	var	sDate = this.div_calMonth.form.fn_getValue();
            this.edt_getMonth.set_value(sDate);
        };

        /*
        * 월 달력 월 Set
        * fn_getFromDate() 함수 호출
        * @example: this.div_calMonth.form.fn_setValue()
        */
        this.btn_setMonth_onclick = function(obj,e)
        {
        	var	sDate = this.edt_setMonth.value;
        	this.div_calMonth.form.fn_setValue(sDate);
        };

        /*
        * 월력 콜백함수: Div로 적용시
        * Div User Prop : callbackfunc
        */
        this.fn_calMMCallback = function(objId, sMonth)
        {
            trace(objId + " : "  + sMonth);
        }

        /*
        * 월력 콜백함수: Calendar User Prop로 적용시
        * Calendar User Prop : callbackfunc
        */
        this.fn_calMonthCallback = function(objId, sMonth)
        {
            trace(objId + " : " + sMonth);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_init.addEventHandler("onclick",this.btn_init_onclick,this);
            this.btn_getFromDate.addEventHandler("onclick",this.btn_getFromDate_onclick,this);
            this.btn_getToDate.addEventHandler("onclick",this.btn_getToDate_onclick,this);
            this.btn_setFromDate.addEventHandler("onclick",this.btn_setFromDate_onclick,this);
            this.btn_setToDate.addEventHandler("onclick",this.btn_setToDate_onclick,this);
            this.btn_getMonth.addEventHandler("onclick",this.btn_getMonth_onclick,this);
            this.btn_setMonth.addEventHandler("onclick",this.btn_setMonth_onclick,this);
            this.cal_month.addEventHandler("onchanged",this.cal_month_onchanged,this);
            this.btn_enable.addEventHandler("onclick",this.btn_enable_onclick,this);
            this.btn_readonly.addEventHandler("onclick",this.btn_readonly_onclick,this);
            this.btn_essential.addEventHandler("onclick",this.btn_essential_onclick,this);
            this.btn_initM.addEventHandler("onclick",this.btn_initM_onclick,this);
            this.btn_enableM.addEventHandler("onclick",this.btn_enableM_onclick,this);
            this.btn_readonlyM.addEventHandler("onclick",this.btn_readonlyM_onclick,this);
            this.btn_essentialM.addEventHandler("onclick",this.btn_essentialM_onclick,this);
            this.Div00.form.cal_month.addEventHandler("onchanged",this.cal_month_onchanged,this);
        };
        this.loadIncludeScript("Sample_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
