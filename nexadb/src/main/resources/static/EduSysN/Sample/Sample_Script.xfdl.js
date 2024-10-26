(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Script");
            this.set_titletext("Sample_Script");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents("<ColumnInfo><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMPL_ID\">AA001</Col><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">AA002</Col><Col id=\"FULL_NAME\"/><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\"/><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col></Row><Row><Col id=\"EMPL_ID\">BB0</Col><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col></Row><Row><Col id=\"EMPL_ID\">CC001</Col><Col id=\"FULL_NAME\">Adam</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"POS_CD\">04</Col><Col id=\"HIRE_DATE\">20010109</Col><Col id=\"SALARY\">88000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">greenyellow</Col></Row><Row><Col id=\"EMPL_ID\">DD001</Col><Col id=\"FULL_NAME\">Ray</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20160202</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NAME\">Officer</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NAME\">Assistant Manager</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NAME\">Division Manager</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NAME\">Chairman</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NAME\">Accounting Team</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NAME\">HR Team</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NAME\">Sales Team</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NAME\">Design Team</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","45",null,"45","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptCode","130","8","90","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_dept","220","8","30","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptName","250","8","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","530","8","208","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","400","8","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("부서명");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","10","95","97","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회결과");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","10","126",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"91\"/><Column size=\"120\"/><Column size=\"186\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"입사일자\"/><Cell col=\"5\" text=\"급여\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"결혼여부\"/><Cell col=\"8\" text=\"비고사항\"/></Band><Band id=\"body\"><Cell text=\"bind:FULL_NAME\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:EMPL_ID\" editlimit=\"\" edittype=\"mask\" maskeditformat=\"AA-###\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:DEPT_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"3\" text=\"bind:POS_CD\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" calendarpopupsize=\"200 220\"/><Cell col=\"5\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"expr:GENDER == &quot;M&quot; ? &quot;남&quot; : &quot;여&quot;\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:MEMO\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell text=\"expr: &quot;Count: &quot; + dataset.getRowCount()\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"expr:dataset.getAvg(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","10","10","210","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("화면 타이틀");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","54","26","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","54","26","69",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","54","26","128",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","54","26","187",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1028,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample_Script.xfdl","Lib::Lib_Util.xjs");
        this.registerScript("Sample_Script.xfdl", function() {
        /**
         *  교육 샘플 프로젝트
         *  @MenuPath	Sample > script 표준
         *  @FileName	Sample_Script.xfdl
         *  @Creator	education
         *  @CreateDate	2020.01.01
         *  @Desction   스크립트 표준 및 주석 표준 정의
         ************** 소스 수정 이력 ***********************************************
         *  date          	Modifier                Description
         *******************************************************************************
         *  2020.01.01     	education 	            최초 생성
         *******************************************************************************
         */

        /************************************************************************
         * include 영역
         ************************************************************************/
        this.executeIncludeScript("Lib::Lib_Util.xjs"); /*include "Lib::Lib_Util.xjs"*/


        /************************************************************************
         * Form 변수 선언 영역
         ************************************************************************/
        this.fv_user = "nexacro";


        /************************************************************************
         * Form Event 영역
         ************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
         */
        this.Form_onload = function(obj,e)
        {
            this.gfn_formOnLoad(this);
            this.fn_commCode();
        };

        /************************************************************************
         * Callback 처리 영역
         ************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	if(svcID == "svcSave"){
        		this.gfn_alert("msg.save.success");
        	}
        }

        /**
         * @description Popup CallBack 함수(선택)
         */
        this.fn_popupCallback = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "deptPopup"){
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.div_search.form.edt_deptCode.set_value(arrRtn[0]);
        			this.div_search.form.edt_deptName.set_value(arrRtn[1]);
        		}
        	}
        }

        /**
         * @description Message Popup CallBack 함수(선택)
         */
        this.fn_msgCallback = function (strId, strVal)
        {
        	if(strId == "confirm.before.delete"){
        		if(strVal)
        		{
                    this.ds_emp.deleteRow(this.ds_emp.rowposition);
                }
        	}
        };


        /************************************************************************
         * CRUD, 서비스 호출 영역
         ************************************************************************/
        /**
         * @description 공통코드 조회
         */
        this.fn_commCode = function()
        {
            var sSvcID    = "svcCode";
            var sURL      = "SvcUrl::select_code.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_dept=out_dept ds_pos=out_pos";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        }

        /**
         * @description 조회
         */
        this.btn_search_onclick = function(obj,e)
        {
        	var sDeptCode = this.div_search.form.edt_deptCode.value;
            var sSvcID    = "svcSelect";
            var sURL      = "SvcUrl::select_emp.jsp?sDept="+sDeptCode;
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "paramDept='" + sDeptCode + "'";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        /**
         * @description 입력
         */
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        /**
         * @description 삭제
         */
        this.btn_del_onclick = function(obj,e)
        {
            var strMsgId = "confirm.before.delete";
            var arrArg = "";
            var strPopId = "confirm.before.delete";
            var strCallback = "fn_msgCallback";
            this.gfn_alert(strMsgId, arrArg, strPopId, strCallback);
        };

        /**
         * @description 저장
         */
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_emp) == false) {
        		this.gfn_alert("msg.save.nochange");
        		return;
        	}

            this.gfn_clearValidation(this.ds_emp);
            this.gfn_setValidation(this.ds_emp, "FULL_NAME", "성명"  , "required");
            this.gfn_setValidation(this.ds_emp, "EMPL_ID"  , "아이디", "required,length:5");
          	if(this.gfn_validation(this.ds_emp, "U") == false) return;

            var sSvcID    = "svcSave";
            var sURL      = "SvcUrl::save_emp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };


        /************************************************************************
         * 사용자 함수 영역
         ************************************************************************/
        /**
         * @description 사용자 함수
         */
        this.fn_test = function()
        {

        }

        /************************************************************************
         * Component 별 Event 스크립트 영역
         ************************************************************************/
        /**
         * @description 조회조건 영역 부서팝업 호출
         */
        this.div_search_btn_dept_onclick = function(obj,e)
        {
            var sPopupId  = "deptPopup";
            var sUrl      = "Form::Form_PopupDept.xfdl";
        	var oArg      = {pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {title : this.gfn_getWord("popup.modal")};
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        };

        /**
         * @description 조회조건 영역 성별 필터
         */

        this.div_search_rdo_gender_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "A"){
        		this.ds_emp.filter("");
        	}
        	else{
        		this.ds_emp.filter("GENDER == '" + e.postvalue + "'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.div_search.form.btn_dept.addEventHandler("onclick",this.div_search_btn_dept_onclick,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.div_search_rdo_gender_onitemchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("Sample_Script.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
