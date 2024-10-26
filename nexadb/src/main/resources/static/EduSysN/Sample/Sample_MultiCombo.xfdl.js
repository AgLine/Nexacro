(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_MultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NAME\">Accounting Team</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NAME\">Finances Team</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NAME\">Human Resource Team</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NAME\">Marketing Team</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NAME\">Sales Team</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"CODE_NAME\">Consulting  Team</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"CODE_NAME\">Design Team</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"CODE_NAME\">Mobile Team</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"CODE_NAME\">Education Team</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NAME\">Technical Support Team</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"CODE_NAME\">Customer Support Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">Accounting Team</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">Finances Team</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">Human Resource Team</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">Marketing Team</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">Sales Team</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">Consulting  Team</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">Design Team</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">Mobile Team</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">Education Team</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">Technical Support Team</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">Customer Support Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_mCombo1","10","77","207","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_MultiCombo.xfdl");
            obj.getSetter("callbackfunc").set("fn_mComboCallback");
            obj.getSetter("combocodecolumn").set("CODE");
            obj.getSetter("combodatacolumn").set("CODE_NAME");
            obj.getSetter("comboinnerdataset").set("ds_data1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getValue","10","154","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Get Value");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getValue","115","154","185","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setValue","10","216","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Set Value");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setValue","115","216","185","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getText","10","185","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get Text");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getText","115","185","185","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","262","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("전체 선택 / 해제");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Div("div_mCombo2","10","293","207","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_MultiCombo.xfdl");
            obj.getSetter("combocodecolumn").set("CODE");
            obj.getSetter("combodatacolumn").set("NAME");
            obj.getSetter("comboinnerdataset").set("ds_data2");
            obj.getSetter("allcheck").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","339","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Display Count");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Div("div_mCombo3","10","370","207","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_url("Comm::Comm_MultiCombo.xfdl");
            obj.getSetter("comboinnerdataset").set("ds_data2");
            obj.getSetter("combodatacolumn").set("NAME");
            obj.getSetter("combocodecolumn").set("CODE");
            obj.getSetter("allcheck").set("true");
            obj.getSetter("maxcount").set("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_guideBlue");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","146","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Multi Combo");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","46","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Multi Combo 사용방법");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","416","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div > Multi Combo");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_essential","10","div_mCombo1:20","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("essential");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","115","123","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","510","46","345","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Combo로 구성한 Multi Combo -  User Prop");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","510","77","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_popuptype("none");
            obj.set_type("search");
            obj.getSetter("uComboType").set("M");
            obj.set_innerdataset("ds_data1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_displayrowcount("20");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","510","108","290","74",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","9","11","160","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_popuptype("none");
            obj.set_type("search");
            obj.getSetter("uComboType").set("M");
            obj.set_innerdataset("ds_data1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","510","187","290","118",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            obj.set_border("1px solid #cccccc");
            this.Tab00.addChild(obj.name, obj);

            obj = new Combo("Combo00","11","14","160","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_type("search");
            obj.getSetter("uComboType").set("M");
            obj.set_innerdataset("ds_data1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01","10","447","265","100",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("div_mCombo1","19","10","207","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_MultiCombo.xfdl");
            obj.getSetter("combocodecolumn").set("CODE");
            obj.getSetter("combodatacolumn").set("CODE_NAME");
            obj.getSetter("comboinnerdataset").set("ds_data1");
            obj.getSetter("callbackfunc").set("fn_mComboCallback");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08_00","500","10","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("w\r\n10");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","675","77","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_popuptype("none");
            obj.set_type("search");
            obj.getSetter("uComboType").set("M");
            obj.set_innerdataset("ds_data1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_mCombo1
            obj = new Layout("default","",0,0,this.div_mCombo1.form,function(p){});
            this.div_mCombo1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_mCombo2
            obj = new Layout("default","",0,0,this.div_mCombo2.form,function(p){});
            this.div_mCombo2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_mCombo3
            obj = new Layout("default","",0,0,this.div_mCombo3.form,function(p){});
            this.div_mCombo3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.div_mCombo1
            obj = new Layout("default","",0,0,this.Div01.form.div_mCombo1.form,function(p){});
            this.Div01.form.div_mCombo1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1028,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_MultiCombo.xfdl");
        };
        
        // User Script
        this.registerScript("Sample_MultiCombo.xfdl", function() {
        /**
        *  @MenuPath    샘플 > 멀티콤보
        *  @FileName 	Sample_MultiCombo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2022.03.03
        *  @Desction    멀티콤보
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier               	Description
        *******************************************************************************
        *  2022.03.03     	Education 	            최초 생성
        *******************************************************************************

        1. Div 생성
        2. Div url 속성에 Comm::Comm_MultiCombo.xfdl 링크
        3. Div User prop에 아래 속성 적용
            comboinnerdataset : innerdataset id
        	combocodecolumn : code column
        	combodatacolumn : data column
        	allcheck : 전체선택 사용 여부 (true/false)
        	callbackfunc : 콜백함수
        	maxcount : 콤보 리스트 갯수

        4. 멀티콤보 inner dataset 설정함수 호출
        	this.div00.form.fn_setDataset(this.ds_list);

        5. 접근방법
            - 콤보 데이터 가져오기
              var sValue = this.div00.form.get_value();

            - 콤보 텍스트 가져오기
              var sText = this.div00.form.get_text();

            - 콤보에 데이터 설정하기
              this.div00.form.set_value("01", "02");

            - 필수 선택 디자인 적용하기
              this.div00.form.fn_setRequired(true);

        */

        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

            var arrCode = new Array();
        	arrCode.push({codeGroup:"C060", obj:this.ds_data1});
            this.gfn_getCommonCode(arrCode);


        // 멀티 콤보 데이타 설정 함수 호출 - innerdataset은 user prop. 지정한 값
         	this.div_mCombo1.form.fn_setDataset();
         	this.div_mCombo2.form.fn_setDataset();
         	this.div_mCombo3.form.fn_setDataset();

            this.Div01.form.div_mCombo1.form.fn_setDataset();

        };


        /**
        * 멀티콤보 초기화
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btn_init_onclick = function(obj,e)
        {
        	this.div_mCombo1.form.fn_init();
        };

        /**
        * 멀티콤보데이터가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btn_getValue_onclick = function(obj,e)
        {
        	var sValue = this.div_mCombo1.form.get_value();
        	this.edt_getValue.set_value(sValue);
        };

        /**
        * 멀티콤보텍스트가져오기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btn_getText_onclick = function(obj,e)
        {
        	var sText = this.div_mCombo1.form.get_text();
        	this.edt_getText.set_value(sText);
        };

        /**
        * 멀티콤보 데이터셋 세팅하기
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.btn_setValue_onclick = function(obj,e)
        {
        	if(this.edt_setValue.value == null){
        		alert("setValue값을 입력하세요.");
        		return;
        	}
        	var sValue = this.edt_setValue.value;

        	this.div_mCombo1.form.set_value(sValue);
        };

        /**
        * 멀티콤보 필수처리
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.fv_essential = false;
        this.btn_essential_onclick = function(obj,e)
        {
        	var objForm = this.div_mCombo1.form;
            this.fv_essential = (this.fv_essential ? false: true);
            objForm.fn_setRequired(this.fv_essential);

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
        * fnMultComboCallbackFunc : 멀티콤보콜백
        * @param  : obj		   - [object]Button
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        //Div로 적용시
        this.fn_mComboCallback = function()
        {
            trace("getText:: " + this.div_mCombo1.form.get_text());
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.Combo00.set_multiValue(this, "01,02,03");
        	this.Div00.form.Combo00.set_multiValue(this, "01,02,03");
        };

        this.Div02_Button00_onclick = function(obj,e)
        {
        	this.fn_getCompId(this.Div02.form.Combo00);
        	this.fn_getCompId(this.Combo00);
        	this.fn_getCompId(this.Tab00.Tabpage1.form.Combo00);
        };


        this.Button02_onclick = function(obj,e)
        {
        //	var objFunc = new Function("return this.tabAct.tabpage"+i+".form.ds1.rowcount;");
        //	var nCnt = objFunc.call(this);

        	var objFunc = new Function("return this.Tab00.Tabpage1.form");
        	var objP = objFunc.call(this);

        	var arrObj = objP.all;
        	for(var i=0; i<arrObj.length;i++)
        	{
        		trace(arrObj[i].name);
        	}

        };

        this.Button03_onclick = function(obj,e)
        {
        	this.Combo00.set_multiValue(this, "01,03,04");
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.ds_data1.reset();
        };

        this.Combo00_oncloseup = function(obj,e)
        {
        	trace(obj.text + " : " + e.postvalue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_getValue.addEventHandler("onclick",this.btn_getValue_onclick,this);
            this.btn_setValue.addEventHandler("onclick",this.btn_setValue_onclick,this);
            this.btn_getText.addEventHandler("onclick",this.btn_getText_onclick,this);
            this.btn_essential.addEventHandler("onclick",this.btn_essential_onclick,this);
            this.btn_init.addEventHandler("onclick",this.btn_init_onclick,this);
            this.Combo00.addEventHandler("oncloseup",this.Combo00_oncloseup,this);
            this.Combo00_00.addEventHandler("oncloseup",this.Combo00_oncloseup,this);
        };
        this.loadIncludeScript("Sample_MultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
