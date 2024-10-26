(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AuthManage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"authorityName\" type=\"STRING\" size=\"256\"/><Column id=\"authorityId\" type=\"STRING\" size=\"256\"/><Column id=\"authorityMenu\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","50","10","900","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("권한등록&수정");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50","30","900","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","450","10","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("권한ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAuthName","120","10","140","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtAuthId","570","10","140","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","40","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("메뉴선택");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("insReq","120","45","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("설치신청");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("insSta","209","45","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("설치현황");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("asReg","299","45","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("A/S등록");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("asSta","389","45","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("A/S현황");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("admMenu","120","75","95","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("관리자메뉴");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("authManage","220","75","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("권한관리");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("userManage","305","75","95","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("사용자관리");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("proManage","405","75","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("사업관리");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("comboManage","490","75","110","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("콤보박스관리");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("staHis","605","75","110","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("상태변경이력");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnAdd","850","160","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신규등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","740","161","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit","630","161","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSerch","850","200","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","630","200","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("권한ID");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtId","710","205","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","430","200","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","510","205","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","250","900","270",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_auth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"700\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"권한명\"/><Cell col=\"1\" text=\"권한ID\"/><Cell col=\"2\" text=\"권 한 메 뉴\"/></Band><Band id=\"body\"><Cell text=\"bind:authorityName\"/><Cell col=\"1\" text=\"bind:authorityId\"/><Cell col=\"2\" text=\"bind:authorityMenu\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("page1","341","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","571","545","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_right","541","545","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("page2","361","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("page3","381","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("page4","401","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("page5","421","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("page6","441","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Static("page7","461","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("page8","481","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Static("page9","501","543","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Static("page10","521","543","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AuthManage.xfdl", function() {
        this.objApp 	  = this.gfn_getApplication();

        var mapToEnglish = {
            "설치신청": "insReq",
            "설치현황": "insSta",
            "A/S등록": "asReg",
            "A/S현황": "asSta",
            "관리자메뉴": "admMenu",
        	"권한관리": "authManage",
        	"사용자관리":"userManage",
            "사업관리": "proManage",
            "콤보박스관리": "comboManage",
            "상태변경이력": "staHis"
        };

        var mapToKorean = {
            "insReq": "설치신청",
            "insSta": "설치현황",
            "asReg": "A/S등록",
            "asSta": "A/S현황",
            "admMenu": "관리자메뉴",
        	"authManage": "권한관리",
        	"userManage":"사용자관리",
            "proManage": "사업관리",
            "comboManage": "콤보박스관리",
            "staHis": "상태변경이력"
        };
        this.AuthManage_onload = function(obj,e)
        {
        	var strId    = "svcAuth";
        	var strUrl   = "svc::auth";
        	var inData   = "";
        	var outData  = "ds_auth=out_auth";
        	var param   = "";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fn_chkFalse();
        	this.btnAdd.set_enable(false);
        	this.btnUpdate.set_enable(true);
        	this.Div01.form.edtAuthId.set_enable(false);
        	var rowIndex = e.row;

        	var strArr = this.ds_auth.getColumn(rowIndex,"authorityMenu").split(",");

        	for (var i = 0; i < strArr.length; i++) {
        		var koreanKey = strArr[i];  // 한글 문자열
        		var englishId = mapToEnglish[koreanKey];  // 영어 매핑 값 가져오기

        		if (englishId) {
        			var checkboxObj = this.Div01.form.lookup(englishId);  // 컴포넌트 찾기

        			if (checkboxObj) {
        				checkboxObj.set_value(true);  // 체크박스 체크
        			} else {
        				trace("Checkbox with ID " + checkboxId + " not found.");
        			}
        		} else {
        			trace("No mapping found for " + koreanKey);
        		}
        	}
        	this.Div01.form.edtAuthId.set_value(this.ds_auth.getColumn(rowIndex,"authorityId"));
        	this.Div01.form.edtAuthName.set_value(this.ds_auth.getColumn(rowIndex,"authorityName"));


        };

        this.fn_chkFalse = function ()
        {
        	var checkboxIds = ["insReq","insSta","asReg","asSta","admMenu","authManage","userManage","proManage","comboManage","staHis"];

        	for (var i = 0; i < checkboxIds.length; i++) {
        		var checkboxObj = this.Div01.form.lookup(checkboxIds[i]);  // 체크박스 객체 찾기

        		if (checkboxObj) {
        			checkboxObj.set_value(false);  // 체크박스 선택 해제
        		} else {
        			trace("Checkbox with ID " + checkboxIds[i] + " not found.");
        		}
        	}
        };


        this.btnInit_onclick = function(obj,e)
        {
        	this.Div01.form.edtAuthId.set_value("");
        	this.Div01.form.edtAuthName.set_value("");
        	this.fn_chkFalse();
        	this.btnUpdate.set_enable(false);
        	this.btnAdd.set_enable(true);
        	this.Div01.form.edtAuthId.set_enable(true);
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	var checkboxIds = ["insReq","insSta","asReg","asSta","admMenu","authManage","userManage","proManage","comboManage","staHis"];
        	var checkedId ="";
        	for (var i = 0; i < checkboxIds.length; i++) {
        		var checkboxObj = this.Div01.form.lookup(checkboxIds[i]);  // 체크박스 객체 찾기

        		if (checkboxObj && checkboxObj.value) {  // 체크박스가 선택되었는지 확인
        			checkedId += mapToKorean[checkboxIds[i]]+",";
        		}

        	}
        	checkedId = checkedId.slice(0, -1); //마지막 컴마 제거

        	var strId    = "svcAuthInsert";
        	var strUrl   = "svc::authInsert";
        	var inData   = "";
        	var outData  = "resultMessage=resultMessage";
        	var param   = "authorityId="+this.Div01.form.edtAuthId.value+
        				  " authorityName="+this.Div01.form.edtAuthName.value+
        				  " authorityMenu="+checkedId;
        	var callBack = "fn_callBack";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        };

        this.btnSerch_onclick = function(obj,e)
        {
        	var strId    = "svcAuthSerch";
        	var strUrl   = "svc::authSerch";
        	var inData   = "";
        	var outData  = "ds_auth=out_auth";
        	var param   = "authorityId="+this.edtId.value+
        				  " authorityName="+this.edtName.value;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.fn_callBack = function ()
        {
        	if(this.objApp.resultMessage == 'idDuplicate'){
        		alert("권한아이디 중복");
        	}else if(this.objApp.resultMessage == 'nameDuplicate'){
        		alert("권한이름 중복");
        	}else if(this.objApp.resultMessage == 'SUCCESS'){
        		this.ds_auth.clearData();
        		this.btnInit_onclick();

        		var strId    = "svcAuth";
        		var strUrl   = "svc::auth";
        		var inData   = "";
        		var outData  = "ds_auth=out_auth";
        		var param   = "";
        		var callBack = "";
        		this.transaction(strId, strUrl, inData, outData, param, callBack);
        	}

        	this.objApp.resultMessage = '';
        	//trace(this.objApp.resultMessage);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AuthManage_onload,this);
            this.Div01.form.authManage.addEventHandler("onclick",this.Div01_chkAdmMenu00_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnSerch.addEventHandler("onclick",this.btnSerch_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.page1.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_right.addEventHandler("onclick",this.btn_right_onclick,this);
        };
        this.loadIncludeScript("AuthManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
