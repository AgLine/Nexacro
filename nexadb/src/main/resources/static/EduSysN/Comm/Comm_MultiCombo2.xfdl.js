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
            obj = new PopupDiv("pdiv_cmb","0","21",null,"129","0",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","0",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("search");
            obj.set_popuptype("none");
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
        this.registerScript("Comm_MultiCombo2.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_MultiCombo2.xfdl (공통 멀티콤보)
        *  @FileName 	cmmMultiCombo.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2018.12.17
        *  @Desction    콤보를 이용한 멀티콤보 구현
                        데이터 사이즈에 따라 리사이즈
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

        this.fv_rowHeight = 30;

        this.fv_btnWidth = 43;
        this.fv_btnHeight = 23;
        this.fv_bottomTerm = 12;


        this.fv_term = 3;
        this.fv_width = 0;

        this.objApp	= this.gfn_getApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
         	this.fv_width = this.pdiv_cmb.getOffsetWidth();
        };

        this.fn_setDataset = function(objDs)
        {
        	this.comboinnerdataset = this.parent.comboinnerdataset;
        	this.combocodecolumn   = this.parent.combocodecolumn;
        	this.combodatacolumn   = this.parent.combodatacolumn;
        	this.allcheck 		   = this.parent.allcheck;
        	this.callbackfunc 	   = this.parent.callbackfunc;
        	this.maxcount          = this.parent.maxcount;

        	if(this.gfn_isNull(this.combocodecolumn)) return false;
        	if(this.gfn_isNull(this.combodatacolumn)) return false;
        	if(this.gfn_isNull(this.allcheck 	   )) this.allcheck  = "false";
        	if(this.gfn_isNull(this.maxcount	   )) this.maxcount = 5;

            //화면에 있는 ds를 콤보에 설정하기 위해 object로 변환
            //var objDs = this.parent.parent.all[this.comboinnerdataset];
        	this._objBindDs = objDs;

            //멀티콤보 데이터셋 컬럼 생성
        	this.ds_cmb.clear();
        	this.ds_cmb.addColumn("mComboChk"         , "STRING");
        	this.ds_cmb.addColumn(this.combocodecolumn, "STRING");
        	this.ds_cmb.addColumn(this.combodatacolumn, "STRING");

            //멀티콤보 데이터셋 데이터 추가
            this.ds_cmb.set_enableevent(false);
        	for(var j=0; j<objDs.getRowCount(); j++)
        	{
        		this.ds_cmb.addRow();
        		this.ds_cmb.setColumn(j, "mComboChk", "0");
        		this.ds_cmb.setColumn(j, this.combocodecolumn, objDs.getColumn(j, this.combocodecolumn));
        		this.ds_cmb.setColumn(j, this.combodatacolumn, objDs.getColumn(j, this.combodatacolumn));
        	}
        	this.ds_cmb.set_enableevent(true);

        	if(this.allcheck == "true"){
        		 this._fnMakeAllCheck();
        	}
        	else {
        		this._fnMakeCombo(this.pdiv_cmb);
        	}
        };

        /**
         * @description 전체선택/해제 추가
        */
        this._fnMakeAllCheck = function ()
        {
        	var compDiv = new Div("div_comboList", 0, 0, null, null, 0,  this.fv_btnHeight + (this.fv_bottomTerm * 2));
        	this.pdiv_cmb.addChild(compDiv.name, compDiv);
            compDiv.set_border("0px none");
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
        	if(this.allcheck =="true"){
                nBotton = 0;
            }
        	else{
                nBotton = this.fv_term;
            }

        	var oGrd = new Grid("grd_cbo", 0, 0, null, null, 0, 0);
        	oGrd.set_cssclass("grd_mCombo");
        	oPdv.addChild(oGrd.name, oGrd);

        	oGrd.set_enableevent(false);
        	oGrd.set_enableredraw(false);

        	oGrd.set_binddataset(this.ds_cmb);
        	oGrd.set_wheelscrollrow(1);
        	oGrd.createFormat();

            //헤더 삭제
        	oGrd.deleteContentsRow("head", 0);
        	oGrd.setFormatRowProperty(0, "size", this.fv_rowHeight);
        	oGrd.setCellProperty("Body", 0, "displaytype", "checkboxcontrol");
        	oGrd.setCellProperty("Body", 0, "edittype", "checkbox");

        	oGrd.show();

        	oGrd.addEventHandler("oncellclick", this._Grid_oncellclick, this);

        	oGrd.set_enableevent(true);
        	oGrd.set_enableredraw(true);

            this.fn_setPdivSize(oGrd);

        	this.Combo00.set_text("선택");
        };

        this.fn_setPdivSize = function(oGrd)
        {
            var nScrollSize = 10;
        	var nDisplayCount = this.maxcount;
        	var nRowCount     = this.ds_cmb.getRowCount();
        	var nHeight = (this.fv_rowHeight  * nDisplayCount);

            //데이터 길이에 상관없이 모두 보이게 처리
        	oGrd.set_autosizingtype("col");
            oGrd.set_scrollbarsize(nScrollSize);

        	if(nDisplayCount >= nRowCount){
                nDisplayCount = nRowCount;
                nScrollSize = 0;
            }

        	if(this.allcheck == "true"){
                this.pdiv_cmb.form.div_comboList.set_height(nHeight);
        		var nplusHeigth = this.fv_btnHeight + (this.fv_bottomTerm * 2);
        		 nHeight += nplusHeigth ;
        		 this.pdiv_cmb.set_height(nHeight);
        	}
        	else {
        		nHeight += this.fv_term ;
        		this.pdiv_cmb.set_height(nHeight-1);
        	}

        	var nGridSize = oGrd.getRealColFullSize();  //그리드 전체 컬럼 사이즈
            var nGridCol0 = oGrd.getRealColSize(0);     //첫번째 컬럼 사이즈: checkbox
            var nGridCol1 = oGrd.getRealColSize(1);     //두번째 컬럼 사이즈: code
            var nGridCol2 = oGrd.getRealColSize(2);     //세번째 컬럼 사이즈: value

            //콤보 사이즈를 기준
            var nComboSize = this.Combo00.getOffsetWidth() - 2; //보더제외

            // 데이터 길이가 짧아 그리드에 빈영역이 생길경우 컬럼사이즈 조정
            // autofit 사용시 비율대로 처리 되는거 방지)
            if(nComboSize > nGridSize){
                oGrd.setRealColSize("body", 0, nGridCol0);
                oGrd.setRealColSize("body", 1, nGridCol1);
                oGrd.setRealColSize("body", 2, nComboSize-nGridCol0-nGridCol1-nScrollSize);
            }
            // 데이터 길이가 길어서 콤보영역에 다 안보일 경우 사이즈 키움
            else{
                this.pdiv_cmb.set_width(nGridSize + nScrollSize + 2);

                //선택버튼 가운데
                if(this.allcheck == "true"){
                    var nLeft = (this.pdiv_cmb.width - (this.fv_btnWidth*2 + this.fv_term)) / 2;
                    this.pdiv_cmb.form.btn_allCheck.set_left(nLeft);
                    this.pdiv_cmb.form.btn_nonCheck.set_left(nLeft+this.fv_btnWidth+this.fv_term);
                }
            }
        }

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
        			var nTop = 21;
        			var nBottom = nexacro.toNumber(nMainHeight) - nexacro.toNumber(this.getOffsetBottom());
        			var nHeight = nexacro.toNumber(this.pdiv_cmb.height) + nexacro.toNumber(this.Combo00.height) + 4;

        			if (nHeight > nBottom) nTop = -(this.pdiv_cmb.height-1);

        			this.pdiv_cmb.trackPopupByComponent(this.Combo00, 0, nTop);
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
        		objBindDs.setColumn(i, "mComboChk", "0");
        	}
        	this.Combo00.set_text("선택");
            this.Combo00.retrunvalue = "";
            this.Combo00.returntext = "";
        };


        /**
         * @description  부모창에서 value 가져갈 수 있는 함수
        */
        this.get_value = function()
        {
        	return this.Combo00.retrunvalue;
        };

        /**
         * @description  부모창에서 text 가져갈 수 있는 함수
        */
        this.get_text = function()
        {
        	return this.Combo00.returntext;
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
        			objDs.setColumn(nFindRow, "mComboChk", "1");
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

        	this.Combo00.retrunvalue = arrValueList.toString();
        	this.Combo00.returntext = sComboText;
        	var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        	var nComboTextWidth = objRtn.nx;

        	var nWidth = this.Combo00.getOffsetWidth();
        	if (nComboTextWidth > nWidth)
        	{
        		this.Combo00.set_text(arrTextList.length+"개 선택");
        		this.Combo00.set_tooltiptext(sComboText);
        		this.Combo00.set_tooltiptype("hover");
        	}
        	else
        	{
        		this.Combo00.set_text(sComboText);
        	}

        	if (this.gfn_isNull(arrTextList)) this.Combo00.set_text("선택");
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
        			this.ds_cmb.setColumn(nFindRow, "mComboChk", "1");
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
        		this.Combo00.set_cssclass("essential");
        	}
        	else{
        		this.Combo00.set_cssclass("");
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
        		this.ds_cmb.setColumn(i, "mComboChk", "1");
        	}
        };

        /**
         * @description none버튼 클릭이벤트
        */
        this._compBtnNonCheck_onclick = function()
        {
        	for (var i=0; i<this.ds_cmb.rowcount; i++)
        	{
        		this.ds_cmb.setColumn(i, "mComboChk", "0");
        	}
        };

        /**
         * @description   button click popupdiv open
        */


        /**
         * @description  Popup Div 닫힐때 값세팅
        */
        this.pdv_combo_oncloseup = function(obj,e)
        {
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
        		if (this.ds_cmb.getColumn(i, "mComboChk") == "1")
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
        		if (objDs.getColumn(e.row, "mComboChk") == "1") objDs.setColumn(e.row, "mComboChk", "0");
        		else objDs.setColumn(e.row, "mComboChk", "1");
        	}

        	if (!this.gfn_isNull(this.maxcount))
        	{
        		var nSelectCount = objDs.getCaseCount("mComboChk == '1'");
        		if (this.maxcount < nSelectCount)
        		{
        			objDs.setColumn(e.row, "mComboChk", "0");
        			var arr = [];
        			arr.push(this.maxcount);
        			this.gfn_alert("msg.err.validator.multicombo.maxcnt", arr);
        		}
        	}
        };

        this.Combo00_onlbuttondown = function(obj,e)
        {
            if(e.fromreferenceobject.id == "dropbutton"){
                this.fn_openCombo();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.pdiv_cmb.addEventHandler("oncloseup",this.pdv_combo_oncloseup,this);
            this.Combo00.addEventHandler("onlbuttondown",this.Combo00_onlbuttondown,this);
        };
        this.loadIncludeScript("Comm_MultiCombo2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
