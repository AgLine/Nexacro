(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_MultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_cmb","0","0",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_padding("0px 30px 0px 5px");
            obj.set_text("abcdeabcdeabcdeabcdeabcdeabcde");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cmb",null,"3","25","22","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("URL(\"theme://images/cmb_dropbtn_N.png\") no-repeat center center #ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_cmb","0","31",null,"129","0",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv_cmb.form
            obj = new Layout("default","",0,0,this.pdiv_cmb.form,function(p){});
            this.pdiv_cmb.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",200,26,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_MultiCombo.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_MultiCombo.xfdl (공통 멀티콤보)
        *  @FileName 	Comm_MultiCombo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2018.12.17
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.12.10     		Education 	           	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this._objBindDs;
        this._objTarget;

        this.comboinnerdataset;
        this.combocodecolumn;
        this.combodatacolumn;

        this.allcheck;
        this.callbackfunc;
        this.maxcount;

        this.fv_term = 3;
        this.fv_bottomTerm = 12;
        this.fv_width = 0;
        this.fv_btnWidth = 60;
        this.fv_btnHeight = 23;
        this.fv_rowHeight = 30;

        this.objApp	= this.gfn_getApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fv_width = this.pdiv_cmb.getOffsetWidth();
        	this.fn_setMultiCombo();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 콤보세팅
        */
        this.fn_setMultiCombo = function ()
        {
        	var objTarget = this.parent;	 // div
        	this.comboinnerdataset = objTarget.comboinnerdataset;
        	this.combocodecolumn   = objTarget.combocodecolumn;
        	this.combodatacolumn   = objTarget.combodatacolumn;
        	this.allcheck 		   = objTarget.allcheck;
        	this.callbackfunc 	   = objTarget.callbackfunc;
        	this.maxcount          = objTarget.maxcount;

        	if( this.gfn_isNull(this.combocodecolumn )) return false;
        	if( this.gfn_isNull(this.combodatacolumn )) return false;
        	if( this.gfn_isNull(this.allcheck )) this.allcheck = "false";
        	if( this.gfn_isNull(this.maxcount )) this.maxcount = 5;

        // 	if(!this.gfn_isNull(this.comboinnerdataset)){
        // 		this.fn_setDataset();
        // 	}
        };

        this.fn_setDataset = function(oDs)
        {
        	if(this.gfn_isNull(oDs)){
        		oDs = this.gfn_lookup(this.parent.parent, this.comboinnerdataset);
        	}

        	if(this.gfn_isNull(oDs)){
        		return;
        	}
        //trace(oDs.saveXML());
        	this._objBindDs = oDs;

        	this.ds_cmb.clear();
        	this.ds_cmb.addColumn("multiComboChk", "STRING");
        	this.ds_cmb.addColumn(this.combocodecolumn, "STRING");
        	this.ds_cmb.addColumn(this.combodatacolumn, "STRING");

        	oDs.set_enableevent(false);
        	for( var j=0; j< oDs.getRowCount(); j++)
        	{
        		this.ds_cmb.addRow();
        		this.ds_cmb.setColumn(j, "multiComboChk", "0");
        		this.ds_cmb.setColumn(j, this.combocodecolumn, oDs.getColumn(j, this.combocodecolumn));
        		this.ds_cmb.setColumn(j, this.combodatacolumn, oDs.getColumn(j, this.combodatacolumn));
        	}
        	oDs.set_enableevent(true);

        	var oCombo 	  = this.pdiv_cmb;
        	var nDisplayCount = this.maxcount;
        	var nRowCount = this.ds_cmb.getRowCount();
        	if (nDisplayCount > nRowCount) nDisplayCount = nRowCount;
        	var nHeight = nHeight = this.fv_rowHeight  * nDisplayCount + nexacro.toNumber(nDisplayCount) + 1;

        	if( this.allcheck 	== "true") {
        		var nplusHeigth = this.fv_btnHeight + (this.fv_bottomTerm * 2);
        		 nHeight += nplusHeigth ;

        		 this.pdiv_cmb.set_height(nHeight+2);
        		 this._fnMakeAllCheck();
        	}
        	else {
        		nHeight += this.fv_term ;
        		this.pdiv_cmb.set_height(nHeight+2);

        		this._fnMakeCombo(oCombo);
        	}
        };

        /**
         * @description 전체선택/해제 추가
        */
        this._fnMakeAllCheck = function ()
        {
        	var compDiv = new Div("div_comboList", 0, 0, null, null, 0,  this.fv_btnHeight + (this.fv_bottomTerm * 2));
        	this.pdiv_cmb.addChild(compDiv.name, compDiv);
        	compDiv.show();

        	var nLeft = (nexacro.toNumber(this.fv_width) - (this.fv_btnWidth*2 + this.fv_term)) / 2;

        	var compBtnAllCheck = new Button("btn_allCheck", nLeft, null, this.fv_btnWidth, this.fv_btnHeight, null, this.fv_bottomTerm);
        	this.pdiv_cmb.addChild(compBtnAllCheck.name, compBtnAllCheck);
        	compBtnAllCheck.addEventHandler("onclick", this._compBtnAllCheck_onclick, this);
        	compBtnAllCheck.set_cssclass("btn_POP_Btn");
        	compBtnAllCheck.set_text("All");
        	compBtnAllCheck.show();

        	var compBtnNonCheck = new Button("btn_nonCheck", nLeft+this.fv_btnWidth+this.fv_term, null, this.fv_btnWidth, this.fv_btnHeight, null, this.fv_bottomTerm);
        	this.pdiv_cmb.addChild(compBtnNonCheck.name, compBtnNonCheck);
        	compBtnNonCheck.set_cssclass("btn_POP_Btn");
        	compBtnNonCheck.set_text("No");
        	compBtnNonCheck.addEventHandler("onclick", this._compBtnNonCheck_onclick, this);
        	compBtnNonCheck.show();

        	this._fnMakeCombo(compDiv);
        };
        /**
         * @description  동적 Grid Como List 생성
        */
        this._fnMakeCombo = function(oPdv)
        {
        	if(oPdv.form.isValidObject("grd_cbo")){
        		var oGrid = oPdv.components["grd_cbo"];
        		oPdv.removeChild("grd_cbo");

        		oGrid.destroy();
        		oGrid= null;
        	}

        	var nBotton = 0;
        	if( this.allcheck =="true") nBotton = 0;
        	else nBotton = this.fv_term;

        	var oGrd = new Grid("grd_cbo", this.fv_term, this.fv_term, null, null, this.fv_term, nBotton);
            oGrd.set_cssclass("grd_mCombo");
        //	oGrd.set_cssclass("grd_WF_Detail");
        	oPdv.addChild(oGrd.name, oGrd);

        	oGrd.set_enableevent(false);
        	oGrd.set_enableredraw(false);

        	oGrd.set_binddataset(this.ds_cmb);
        	oGrd.set_autofittype("col");
        	oGrd.set_wheelscrollrow(1);
        	oGrd.createFormat();

        	oGrd.deleteContentsRow("head", 0);
        	oGrd.setFormatRowProperty(0,"size",this.fv_rowHeight);
        	oGrd.setCellProperty("Body", 0, "displaytype", "checkboxcontrol");
        	oGrd.setCellProperty("Body", 0, "edittype", "checkbox");
        	oGrd.setFormatColProperty(0, "size", 24);
        	oGrd.setFormatColProperty(0, "band", "left");
        	oGrd.show();

        	oGrd.addEventHandler("oncellclick", this._Grid_oncellclick, this);

        	oGrd.set_enableevent(true);
        	oGrd.set_enableredraw(true);

        	this.edt_cmb.set_value("선택");
        };

        /**
         * @description   Popup Div Open
        */
        this.fn_openCombo = function()
        {
        	var nMainHeight = this.objApp.mainframe.height;

        	if (!this.gfn_isNull(this.comboinnerdataset))
         	{
        		if (this.gfn_isNull(this._objBindDs))
        		{
        			trace("invalid comboinnerdataset");
        		}
        		else
        		{
        			var nTop = 29;
        			var nBottom = nexacro.toNumber(nMainHeight) - nexacro.toNumber(this.getOffsetBottom());
        			var nHeight = nexacro.toNumber(this.pdiv_cmb.height) + nexacro.toNumber(this.btn_cmb.height) + 4;

        			if (nHeight > nBottom) nTop = -(this.pdiv_cmb.height-1);

        			this.pdiv_cmb.trackPopupByComponent(this.edt_cmb, 0, nTop);
        			this._objBindDs.set_rowposition(-1);
        		}
        	}
        };

        /**
         * @description  초기화(전체해제)
        **/
        this.fn_init = function (oThis)
        {
        	this._objTarget = oThis;

        	var objBindDs = this.ds_cmb;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multiComboChk", "0");
        	}
        	this.edt_cmb.set_value("선택");
        };


        /**
         * @description  부모창에서 value 가져갈 수 있는 함수
        */
        this.get_value = function()
        {
        	return this.edt_cmb.retrunvalue;
        };

        /**
         * @description  부모창에서 text 가져갈 수 있는 함수
        */
        this.get_text = function()
        {
        	return this.edt_cmb.returntext;
        };

        /**
         * @description  부모창에서 값 세팅하는 함수
        */
        this.set_value = function(sValue)
        {
        	this.fn_init();
        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	var objDs = this._objBindDs;
        	var nFindRow;

        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = objDs.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(objDs.getColumn(nFindRow, this.combodatacolumn));
        			objDs.setColumn(nFindRow, "multComboChk", "1");
        		}
        	}

        	this.fn_setComboText(arrTextList, arrValueList);
        };

        /**
         * @description  값 세팅
        */
        this.fn_setComboText = function(arrTextList, arrValueList)
        {
        	var sComboText = arrTextList.toString();

        	this.edt_cmb.retrunvalue = arrValueList.toString();
        	this.edt_cmb.returntext = sComboText;
        	var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        	var nComboTextWidth = objRtn.nx;

        	var nWidth = this.edt_cmb.getOffsetWidth() - this.btn_cmb.width;
        	if (nComboTextWidth > nWidth)
        	{
        		this.edt_cmb.set_value(arrTextList.length+"개 선택");
        		this.edt_cmb.set_tooltiptext(sComboText);
        		this.edt_cmb.set_tooltiptype("hover");
        	}
        	else
        	{
        		this.edt_cmb.set_value(sComboText);
        	}

        	if (this.gfn_isNull(arrTextList)) this.edt_cmb.set_value("선택");
        };

        /**
         * @description  값 세팅
        */
        this.set_value = function(sValue)
        {
        	if( this.gfn_isNull(sValue) ) return;

        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	//var objDs = this._objBindDs;
        	var nFindRow;
        	this.fn_init();
        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = this.ds_cmb.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(this.ds_cmb.getColumn(nFindRow, this.combodatacolumn));
        			this.ds_cmb.setColumn(nFindRow, "multiComboChk", "1");
        		}
        	}

        	this.fn_setComboText(arrTextList, arrValueList);
        };
        /**
         * @description  필수상태
        */
        this.fn_setRequired = function(bValue)
        {
        	if (bValue) {
                this.edt_cmb.set_cssclass("essential");
        	}
        	else{
                this.edt_cmb.set_cssclass("");
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description ALL버튼 클릭 이벤트
        */
        this._compBtnAllCheck_onclick = function()
        {
        	for (var i=0; i< this.ds_cmb.rowcount; i++)
        	{
        		this.ds_cmb.setColumn(i, "multiComboChk", "1");
        	}
        };

        /**
         * @description none버튼 클릭이벤트
        */
        this._compBtnNonCheck_onclick = function()
        {
        	for (var i=0; i<this.ds_cmb.rowcount; i++)
        	{
        		this.ds_cmb.setColumn(i, "multiComboChk", "0");
        	}
        };

        /**
         * @description   button click popupdiv open
        */
        this.btn_combo_onclick = function(obj,e)
        {
        	this.fn_openCombo();
        };

        /**
         * @description  edit click popupdiv open
        */
        this.edt_combo_oneditclick = function(obj,e)
        {
        	this.fn_openCombo();
        };

        /**
         * @description  Popup Div 닫힐때 값세팅
        */
        this.pdv_combo_oncloseup = function(obj,e)
        {
        	//var objDs = this.ds_cbo;
        	var arrTextList  = [];
        	var arrValueList = [];

        	if (this.gfn_isNull(this.ds_cmb.getColumnInfo(this.combodatacolumn)))
        	{
        		trace("comboinnerdataset("+this.ds_cmb.name + ")에 컬럼(" + this.combodatacolumn + ")이 존재하지 않습니다.\ncombodatacolumn 정보를 확인하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(this.ds_cmb.getColumnInfo(this.combocodecolumn)))
        	{
        		trace("comboinnerdataset("+this.ds_cmb.name + ")에 컬럼(" + this.combocodecolumn + ")이 존재하지 않습니다.\combocodecolumn 정보를 확인하세요.");
        		return false;
        	}

        	for (var i=0; i<this.ds_cmb.getRowCount(); i++)
        	{
        		if (this.ds_cmb.getColumn(i, "multiComboChk") == "1")
        		{
        			arrTextList.push(this.ds_cmb.getColumn(i, this.combodatacolumn));
        			arrValueList.push(this.ds_cmb.getColumn(i, this.combocodecolumn));
        		}
        	}
        	this.fn_setComboText(arrTextList, arrValueList);

        	if (!this.gfn_isNull(this.callbackfunc))
        	{
        		this.lookupFunc(this.callbackfunc).call(this.parent.name);
        	}
        };

        /**
         * @description  Combo 클릭
        */
        this._Grid_oncellclick = function(obj, e)
        {
        	var objDs = obj.getBindDataset();

        	if (e.col !=0)
        	{
        		if (objDs.getColumn(e.row, "multiComboChk") == "1") objDs.setColumn(e.row, "multiComboChk", "0");
        		else objDs.setColumn(e.row, "multiComboChk", "1");
        	}

        	if (!this.gfn_isNull(this.maxcount))
        	{
        		var nSelectCount = objDs.getCaseCount("multiComboChk == '1'");
        		if (this.maxcount < nSelectCount)
        		{
        			objDs.setColumn(e.row, "multiComboChk", "0");
        			var arr = [];
        			arr.push(this.maxcount);
        			this.gfn_alert("msg.err.validator.multicombo.maxcnt", arr);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edt_cmb.addEventHandler("oneditclick",this.edt_combo_oneditclick,this);
            this.btn_cmb.addEventHandler("onclick",this.btn_combo_onclick,this);
            this.pdiv_cmb.addEventHandler("oncloseup",this.pdv_combo_oncloseup,this);
        };
        this.loadIncludeScript("Comm_MultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
