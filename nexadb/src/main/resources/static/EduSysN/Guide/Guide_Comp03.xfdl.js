(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp03");
            this.set_titletext("Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">1001</Col><Col id=\"MENU_NAME\">메뉴1</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">1002</Col><Col id=\"MENU_NAME\">메뉴1-1</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">1003</Col><Col id=\"MENU_NAME\">메뉴1-1-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1004</Col><Col id=\"MENU_NAME\">메뉴1-1-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1005</Col><Col id=\"MENU_NAME\">메뉴1-1-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_NAME\">메뉴1-2</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">1009</Col><Col id=\"MENU_NAME\">메뉴1-2-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">메뉴1-2-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2001</Col><Col id=\"MENU_NAME\">메뉴2</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">2002</Col><Col id=\"MENU_NAME\">메뉴2-1</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2003</Col><Col id=\"MENU_NAME\">메뉴2-1-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2004</Col><Col id=\"MENU_NAME\">메뉴2-1-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2005</Col><Col id=\"MENU_NAME\">메뉴2-1-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2007</Col><Col id=\"MENU_NAME\">메뉴2-2</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2008</Col><Col id=\"MENU_NAME\">메뉴2-2-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2009</Col><Col id=\"MENU_NAME\">메뉴2-2-2</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">메뉴2-2-3</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2011</Col><Col id=\"MENU_NAME\">메뉴2-3</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">2012</Col><Col id=\"MENU_NAME\">메뉴2-3-1</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">2013</Col><Col id=\"MENU_NAME\">메뉴2-3-2</Col><Col id=\"LEVEL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_ID\" type=\"STRING\" size=\"10\"/><Column id=\"FULL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"POS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"10\"/><Column id=\"SALARY\" type=\"INT\" size=\"10\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"MARRIED\" type=\"STRING\" size=\"10\"/><Column id=\"MEMO\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20101003</Col><Col id=\"SALARY\">83000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"EMPL_ID\">AA001</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"POS_CD\">02</Col><Col id=\"HIRE_DATE\">20051011</Col><Col id=\"SALARY\">76000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">greenyellow</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">AA002</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"FULL_NAME\">Dillon</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20150401</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">lightpink</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"EMPL_ID\">AA003</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"POS_CD\">03</Col><Col id=\"HIRE_DATE\">20070206</Col><Col id=\"SALARY\">95000</Col><Col id=\"GENDER\">M</Col><Col id=\"MARRIED\">true</Col><Col id=\"MEMO\">aliceblue</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"EMPL_ID\">BB001</Col><Col id=\"CHK\">0</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"POS_CD\">01</Col><Col id=\"HIRE_DATE\">20090512</Col><Col id=\"SALARY\">60000</Col><Col id=\"GENDER\">W</Col><Col id=\"MARRIED\">false</Col><Col id=\"MEMO\">ivory</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"EMPL_ID\">BB002</Col><Col id=\"CHK\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">HR Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Sales Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","10","65","513","212",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"206\"/><Column size=\"117\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"Text\"/><Cell col=\"3\" text=\"Date\"/><Cell col=\"4\" text=\"Number\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:FULL_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\"/><Cell col=\"4\" text=\"bind:SALARY\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"Sum\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","602","65",null,"208","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tree");
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Tree\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","11","307",null,"139","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"69\"/><Column size=\"71\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" controlautosizingtype=\"none\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"정형텍스트\"/><Cell col=\"6\" text=\"비정형텍스트\"/><Cell col=\"7\" text=\"숫자\"/><Cell col=\"8\" text=\"Expand\"/><Cell col=\"9\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:FULL_NAME\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SALARY\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_code\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarpopupsize=\"156 179\" calendarusetrailingday=\"true\"/><Cell col=\"5\" text=\"bind:EMPL_ID\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:FULL_NAME\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"number\"/><Cell col=\"8\" edittype=\"none\" expandshow=\"show\" expandimage=\"URL(&quot;theme://images/btn_WF_ExpandN.png&quot;)\" expandsize=\"18\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"Save\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static142","13","480","158","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("head text 2줄");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","10","507","335","107",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_Grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Head&#13;&#10;Text\"/><Cell col=\"2\" text=\"Head&#13;&#10;Text\"/><Cell col=\"3\" text=\"Head&#13;&#10;Text\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static143","440","477","158","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("head  2줄 이상");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","440","506","314","107",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_Grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"Column\"/><Cell col=\"2\" text=\"Column01\"/><Cell col=\"3\" colspan=\"2\" text=\"Column02\"/><Cell row=\"1\" col=\"2\" text=\"Column01-1\"/><Cell row=\"1\" col=\"3\" text=\"Column02-1\"/><Cell row=\"1\" col=\"4\" text=\"Column02-2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"text\"/><Cell col=\"3\" displaytype=\"number\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10",null,"30","424",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Components Guide - 그리드");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","525","65","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00","537","70","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","525","95","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","525","246","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00","537","100","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00","537","251","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","755","505","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","769","511","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h28");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00","769","541","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("h28");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00","755","535","9","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00","346","507","9","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00_00","354","522","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("h50");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1028,630,this,function(p){});
            obj.set_mobileorientation("landscape");
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
            this.addEventHandler("onload",this.Form_onload,this);
        };
        this.loadIncludeScript("Guide_Comp03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
