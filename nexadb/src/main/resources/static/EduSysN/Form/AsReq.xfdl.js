(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AsReq");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_istReq", this);
            obj._setContents("<ColumnInfo><Column id=\"receptionNum\" type=\"STRING\" size=\"256\"/><Column id=\"istReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"clientName\" type=\"STRING\" size=\"256\"/><Column id=\"istReqType\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCar\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCarName\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCharge\" type=\"STRING\" size=\"256\"/><Column id=\"istReqVehiNum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sta", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">2024</Col><Col id=\"comboCode\">2024</Col></Row><Row><Col id=\"comboName\">2025</Col><Col id=\"comboCode\">2025</Col></Row><Row><Col id=\"comboName\">2026</Col><Col id=\"comboCode\">2026</Col></Row><Row><Col id=\"comboName\">2027</Col><Col id=\"comboCode\">2027</Col></Row><Row><Col id=\"comboName\">2028</Col><Col id=\"comboCode\">2028</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">01</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">02</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">03</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">04</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">05</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">06</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">07</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">08</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">09</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">01</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">02</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">03</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">04</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">05</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">06</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">07</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">08</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">09</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row><Row><Col id=\"comboName\">13</Col><Col id=\"comboCode\">13</Col></Row><Row><Col id=\"comboName\">14</Col><Col id=\"comboCode\">14</Col></Row><Row><Col id=\"comboName\">15</Col><Col id=\"comboCode\">15</Col></Row><Row><Col id=\"comboName\">16</Col><Col id=\"comboCode\">16</Col></Row><Row><Col id=\"comboName\">17</Col><Col id=\"comboCode\">17</Col></Row><Row><Col id=\"comboName\">18</Col><Col id=\"comboCode\">18</Col></Row><Row><Col id=\"comboName\">19</Col><Col id=\"comboCode\">19</Col></Row><Row><Col id=\"comboName\">20</Col><Col id=\"comboCode\">20</Col></Row><Row><Col id=\"comboName\">21</Col><Col id=\"comboCode\">21</Col></Row><Row><Col id=\"comboName\">22</Col><Col id=\"comboCode\">22</Col></Row><Row><Col id=\"comboName\">23</Col><Col id=\"comboCode\">23</Col></Row><Row><Col id=\"comboName\">24</Col><Col id=\"comboCode\">24</Col></Row><Row><Col id=\"comboName\">25</Col><Col id=\"comboCode\">25</Col></Row><Row><Col id=\"comboName\">26</Col><Col id=\"comboCode\">26</Col></Row><Row><Col id=\"comboName\">27</Col><Col id=\"comboCode\">27</Col></Row><Row><Col id=\"comboName\">28</Col><Col id=\"comboCode\">28</Col></Row><Row><Col id=\"comboName\">29</Col><Col id=\"comboCode\">29</Col></Row><Row><Col id=\"comboName\">30</Col><Col id=\"comboCode\">30</Col></Row><Row><Col id=\"comboName\">31</Col><Col id=\"comboCode\">31</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_time", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">오전</Col><Col id=\"comboCode\">AM</Col></Row><Row><Col id=\"comboName\">오후</Col><Col id=\"comboCode\">PM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">1</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">2</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">3</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">4</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">5</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">6</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">7</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">8</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">9</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_asEng", this);
            obj._setContents("<ColumnInfo><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","50","20","900","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","120","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접수 번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","450","5","120","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtReception","180","25","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIst","620","25","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50","70","900","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("고객 정보");
            obj.set_cssclass("div_WF_Search");
            obj.set_font("bold 13px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","50","90","900","205",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","25","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","50","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","0","75","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("A/S설치기사");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","0","100","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("차종/신청대수");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","0","125","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("A/S방문희망일");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","0","150","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("A/S내용");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","0","175","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("A/S취소사유");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","450","0","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","450","75","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("A/S진행");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","614","175","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("취소일");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","450","100","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("충전기모델");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","450","25","120","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("Email");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("cmbAsEng","180","166","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_asEng");
            obj.set_datacolumn("userName");
            obj.set_codecolumn("userId");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCname","180","90","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCphone","180","116","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr","180","141","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCar","180","191","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAs","180","241","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCan","180","266","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Edit("edtType","621","91","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCharge","621","192","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSta","621","166","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_sta");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbYear","180","217","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_year");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_autoselect("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","295","-33","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("년");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMonth","371","217","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_month");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("1");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","390","-33","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("월");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDay","466","217","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_day");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","485","-33","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","561","217","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_time");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbHour","721","217","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_hour");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","740","-33","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("시");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","346","220","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("년");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","441","220","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("월");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","536","220","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","791","220","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("시");
            this.addChild(obj.name, obj);

            obj = new Button("btnList","570","315","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("AS 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btnUdt","700","315","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btnIns","830","315","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("신규등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","621","120","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCan","785","266","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

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
        this.registerScript("AsReq.xfdl", function() {
        this.objApp 	  = this.gfn_getApplication();

        this.AsReq_onload = function(obj,e)
        {
        	//var arrArg = this.parent.parent.parent.arguments.arrArg[0];

        	if(!this.parent.parent.parent.arguments){
        		trace("undefined");
        	}else{
        		trace(this.parent.parent.parent.arguments.arrArg[0]);

        		var strId = "svcAsreq";
        		var strUrl = "svc::asReq";
        		var inData = "";
        		var outData	= "ds_istReq=out_istReq, resultMessage=resultMessage";
        		var param = "receptionNum="+this.parent.parent.parent.arguments.arrArg[0];
        		var callBack = "fn_callback";
        		this.transaction(strId, strUrl, inData, outData, param, callBack);
        	}

        	var strId    = "svcAsEng";
        	var strUrl   = "svc::userAs";
        	var inData   = "";
        	var outData  = "ds_asEng=out_asEng";
        	var param   = "authorityId=ASENG";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	var strId    = "svcComboGroup";
        	var strUrl   = "svc::comboGroup";
        	var inData   = "";
        	var outData  = "ds_sta=out_combo";
        	var param   = "comboGroup=STATE";
        	var callBack = "fn_callbackCombo";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.fn_callbackCombo = function ()
        {
        	this.ds_sta.set_enableevent(false);

        	// comboCode의 값이 'AS'로 시작하는 조건으로 필터 설정
        	this.ds_sta.filter("comboCode.indexOf('AS') == 0");

        	this.ds_sta.set_enableevent(true);
        };

        this.fn_callback = function ()
        {
        	if(this.objApp.resultMessage == 'SUCCESS'){
        		trace("가능?");
        	}else{
        		this.edtReception.set_value(this.ds_istReq.getColumn(0,"receptionNum"));
        		this.calIst.set_value(this.ds_istReq.getColumn(0,"istReqDate"));
        		this.edtCname.set_value(this.ds_istReq.getColumn(0,"clientName"));
        		this.edtType.set_value(this.ds_istReq.getColumn(0,"istReqType"));
        		this.edtCphone.set_value(this.ds_istReq.getColumn(0,"clientPhone"));
        		this.edtEmail.set_value(this.ds_istReq.getColumn(0,"clientEmail"));
        		this.edtCar.set_value(this.ds_istReq.getColumn(0,"istReqCar")+this.ds_istReq.getColumn(0,"istReqCarName")+"/"+this.ds_istReq.getColumn(0,"istReqVehiNum")+"대");
        		this.edtCharge.set_value(this.ds_istReq.getColumn(0,"istReqCharge"));
        	}
        };

        this.fn_validateComp = function (comp)
        {
        	var childComp;

            // 부모 컴포넌트 (폼 또는 Div) 안의 모든 컴포넌트 순회
        	//trace("컴포넌트"+comp.length);
            for (var i = 0; i < comp.length; i++) {
                childComp = comp[i];
        		//trace(childComp.name);
                // Edit 컴포넌트에 대한 처리
                if (childComp instanceof Edit) {
                    if (childComp.value == undefined || childComp.value == "") {
        				if(childComp.name == "edtCan"){
        					if(this.cmbSta.value == "ASREQCAN"){
        						this.alert(childComp.name + " 값이 비어있습니다.");
        						return false;
        					}
        				}
        				this.alert(childComp.name + " 값이 비어있습니다.");
        				return false;
                    }
                }

                // Combo 컴포넌트에 대한 처리
                else if (childComp instanceof Combo) {
                    if (childComp.value == "init" || childComp.index == 0) {
        				this.alert(childComp.name + " 값이 비어있습니다.");
        				return false;
                    }
                }

        		// Spin 컴포넌트에 대한 처리
                else if (childComp instanceof Spin) {
                    if (childComp.value == null || childComp.value == "") {
        				this.alert(childComp.name + " 값이 비어있습니다.");
        				return false;
                    }
                }

        		// Calendar 컴포넌트에 대한 처리
                else if (childComp instanceof Calendar) {
                    if (childComp.value == null || childComp.value == "") {
                        this.alert(childComp.name + " 값이 비어있습니다.");
                        return false;
                    }
                }
            }

        	return true;
        };
        this.cmbSta_onitemchanged = function(obj,e)
        {
        	if(this.cmbSta.value == "ASREQCAN"){
        		var today = new Date();
        		var year = today.getFullYear();
        		var month = ("0" + (today.getMonth() + 1)).slice(-2);  // 월은 0부터 시작하므로 1 더해줌
        		var day = ("0" + today.getDate()).slice(-2);

        		this.calCan.set_value(year + month + day);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AsReq_onload,this);
            this.cmbSta.addEventHandler("onitemchanged",this.cmbSta_onitemchanged,this);
        };
        this.loadIncludeScript("AsReq.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
