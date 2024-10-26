(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Combo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">U</Col><Col id=\"DATA\">U</Col></Row><Row><Col id=\"CODE\">H</Col><Col id=\"DATA\">H</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","30","30","900","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("콤보제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtTitle","130","8","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","439","8","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("콤보이름");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtName","574","8","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","53","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("콤보코드");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtCode","130","53","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","439","50","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("콤보상태");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("edtState","574","53","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","250","900","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_comboCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"콤보코드\"/><Cell col=\"2\" text=\"콤보이름\"/><Cell col=\"3\" text=\"콤보제목\"/><Cell col=\"4\" text=\"콤보상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:comboCode\"/><Cell col=\"2\" text=\"bind:comboName\"/><Cell col=\"3\" text=\"bind:comboTitle\"/><Cell col=\"4\" text=\"bind:comboState\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","610","140","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpdate","720","140","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","830","140","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","30","180","780","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","9","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("콤보제목");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","454","9","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("콤보이름");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("serchTitle","130","14","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("serchName","574","14","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnSerch","830","190","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("page1","336","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("1");
            obj.set_color("#0000ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","566","555","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_right","536","555","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Static("page2","356","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("page3","376","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("page4","396","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("page5","416","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Static("page6","436","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Static("page7","456","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("page8","476","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Static("page9","496","553","10","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Static("page10","516","553","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edtState","value","Dataset00","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edtState","text","Dataset00","DATA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edtState","acceptvaluetype","Dataset00","DATA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Combo.xfdl", function() {
        this.objApp 	  = this.gfn_getApplication();
        var currentIndex = 1;

        this.Combo_onload = function(obj,e)
        {
        	var strId    = "svcCombo";
        	var strUrl   = "svc::combo";
        	var inData   = "";
        	var outData  = "gds_comboCode=out_comboCode";
        	var param   = "page=1";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	for (var i = 1; i <= 10; i++) {
                var staticID = "page" + i;  // Static1, Static2, ... Static10
                var staticComp = this[staticID];  // 각 Static 컴포넌트를 가져옴
                staticComp.addEventHandler("onclick", this.onStaticClick, this);
            }

        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var rowIndex = e.row;

        	trace("더블클릭한 행의 인덱스: " + rowIndex);
        	trace("dataset::"+this.objApp.gds_comboCode.getColumn(rowIndex,"comboName"));

        	this.Div00.form.edtTitle.set_value(this.objApp.gds_comboCode.getColumn(rowIndex,"comboTitle"));
        	this.Div00.form.edtName.set_value(this.objApp.gds_comboCode.getColumn(rowIndex,"comboName"));
        	this.Div00.form.edtCode.set_value(this.objApp.gds_comboCode.getColumn(rowIndex,"comboCode"));
        	this.Div00.form.edtState.set_text(this.objApp.gds_comboCode.getColumn(rowIndex,"comboState"));
        	this.Div00.form.edtState.set_value(this.objApp.gds_comboCode.getColumn(rowIndex,"comboState"));
        };

        this.Div00_edtState_canitemchange = function(obj,e)
        {
        	//콤보박스
        };

        this.btnSerch_onclick = function(obj,e)
        {

        // 	this.objApp.gds_comboCode.set_enableevent(false);
        // 	var expr="";
        // 	if(this.Div01.form.serchName.value==undefined ||this.Div01.form.serchTitle.value==undefined
        // 		||this.Div01.form.serchName.value==''||this.Div01.form.serchTitle.value==''){
        // 		expr = "comboName=='"+this.Div01.form.serchName.value+"' || comboTitle=='"+this.Div01.form.serchTitle.value+"'";
        // 	}else{
        // 		expr = "comboName=='"+this.Div01.form.serchName.value+"' && comboTitle=='"+this.Div01.form.serchTitle.value+"'";
        // 	}
        //
        // 	trace(expr);
        //
        // 	this.objApp.gds_comboCode.filter(expr);
        //
        // 	this.objApp.gds_comboCode.set_enableevent(true);

        	var strId    = "svcComboSerch";
        	var strUrl   = "svc::comboSerch";
        	var inData   = "";
        	var outData  = "gds_comboCode=out_combo";
        	var param   = "comboTitle="+this.Div01.form.serchTitle.value+
        				  " comboName="+this.Div01.form.serchName.value;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var sSvcID    = "svcComboInsert";
            var sURL      = "svc::comboInsert";
            var sInDs     = "";
            var sOutDs    = "";
            var sParam    = "comboName="+this.Div00.form.edtName.value+
        					" comboTitle="+this.Div00.form.edtTitle.value+
        					" comboCode="+this.Div00.form.edtCode.value;
            var sCallBack = "";

        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	this.Combo.reload();
        };

        this.Button00_onclick = function(obj,e) //초기화버튼
        {
        	this.Div00.form.edtTitle.set_value("");
        	this.Div00.form.edtName.set_value("");
        	this.Div00.form.edtCode.set_value("");
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

        this.fn_paging = function (page)
        {
        	var strId    = "svcCombo";
        	var strUrl   = "svc::combo";
        	var inData   = "";
        	var outData  = "gds_comboCode=out_comboCode";
        	var param   = "page="+page;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
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
            this.addEventHandler("onload",this.Combo_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.edtState.addEventHandler("canitemchange",this.Div00_edtState_canitemchange,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSerch.addEventHandler("onclick",this.btnSerch_onclick,this);
            this.page1.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_right.addEventHandler("onclick",this.btn_right_onclick,this);
        };
        this.loadIncludeScript("Combo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
