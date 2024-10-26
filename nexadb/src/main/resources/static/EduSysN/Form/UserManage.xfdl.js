(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UserManage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userPhone\" type=\"STRING\" size=\"256\"/><Column id=\"authorityId\" type=\"STRING\" size=\"256\"/><Column id=\"authorityUpdate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"authorityName\" type=\"STRING\" size=\"256\"/><Column id=\"authorityId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSerch","830","20","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","680","25","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","620","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","470","25","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","410","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","70","900","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_user");
            obj.set_autoupdatetype("comboselect");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"이메일\"/><Cell col=\"2\" text=\"연락처\"/><Cell col=\"3\" text=\"권한\" combodataset=\"ds_auth\" combodatacol=\"authorityName\" combocodecol=\"authorityId\"/><Cell col=\"4\" text=\"권한변경\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:userName\"/><Cell col=\"1\" text=\"bind:userId\"/><Cell col=\"2\" text=\"bind:userPhone\"/><Cell col=\"3\" text=\"bind:authorityId\" displaytype=\"combotext\" combodataset=\"ds_auth\" combodatacol=\"authorityName\" combocodecol=\"authorityId\"/><Cell col=\"4\" comboautoselect=\"true\" displaytype=\"combocontrol\" edittype=\"combo\" combodatacol=\"authorityName\" combocodecol=\"authorityId\" combodataset=\"ds_auth\" text=\"선택\" controlautosizingtype=\"width\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" text=\"저장\"/></Band></Format></Formats>");
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
        this.registerScript("UserManage.xfdl", function() {
        // 코드 >> 네임 매핑방법
        // Action >> combotext
        // CellCombo >> 콤보리스트넣는것처럼 dataset 바인딩 ㄱㄱ

        this.UserManage_onload = function(obj,e)
        {
        	var strId    = "svcAuth";
        	var strUrl   = "svc::auth";
        	var inData   = "";
        	var outData  = "ds_auth=out_auth";
        	var param   = "";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);

        	var strId    = "svcUser";
        	var strUrl   = "svc::user";
        	var inData   = "";
        	var outData  = "ds_user=out_user";
        	var param   = "";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.fn_callBack = function (svcID, errCD, errMSG)
        {
        	this.ds_auth.insertRow(0); // 첫 번째 행에 추가
            this.ds_auth.setColumn(0, "authorityName", "선택"); // 콤보박스에 표시될 텍스트
            this.ds_auth.setColumn(0, "authorityId", ""); // 선택 시 공백으로 처리될 값
        };
        this.btnSerch_onclick = function(obj,e)
        {
        	var strId    = "svcUserSerch";
        	var strUrl   = "svc::userSerch";
        	var inData   = "";
        	var outData  = "ds_user=out_user";
        	var param   = "userId="+this.edtId.value+
        				  " userName="+this.edtName.value;
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UserManage_onload,this);
            this.btnSerch.addEventHandler("onclick",this.btnSerch_onclick,this);
        };
        this.loadIncludeScript("UserManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
