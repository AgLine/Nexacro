(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp04");
            this.set_titletext("조회/상세영역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","10","77","1008","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","8","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","280","8","130","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회라벨2");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","410","8","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00_00","563","8","9","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","700","145","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("class : div_WF_Search");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","728","118","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","316","139","195","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("class : sta_WF_SearchLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","370","111","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","204",null,"78","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","8","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","130","8","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_cssclass("essential");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","410","8","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","280","8","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","560","8","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","690","8","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","280","42","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("조회라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","0","42","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("조회라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","410","42","150","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","42","120","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_28","254","42","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_00","560","1","9","8",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","558","35","9","9",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00","559","68","9","8",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","570","29","32","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00","910","204","9","78",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00","922","240","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h78");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00","682","76","9","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00","694","93","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h44");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_00","20","141","195","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("위치 - left = 0, top= 8");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","48","112","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","10",null,"26","638",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Components Guide - 조회/상세영역");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","582","91","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","421","112","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_01","540","127","35","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("W150");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_02","570","187","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00","570","282","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","46","97","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회영역");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","10","367","1008","44",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_WF_Detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","130","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("상세영역1");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","8","150","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","280","8","130","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("상세영역2");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","410","8","150","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00_00","563","8","9","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static22_00","700","435","173","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("class : div_WF_Detail");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","728","408","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_01","316","429","195","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("class : sta_WF_DetailLabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","370","401","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_search00","10","494",null,"78","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","8","130","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("0");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_search00.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","130","8","150","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_cssclass("essential");
            obj.set_text("Combo00");
            this.div_search00.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","410","8","150","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static01","280","8","130","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("3");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static00","560","8","130","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("4");
            obj.set_text("라벨");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_search00.addChild(obj.name, obj);

            obj = new Edit("edt_name","690","8","150","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("5");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static02","280","42","130","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("6");
            obj.set_text("상세영역2");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("Static05","0","42","130","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("7");
            obj.set_text("상세영역1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.div_search00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","410","42","150","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("8");
            this.div_search00.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","42","120","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("9");
            this.div_search00.addChild(obj.name, obj);

            obj = new Button("btn_28","254","42","26","26",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Find");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta_01_00","560","1","9","8",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","558","35","9","9",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00","559","68","9","8",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","570","29","32","20",null,null,null,null,null,null,this.div_search00.form);
            obj.set_taborder("14");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.div_search00.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_01","910","494","9","78",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_02","922","530","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("h78");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00_00","682","366","9","44",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_01","694","383","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("h44");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_00_00","20","431","195","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("위치 - left = 0, top= 8");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","48","402","2","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#2391ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_01","582","381","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","421","402","150","9",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_01_00","540","417","35","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("W150");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_02_00","570","477","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00_00","570","572","32","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("h 8");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","10","336","97","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("상세영역");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search00.form
            obj = new Layout("default","",0,0,this.div_search00.form,function(p){});
            this.div_search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1028,720,this,function(p){});
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
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search.form.Static02.addEventHandler("onclick",this.div_search_Static02_onclick,this);
            this.div_search00.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search00.form.Static02.addEventHandler("onclick",this.div_search_Static02_onclick,this);
        };
        this.loadIncludeScript("Guide_Comp04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
