(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("InstallStatus");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_istSta", this);
            obj._setContents("<ColumnInfo><Column id=\"receptionNum\" type=\"STRING\" size=\"256\"/><Column id=\"clientName\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"clientPhone\" type=\"STRING\" size=\"256\"/><Column id=\"istReqVisitDate\" type=\"STRING\" size=\"256\"/><Column id=\"istReqState\" type=\"STRING\" size=\"256\"/><Column id=\"pic\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sta", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","10","60","15",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","110","7","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","250","10","60","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr","310","7","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","530","7","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_sta");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","450","10","80","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("진행 상황");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","680","10","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","750","7","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSerch","900","5","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","55","900","270",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_istSta");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"주소\"/><Cell col=\"2\" text=\"연락처\"/><Cell col=\"3\" text=\"설치요청일\"/><Cell col=\"4\" text=\"설치상황\"/><Cell col=\"5\" text=\"담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:clientName\"/><Cell col=\"1\" text=\"bind:addr\"/><Cell col=\"2\" text=\"bind:clientPhone\"/><Cell col=\"3\" text=\"bind:istReqVisitDate\"/><Cell col=\"4\" text=\"bind:istReqState\"/><Cell col=\"5\" text=\"bind:pic\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("page1","336","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","566","400","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_right","536","400","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("page2","356","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("page3","376","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("page4","396","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("page5","416","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("page6","436","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Static("page7","456","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("page8","476","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Static("page9","496","400","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Static("page10","516","400","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("InstallStatus.xfdl", function() {
        this.objApp = this.gfn_getApplication();
        var currentIndex = 1;
        var recepNum;
        this.InstallStatus_onload = function(obj,e)
        {
        	var strId    = "svcComboGroup";
        	var strUrl   = "svc::comboGroup";
        	var inData   = "";
        	var outData  = "ds_sta=out_combo";
        	var param   = "comboGroup=STATE";
        	var callBack = "fn_callback";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	for (var i = 1; i <= 10; i++) {
                var staticID = "page" + i;  // Static1, Static2, ... Static10
                var staticComp = this[staticID];  // 각 Static 컴포넌트를 가져옴
                staticComp.addEventHandler("onclick", this.onStaticClick, this);
            }

        	var strId    = "svcIstSta";
        	var strUrl   = "svc::istSta";
        	var inData   = "";
        	var outData  = "ds_istSta=out_istSta";
        	var param   = "page=1";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.fn_paging = function (page)
        {
        	var strId    = "svcIstSta";
        	var strUrl   = "svc::istSta";
        	var inData   = "";
        	var outData  = "ds_istSta=out_istSta";
        	var param   = "page="+page;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.onStaticClick = function(obj, e) {
            // 모든 Static 컴포넌트의 배경색을 기본값으로 되돌림
            for (var i = 1; i <= 10; i++) {
                var staticID = "page" + i;
                var staticComp = this[staticID];
                staticComp.set_color("black");  // 기본 배경색
            }

            // 클릭된 Static 컴포넌트만 파란색으로 변경
        	currentIndex = parseInt(obj.name.replace("page", ""));
        //	trace("Current Static Index: " + currentIndex);
            obj.set_color("blue");
        	this.fn_paging(obj.text);
        };

        this.btn_right_onclick = function(obj,e)
        {
        	if(currentIndex%10 == 0){
        		return;
        	}

            var currentStatic = this["page" + currentIndex];
            currentStatic.set_color("black");


            currentIndex++;

            var nextStatic = this["page" + currentIndex];
            nextStatic.set_color("blue");
        	this.fn_paging(currentIndex);
        };

        this.fn_callback = function ()
        {
        	this.ds_sta.set_enableevent(false);

        	// comboCode의 값이 'IR'로 시작하는 조건으로 필터 설정
        	this.ds_sta.filter("comboCode.indexOf('IR') == 0");

        	this.ds_sta.set_enableevent(true);
        };



        this.btnSerch_onclick = function(obj,e)
        {
        	var strId		= "svcIstStaSerch";
        	var strUrl		= "svc::istStaSerch";
        	var inData		= "";
        	var outData		= "ds_istSta=out_istSta";
        	var param		= "page="+currentIndex+
        					  " clientName="+this.edtName.value+
        					  " clientAddr="+this.edtAddr.value+
        					  " clientPhone="+this.edtPhone.value+
        					  " istReqState="+this.Combo00.value;
        	var callBack	= "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	// ChildFrame을 생성하여 새 폼 열기
            var objChildFrame = new ChildFrame();  // ChildFrame 객체 생성
            objChildFrame.init("childFrame", 100, 100, 1000, 600, null, null, "Form::InstallInfo.xfdl");

        	//선택된 row값
        	var rowIndex = e.row;
        	recepNum = this.ds_istSta.getColumn(rowIndex,"receptionNum");

            // 전달할 파라미터 설정
            var oArgs = { "receiveno" : this.ds_istSta.getColumn(rowIndex,"receptionNum") };

            // 새 폼을 부모 폼에 추가 후 열기
            objChildFrame.set_showtitlebar(true);	// 타이틀바 표시 여부 설정
        	objChildFrame.set_autosize(false);       // 자동 크기 조정 여부 설정
            objChildFrame.showModal("childFrame", this.getOwnerFrame(), oArgs, this, "fn_callbackModal");
        };

        this.fn_callbackModal = function (sPopupId, sReturnValue)
        {
        	trace(sReturnValue);
        	if(sReturnValue = "refrashList"){
        		this.InstallStatus_onload();
        	}
        	if(sReturnValue = "btnAs"){
        		var arrArg = [];
        		arrArg.push(recepNum);

        		this.ds_tmp.insertRow(0); // 첫 번째 행에 추가
        		this.ds_tmp.setColumn(0, "MENU_ID", this.objApp.gds_menu.getColumn(3,"MENU_ID"));
        		this.ds_tmp.setColumn(0, "MENU_NAME", this.objApp.gds_menu.getColumn(3,"MENU_NAME"));
        		this.ds_tmp.setColumn(0, "MENU_LEVEL", this.objApp.gds_menu.getColumn(3,"MENU_LEVEL"));
        		this.ds_tmp.setColumn(0, "FORM_URL", this.objApp.gds_menu.getColumn(3,"FORM_URL"));
        		this.ds_tmp.setColumn(0, "ENABLE", this.objApp.gds_menu.getColumn(3,"ENABLE"));
        		this.ds_tmp.setColumn(0, "MENU_AUTH", this.objApp.gds_menu.getColumn(3,"MENU_AUTH"));

        		var objDs = this.ds_tmp;

        		this.gfn_openForm(objDs, this.ds_tmp, arrArg);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.InstallStatus_onload,this);
            this.btnSerch.addEventHandler("onclick",this.btnSerch_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.page1.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_right.addEventHandler("onclick",this.btn_right_onclick,this);
        };
        this.loadIncludeScript("InstallStatus.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
