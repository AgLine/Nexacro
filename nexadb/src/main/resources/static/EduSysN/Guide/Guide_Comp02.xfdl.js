(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp02");
            this.set_titletext("버튼");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06_00_00_00_00_00_00_00","10","640","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02_00_00_00_00_00","109","640","898","82",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00_00","10","559","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("행추가\r\n행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02_00_00_00_00","109","559","898","82",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02_00_00","109","397","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01_00_00_00","707","397","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_00_00","408","397","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01_00","707","235","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00","408","235","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_14","468","261","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("가나");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Main");
            this.addChild(obj.name, obj);

            obj = new Button("btn_30","737","261","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Main");
            this.addChild(obj.name, obj);

            obj = new Button("btn_31","796","261","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_Main");
            this.addChild(obj.name, obj);

            obj = new Button("btn_28","164","666","30","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new Button("btn_85","468","423","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Detail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"26","450",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Components Guide - 버튼");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Button("btn_71","737","423","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00","781","239","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("W 5");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","791","259","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Button("btn_71_00","796","423","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","169","588","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del","199","588","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00","233","428","149","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("<fc v=\'red\'>class =btn_WF_Detail</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00","781","400","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("W 5");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00","791","420","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_01","150","665","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_01","125","670","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_01","164","697","30","9",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_00_01","166","704","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("W30");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00_00_00_00","233","671","196","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("<fc v=\'red\'>class=btn_WF_Find</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00_00","150","588","9","25",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_01","125","588","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("h25");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_02","169","615","25","9",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_00_02","169","622","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("W25");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_00_00","194","583","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_00_00_00","185","564","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("W 5");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add00","468","588","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del00","737","588","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_Del");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00_00_00_01","538","590","139","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("<fc v=\'red\'>class=btn_WF_Add</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00_00_01","807","590","139","21",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("<fc v=\'red\'>class=btn_WF_Del</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00","408","80","300","156",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","408","50","300","31",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("disabled");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","109","50","300","31",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","109","80","300","156",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","10","80","100","156",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","10","50","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","707","50","300","31",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("화면 정렬 가이드");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01","707","80","300","156",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00","125","96","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","150","90","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","329","199","34","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("W 90");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","329","164","34","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("W 78");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","169","90","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가나");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","329","94","34","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("W 54");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_04","169","195","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03","169","160","78","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","169","125","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","329","129","34","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("W 66");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","468","125","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가나다");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_05","468","160","78","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가나다라");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_06","468","195","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("가나다라마");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_07","468","90","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("가나");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","300","15","280","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("<fc v=\'royalblue\'>※ 최소 2글자 기준으로 한글자에 12px 증가</fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_44","737","160","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("btn_45","808","160","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("btn_46","879","160","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00","793","137","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("W 5");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","803","154","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02","109","235","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","10","235","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Main");
            this.addChild(obj.name, obj);

            obj = new Button("btn_15","169","261","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_FrmMain");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","150","261","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01","125","270","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","233","266","169","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<fc v=\'red\'>class = btn_WF_FrmMain</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01_00_00","707","316","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_00","408","316","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02_00","109","316","300","82",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","10","316","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_26","468","342","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("가나");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","791","340","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","781","320","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("W 5");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_27","169","342","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_FrmSub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_34","796","342","66","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("가나다");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Button("btn_33","737","342","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Sub");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00","150","342","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00","125","347","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00","233","347","169","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("<fc v=\'red\'>btn_WF_FrmSub</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","10","397","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Detail");
            this.addChild(obj.name, obj);

            obj = new Button("btn_81","169","423","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00","150","423","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00","125","426","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02_00_00_00","109","478","898","82",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00_00","10","478","100","82",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_16","169","505","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_17","235","505","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01_00_00_00","150","505","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00","125","508","26","26",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("h28");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00","169","536","60","9",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_00","186","538","28","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("W60");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00_00","229","500","6","9",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01_00_00_00_00_00","220","481","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("W 6");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_51","468","505","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_Btn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_52","737","505","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_Cancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00_00","807","509","179","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("<fc v=\'red\'>class=btn_POP_Cancel</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static83_00_00_00_00","538","509","179","26",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("<fc v=\'red\'>class=btn_POP_Btn</fc>");
            obj.set_visible("true");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1028,730,this,function(p){});
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
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add00.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del00.addEventHandler("onclick",this.btn_del_onclick,this);
        };
        this.loadIncludeScript("Guide_Comp02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
