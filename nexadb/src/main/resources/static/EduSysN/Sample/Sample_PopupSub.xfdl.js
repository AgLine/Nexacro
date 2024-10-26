(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_PopupSub");
            this.set_titletext("Sample_PopupSub");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","20",null,"262","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","153","292","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","87","292","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_PopupSub.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
            var paramStr = this.getOwnerFrame().pStr;
            var paramNum = this.getOwnerFrame().pNum;
            var paramObj = this.getOwnerFrame().pObj;

            trace(paramStr + " : " + paramNum + " : " + paramObj);
        };

        this.btn_ok_onclick = function(obj,e)
        {
            var sCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CD");
            var sName = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");

        //     this.close(sCode+"|"+sName);

        	var objRtn = { deptcd : sCode,
        			       deptnm : sName };

        	this.close(JSON.stringify(objRtn));
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("Sample_PopupSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
