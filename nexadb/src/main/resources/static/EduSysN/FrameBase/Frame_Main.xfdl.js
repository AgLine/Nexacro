(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainForm");
            this.set_titletext("MainForm");
            this.set_cssclass("frm_WF_MainBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,693);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Notice", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">* X-PUSH 변경사항 입니다.</Col></Row><Row><Col id=\"Column0\">* 마이플랫폼 제품 제약사항 관련건</Col></Row><Row><Col id=\"Column0\">* 기술지원 홈페이지 통합 관련 건</Col></Row><Row><Col id=\"Column0\">* 구글, 안드로이드 앱 64bit 지원 일정</Col></Row><Row><Col id=\"Column0\">* MiPlatform 정기 기본 교육 종료 안내</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Tip", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">* [XChart] 마우스로 Chart 클릭 시 X축, Y축 값 가져오기</Col></Row><Row><Col id=\"Column0\">* Div 영역의 VScroll 이 max 값까지 도달했는 지 확인하기</Col></Row><Row><Col id=\"Column0\">* Grid CheckBox 에서 true/false Value를 설정하는 우회방안</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FAQ", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">* 투비소프트 교육 신청 방법 변경 안내</Col></Row><Row><Col id=\"Column0\">* 다음 회차 교육은 언제 신청 할 수 있나요?</Col></Row><Row><Col id=\"Column0\">* 교육 등록 마감 시 추가 등록은 가능한가요?</Col></Row><Row><Col id=\"Column0\">* 각 제품별 교육일정은 어떻게 되나요?</Col></Row><Row><Col id=\"Column0\">* 교육 수료증은 어떻게 받을 수 있나요?</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","129","35","790","290",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_MainImg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","45","360","310","280",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_MainBoard");
            obj.set_text("Notice");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","368","360","310","280",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_MainBoard");
            obj.set_text("Tip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_01","691","361","310","280",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_MainBoard");
            obj.set_text("FAQ");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","65","420","275","187",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_Board");
            obj.set_binddataset("ds_Notice");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","711","420","275","187",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("grd_WF_Board");
            obj.set_binddataset("ds_FAQ");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"259\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","378","416","295","187",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("grd_WF_Board");
            obj.set_binddataset("ds_Tip");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"241\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"textareacontrol\" edittype=\"textarea\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1048,693,this,function(p){});
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
        this.loadIncludeScript("Frame_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
