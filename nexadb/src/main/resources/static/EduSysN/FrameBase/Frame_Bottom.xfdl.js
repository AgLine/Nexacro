(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            this.set_background("#0c589e");
            if (Form == this.constructor)
            {
                this._setFormPosition(1022,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staLodingTime",null,"3","425","19","7",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_usedecorate("true");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            obj.set_visible("true");
            obj.set_cssclass("sta_BF_LodingTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1022,25,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Frame_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
