(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ChangesHis");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sta", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_change", this);
            obj._setContents("<ColumnInfo><Column id=\"hisId\" type=\"STRING\" size=\"256\"/><Column id=\"receptionNum\" type=\"STRING\" size=\"256\"/><Column id=\"hisUpdateName\" type=\"STRING\" size=\"256\"/><Column id=\"hisUpdateDate\" type=\"STRING\" size=\"256\"/><Column id=\"hisBeforeState\" type=\"STRING\" size=\"256\"/><Column id=\"hisAfterState\" type=\"STRING\" size=\"256\"/><Column id=\"asirState\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_asir", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calStart","120","20","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEnd","285","20","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","20","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("변경일");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","63","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","430","50","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("설치AS구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","120","50","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSta","280","50","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_sta");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btnSerch","690","30","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","270","20","15","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_font("bold 12px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","90","900","270",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_change");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"87\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"설치신청ID\"/><Cell col=\"1\" text=\"변경자\"/><Cell col=\"2\" text=\"변경일시\"/><Cell col=\"3\" text=\"변경전상태\"/><Cell col=\"4\" text=\"변경후상태\"/><Cell col=\"5\" text=\"설치AS구분\"/></Band><Band id=\"body\"><Cell text=\"bind:receptionNum\"/><Cell col=\"1\" text=\"bind:hisUpdateName\"/><Cell col=\"2\" text=\"bind:hisUpdateDate\"/><Cell col=\"3\" text=\"bind:hisBeforeState\"/><Cell col=\"4\" text=\"bind:hisAfterState\"/><Cell col=\"5\" text=\"bind:asirState\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("page1","336","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("1");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","566","555","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_right","536","555","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("page2","356","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("page3","376","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("page4","396","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("page5","416","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("page6","436","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Static("page7","456","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("page8","476","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Static("page9","496","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Static("page10","516","553","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","220","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbAsir","520","50","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_asir");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo00");
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
        this.registerScript("ChangesHis.xfdl", function() {
        var currentIndex = 1;

        this.ChangesHis_onload = function(obj,e)
        {
        	var strId    = "svcComboGroup";
        	var strUrl   = "svc::comboGroup";
        	var inData   = "";
        	var outData  = "ds_sta=out_combo";
        	var param  	 = "comboGroup=STATE";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	var strId    = "svcComboGroup2";
        	var strUrl   = "svc::comboGroup";
        	var inData   = "";
        	var outData  = "ds_asir=out_combo";
        	var param  	 = "comboGroup=CLASSIFICATION";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	this.fn_paging(currentIndex);

        	for (var i = 1; i <= 10; i++) {
                var staticID = "page" + i;  // Static1, Static2, ... Static10
                var staticComp = this[staticID];  // 각 Static 컴포넌트를 가져옴
                staticComp.addEventHandler("onclick", this.onStaticClick, this);
            }
        };

        this.btnSerch_onclick = function(obj,e)
        {
        	var strId    = "svcChangeSerch";
        	var strUrl   = "svc::changeSerch";
        	var inData   = "";
        	var outData  = "ds_change=out_change";
        	var param  	 = "date1="+this.calStart.value+
        				   " date2="+this.calEnd.value+
        				   " hisUpdateName="+this.edtName.value+
        				   " asirState="+this.cmbAsir.value+
        				   " hisAfterState="+this.cmbSta.value;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };


        this.fn_paging = function (page)
        {
        	var strId    = "svcChangeHis";
        	var strUrl   = "svc::changeHis";
        	var inData   = "";
        	var outData  = "ds_change=out_change";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ChangesHis_onload,this);
            this.btnSerch.addEventHandler("onclick",this.btnSerch_onclick,this);
            this.page1.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_right.addEventHandler("onclick",this.btn_right_onclick,this);
        };
        this.loadIncludeScript("ChangesHis.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
