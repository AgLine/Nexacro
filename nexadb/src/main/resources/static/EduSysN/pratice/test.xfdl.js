(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sample", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","720","2","234","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼을만들었다ㅏㅏㅏㅏㅏㅏㅏㅏ");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","33","80","515","124",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_sample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"id\"/><Cell col=\"2\" text=\"tel\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:id\"/><Cell col=\"2\" text=\"bind:tel\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","40","26","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","190","26","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tel","340","26","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","8","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("name");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","190","8","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("id");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","340","8","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("tel");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","48","310","436","102",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("gds_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"userId\"/><Cell col=\"1\" text=\"userName\"/><Cell col=\"2\" text=\"authorityId\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\"/><Cell col=\"1\" text=\"bind:userName\"/><Cell col=\"2\" text=\"bind:authorityId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var sSvcID    = "svcTest";
            var sURL      = "svc::selectAll";
            var sInDs     = "input";
            var sOutDs    = "ds_sample=out_list";
            var sParam    = "name="+this.edt_name.value+
        					" id="+this.edt_id.value+
        					" tel="+this.edt_tel.value;
            var sCallBack = "";

        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
