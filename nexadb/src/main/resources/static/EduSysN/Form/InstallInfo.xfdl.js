(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("InstallInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmbCar1", this);
            obj._setContents("<ColumnInfo><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/><Column id=\"comboName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbCar2", this);
            obj._setContents("<ColumnInfo><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/><Column id=\"comboName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboCode\">init</Col><Col id=\"comboName\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_coo", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_busi", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_charge", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_num", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">010</Col><Col id=\"comboCode\">010</Col></Row><Row><Col id=\"comboName\">011</Col><Col id=\"comboCode\">011</Col></Row><Row><Col id=\"comboName\">016</Col><Col id=\"comboCode\">016</Col></Row><Row><Col id=\"comboName\">017</Col><Col id=\"comboCode\">017</Col></Row><Row><Col id=\"comboName\">019</Col><Col id=\"comboCode\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_building", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">아파트</Col><Col id=\"comboCode\">apt</Col></Row><Row><Col id=\"comboName\">빌라</Col><Col id=\"comboCode\">villa</Col></Row><Row><Col id=\"comboName\">주택</Col><Col id=\"comboCode\">house</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">2024</Col><Col id=\"comboCode\">2024</Col></Row><Row><Col id=\"comboName\">2025</Col><Col id=\"comboCode\">2025</Col></Row><Row><Col id=\"comboName\">2026</Col><Col id=\"comboCode\">2026</Col></Row><Row><Col id=\"comboName\">2027</Col><Col id=\"comboCode\">2027</Col></Row><Row><Col id=\"comboName\">2028</Col><Col id=\"comboCode\">2028</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">01</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">02</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">03</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">04</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">05</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">06</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">07</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">08</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">09</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_day", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col><Col id=\"comboCode\">init</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">01</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">02</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">03</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">04</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">05</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">06</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">07</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">08</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">09</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row><Row><Col id=\"comboName\">13</Col><Col id=\"comboCode\">13</Col></Row><Row><Col id=\"comboName\">14</Col><Col id=\"comboCode\">14</Col></Row><Row><Col id=\"comboName\">15</Col><Col id=\"comboCode\">15</Col></Row><Row><Col id=\"comboName\">16</Col><Col id=\"comboCode\">16</Col></Row><Row><Col id=\"comboName\">17</Col><Col id=\"comboCode\">17</Col></Row><Row><Col id=\"comboName\">18</Col><Col id=\"comboCode\">18</Col></Row><Row><Col id=\"comboName\">19</Col><Col id=\"comboCode\">19</Col></Row><Row><Col id=\"comboName\">20</Col><Col id=\"comboCode\">20</Col></Row><Row><Col id=\"comboName\">21</Col><Col id=\"comboCode\">21</Col></Row><Row><Col id=\"comboName\">22</Col><Col id=\"comboCode\">22</Col></Row><Row><Col id=\"comboName\">23</Col><Col id=\"comboCode\">23</Col></Row><Row><Col id=\"comboName\">24</Col><Col id=\"comboCode\">24</Col></Row><Row><Col id=\"comboName\">25</Col><Col id=\"comboCode\">25</Col></Row><Row><Col id=\"comboName\">26</Col><Col id=\"comboCode\">26</Col></Row><Row><Col id=\"comboName\">27</Col><Col id=\"comboCode\">27</Col></Row><Row><Col id=\"comboName\">28</Col><Col id=\"comboCode\">28</Col></Row><Row><Col id=\"comboName\">29</Col><Col id=\"comboCode\">29</Col></Row><Row><Col id=\"comboName\">30</Col><Col id=\"comboCode\">30</Col></Row><Row><Col id=\"comboName\">31</Col><Col id=\"comboCode\">31</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_time", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">오전</Col><Col id=\"comboCode\">AM</Col></Row><Row><Col id=\"comboName\">오후</Col><Col id=\"comboCode\">PM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hour", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col></Row><Row><Col id=\"comboName\">1</Col><Col id=\"comboCode\">1</Col></Row><Row><Col id=\"comboName\">2</Col><Col id=\"comboCode\">2</Col></Row><Row><Col id=\"comboName\">3</Col><Col id=\"comboCode\">3</Col></Row><Row><Col id=\"comboName\">4</Col><Col id=\"comboCode\">4</Col></Row><Row><Col id=\"comboName\">5</Col><Col id=\"comboCode\">5</Col></Row><Row><Col id=\"comboName\">6</Col><Col id=\"comboCode\">6</Col></Row><Row><Col id=\"comboName\">7</Col><Col id=\"comboCode\">7</Col></Row><Row><Col id=\"comboName\">8</Col><Col id=\"comboCode\">8</Col></Row><Row><Col id=\"comboName\">9</Col><Col id=\"comboCode\">9</Col></Row><Row><Col id=\"comboName\">10</Col><Col id=\"comboCode\">10</Col></Row><Row><Col id=\"comboName\">11</Col><Col id=\"comboCode\">11</Col></Row><Row><Col id=\"comboName\">12</Col><Col id=\"comboCode\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_city", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gu", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"comboName\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outIst", this);
            obj._setContents("<ColumnInfo><Column id=\"istReqCar\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCarName\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCoo\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCharge\" type=\"STRING\" size=\"256\"/><Column id=\"istReqContractNum\" type=\"STRING\" size=\"256\"/><Column id=\"receptionNum\" type=\"STRING\" size=\"256\"/><Column id=\"istReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"istReqVehiNum\" type=\"STRING\" size=\"256\"/><Column id=\"istReqType\" type=\"STRING\" size=\"256\"/><Column id=\"clientName\" type=\"STRING\" size=\"256\"/><Column id=\"buildingType\" type=\"STRING\" size=\"256\"/><Column id=\"clientPhone\" type=\"STRING\" size=\"256\"/><Column id=\"clientEmail\" type=\"STRING\" size=\"256\"/><Column id=\"clientAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"clientAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"istReqVisitDate\" type=\"STRING\" size=\"256\"/><Column id=\"dealerBranch\" type=\"STRING\" size=\"256\"/><Column id=\"dealerName\" type=\"STRING\" size=\"256\"/><Column id=\"dealerPhone\" type=\"STRING\" size=\"256\"/><Column id=\"dealerAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"dealerAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pic\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCancelMsg\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCancelReason\" type=\"STRING\" size=\"256\"/><Column id=\"istReqCancelDate\" type=\"STRING\" size=\"256\"/><Column id=\"istReqState\" type=\"STRING\" size=\"256\"/><Column id=\"istReqBeforeState\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outClient", this);
            obj._setContents("<ColumnInfo><Column id=\"clientName\" type=\"STRING\" size=\"256\"/><Column id=\"buildingType\" type=\"STRING\" size=\"256\"/><Column id=\"clientPhone\" type=\"STRING\" size=\"256\"/><Column id=\"clientEmail\" type=\"STRING\" size=\"256\"/><Column id=\"clientAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"clientAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"clientId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outDealer", this);
            obj._setContents("<ColumnInfo><Column id=\"dealerName\" type=\"STRING\" size=\"256\"/><Column id=\"dealerPhone\" type=\"STRING\" size=\"256\"/><Column id=\"dealerBranch\" type=\"STRING\" size=\"256\"/><Column id=\"dealerAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"dealerAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"dealerId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sta", this);
            obj._setContents("<ColumnInfo><Column id=\"comboName\" type=\"STRING\" size=\"256\"/><Column id=\"comboCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cmbCar2","206","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmbCar2");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCar1","50","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmbCar1");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_autoselect("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCoo","363","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_coo");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBu","520","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_busi");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCharge","677","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_charge");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","40","900","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","295","10","80","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","538","10","120","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","40","120","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("신청대수");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","538","40","120","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","50","120","900","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설치고객정보");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","50","140","900","105",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","450","10","120","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("건물구분");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","10","45","120","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","450","45","120","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Email");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","10","75","120","15",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("설치주소");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","50","255","900","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","7","120","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("실사희망일시");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","290","7","15","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("년");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","385","7","15","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("월");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","480","7","15","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("일");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","735","7","15","15",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("시");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","50","295","900","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("딜러정보");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","50","315","900","70",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("지점");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static01","450","10","120","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static02","450","40","120","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("2");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","40","120","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("3");
            obj.set_text("담당딜러");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static03","635","10","15","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("4");
            obj.set_text("시");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static04","720","10","15","15",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("5");
            obj.set_text("구");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("btnUdt","830","480","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Edit("edtContract","183","50","147","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtReception","426","50","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIst","711","50","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","183","80","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","711","80","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("개인");
            obj.set_value("개인");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCname","183","151","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCBuild","636","150","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_building");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("init");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNum","183","186","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_num");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCphone1","260","186","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCphone2","330","186","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCemail","636","183","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbYear","175","260","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_year");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_autoselect("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMonth","366","260","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("ds_month");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("1");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDay","461","260","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_day");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","556","260","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_time");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbHour","716","260","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_hour");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDbranch","183","323","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDname","183","353","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCity","621","323","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_city");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGu","706","323","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_gu");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbNum00","621","356","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_num");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("선택");
            obj.set_value(" ");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDphone1","700","356","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDphone2","771","356","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","51","395","900","70",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","15",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("메세지");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","450","10","120","15",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("진행상태/담당자");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static02","450","40","120","15",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("취소일시");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","40","120","15",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("edtMsg","183","403","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCan","183","433","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSta","620","403","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_sta");
            obj.set_datacolumn("comboName");
            obj.set_codecolumn("comboCode");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCan","621","433","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPic","781","403","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Button("btnList","700","480","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("설치목록");
            this.addChild(obj.name, obj);

            obj = new Button("btnAs","830","480","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("AS등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            this.Div06.form.addLayout(obj.name, obj);

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
        this.registerScript("InstallInfo.xfdl", function() {
        this.objApp 	  = this.gfn_getApplication();

        this.InstallInfo_onload = function(obj,e)
        {
        // 	trace(this.objApp.av_WorkFrame);
        // 	trace(this.objApp.av_WorkFrame.frames[0].id);
        // 	trace(this.getOwnerFrame().receiveno);
        	var sSvcID    = "svcComboGroup";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_cmbCar1=out_combo";
            var sParam    = "comboGroup=CAR";
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var sSvcID    = "svcComboGroup3";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_coo=out_combo";
            var sParam    = "comboGroup=COOPERATIVE";
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var sSvcID    = "svcComboGroup4";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_busi=out_combo";
            var sParam    = "comboGroup=BUSINESS";
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var sSvcID    = "svcComboGroup5";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_charge=out_combo";
            var sParam    = "comboGroup=CHARGE";
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var sSvcID    = "svcComboGroup6";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_city=out_combo";
            var sParam    = "comboGroup=CITY";
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var sSvcID    = "svcComboGroup8";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_sta=out_combo";
            var sParam    = "comboGroup=STATE";
            var sCallBack = "fn_comboCallback";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	var strId    = "svcistStainfo";
        	var strUrl   = "svc::istStainfo";
        	var inData   = "";
        	var outData  = "ds_outIst=out_istreq ,ds_outClient=out_client ,ds_outDealer=out_dealer";
        	var param   = "receptionNum="+this.getOwnerFrame().receiveno;
        	var callBack = "fn_callback";
        	this.transaction(strId, strUrl, inData, outData, param, callBack);
        };

        this.fn_callback = function ()
        {
        	this.cmbCar1.set_value(this.ds_outIst.getColumn(0,"istReqCar"));
        	this.cmbCar1_onitemchanged();
        	this.cmbCar2.set_value(this.ds_outIst.getColumn(0,"istReqCarName"));
        	this.cmbCoo.set_value(this.ds_outIst.getColumn(0,"istReqCoo"));
        	this.cmbBu.set_value("BUSI1");
        	this.cmbCharge.set_value(this.ds_outIst.getColumn(0,"istReqCharge"));


        	this.edtContract.set_value(this.ds_outIst.getColumn(0,"istReqContractNum"));
        	this.edtReception.set_value(this.ds_outIst.getColumn(0,"receptionNum"));
        	this.calIst.set_value(this.ds_outIst.getColumn(0,"istReqDate"));
        	this.Spin00.set_value(this.ds_outIst.getColumn(0,"istReqVehiNum"));

        	this.cmbYear.set_value(this.ds_outIst.getColumn(0,"istReqVisitDate").substring(0,4));
        	this.cmbMonth.set_value(this.ds_outIst.getColumn(0,"istReqVisitDate").substring(4,6));
        	this.cmbDay.set_value(this.ds_outIst.getColumn(0,"istReqVisitDate").substring(6,8));
        	this.Radio00.set_value(this.ds_outIst.getColumn(0,"istReqVisitDate").substring(8,10));
        	this.cmbHour.set_value(this.ds_outIst.getColumn(0,"istReqVisitDate").substring(10,12))

        	this.edtCname.set_value(this.ds_outClient.getColumn(0,"clientName"));
        	this.cmbCBuild.set_value(this.ds_outClient.getColumn(0,"buildingType"));
        	this.cmbNum.set_value(this.ds_outClient.getColumn(0,"clientPhone").substring(0,3));
        	this.edtCphone1.set_value(this.ds_outClient.getColumn(0,"clientPhone").substring(3,7));
        	this.edtCphone2.set_value(this.ds_outClient.getColumn(0,"clientPhone").substring(7,11));
        	this.edtCemail.set_value(this.ds_outClient.getColumn(0,"clientEmail"));

        	this.edtDbranch.set_value(this.ds_outDealer.getColumn(0,"dealerBranch"));
        	this.cmbCity.set_value(this.ds_outDealer.getColumn(0,"dealerAddr1"));
        	this.cmbCity_onitemchanged();
        	this.cmbGu.set_value(this.ds_outDealer.getColumn(0,"dealerAddr2"));
        	this.edtDname.set_value(this.ds_outDealer.getColumn(0,"dealerName"));
        	this.cmbNum00.set_value(this.ds_outDealer.getColumn(0,"dealerPhone").substring(0,3));
        	this.edtDphone1.set_value(this.ds_outDealer.getColumn(0,"dealerPhone").substring(3,7));
        	this.edtDphone2.set_value(this.ds_outDealer.getColumn(0,"dealerPhone").substring(7,11));

        	this.edtPic.set_value(this.ds_outIst.getColumn(0,"pic"));
        	this.cmbSta.set_value(this.ds_outIst.getColumn(0,"istReqState"));

        	this.ds_outIst.setColumn(0, "istReqBeforeState", this.ds_outIst.getColumn(0,"istReqState"));

        	if(this.ds_outIst.getColumn(0,"istReqState") == "IRREQCOM"){
        		this.btnAs.set_visible(true);
        		this.btnUdt.set_visible(false);
        	}else{
        		this.btnAs.set_visible(false);
        		this.btnUdt.set_visible(true);
        	}
        };

        this.fn_comboCallback = function ()
        {
        	this.ds_sta.set_enableevent(false);

        	// comboCode의 값이 'IR'로 시작하는 조건으로 필터 설정
        	this.ds_sta.filter("comboCode.indexOf('IR') == 0");

        	this.ds_sta.set_enableevent(true);

        };

        this.cmbCar1_onitemchanged = function(obj,e)
        {
        	var sSvcID    = "svcComboGroup2";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_cmbCar2=out_combo";
            var sParam    = "comboGroup="+this.cmbCar1.value;
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        	this.cmbCar2.set_value("init");
        };

        this.cmbCity_onitemchanged = function(obj,e)
        {
        	var sSvcID    = "svcComboGroup7";
            var sURL      = "svc::comboGroup";
            var sInDs     = "";
            var sOutDs    = "ds_gu=out_combo";
            var sParam    = "comboGroup="+this.cmbCity.value;
            var sCallBack = "";
        	this.transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_phoneNum = function ()
        {
            if (this.edtCphone1.value.length !== 4) {
                alert("반드시 4글자를 입력해야 합니다.");
                this.edtCphone1.setFocus();
                return false;  // 제출을 중단함
            }
        	if (this.edtCphone2.value.length !== 4) {
                alert("반드시 4글자를 입력해야 합니다.");
                this.edtCphone2.setFocus();
                return false;  // 제출을 중단함
            }

        	if (this.edtDphone1.value.length !== 4) {
                alert("반드시 4글자를 입력해야 합니다.");
                this.edtDphone1.setFocus();
                return false;  // 제출을 중단함
            }

        	if (this.edtDphone2.value.length !== 4) {
                alert("반드시 4글자를 입력해야 합니다.");
                this.edtDphone2.setFocus();
                return false;  // 제출을 중단함
            }
            return true;
        };

        this.fn_validateComp = function (comp)
        {
        	var childComp;

            // 부모 컴포넌트 (폼 또는 Div) 안의 모든 컴포넌트 순회
        	//trace("컴포넌트"+comp.length);
            for (var i = 0; i < comp.length; i++) {
                childComp = comp[i];
        		//trace(childComp.name);
                // Edit 컴포넌트에 대한 처리
                if (childComp instanceof Edit) {
                    if (childComp.value == undefined || childComp.value == "") {
        				if(childComp.name == "edtMsg" || childComp.name == "edtCan"){
        					if(this.cmbSta.value == "IRREQCAN"){
        						this.alert(childComp.name + " 값이 비어있습니다.");
        						return false;
        					}
        				}else{
        					this.alert(childComp.name + " 값이 비어있습니다.");
        					return false;
        				}
                    }
                }

                // Combo 컴포넌트에 대한 처리
                else if (childComp instanceof Combo) {
                    if (childComp.value == "init") {
        				this.alert(childComp.name + " 값이 비어있습니다.");
        				return false;
                    }
                }

        		// Spin 컴포넌트에 대한 처리
                else if (childComp instanceof Spin) {
                    if (childComp.value == null || childComp.value == "") {
        				this.alert(childComp.name + " 값이 비어있습니다.");
        				return false;
                    }
                }

        		// Calendar 컴포넌트에 대한 처리
                else if (childComp instanceof Calendar) {
                    if (childComp.value == null || childComp.value == "") {
                        if(childComp.name == "calCan"){
        					if(this.cmbSta.value == "IRREQCAN"){
        						this.alert(childComp.name + " 값이 비어있습니다.");
        						return false;
        					}
        				}else{
        					this.alert(childComp.name + " 값이 비어있습니다.");
        					return false;
        				}
                    }
                }
            }

        	return true;
        };

        this.cmbSta_onitemchanged = function(obj,e)
        {
        	if(this.cmbSta.value == "IRREQCAN"){
        		var today = new Date();
        		var year = today.getFullYear();
        		var month = ("0" + (today.getMonth() + 1)).slice(-2);  // 월은 0부터 시작하므로 1 더해줌
        		var day = ("0" + today.getDate()).slice(-2);

        		this.calCan.set_value(year + month + day);
        	}
        };

        this.btnUdt_onclick = function(obj,e)
        {
        	if(this.fn_validateComp(this.components)){
        		this.ds_outIst.setColumn(0, "istReqCar", this.cmbCar1.value);
        		this.ds_outIst.setColumn(0, "istReqCarName", this.cmbCar2.value);
        		this.ds_outIst.setColumn(0, "istReqCoo", this.cmbCoo.value);
        		this.ds_outIst.setColumn(0, "istReqCharge", this.cmbCharge.value);

        		this.ds_outIst.setColumn(0, "istReqVehiNum", this.Spin00.value);

        		this.ds_outClient.setColumn(0, "clientName", this.edtCname.value);
        		this.ds_outClient.setColumn(0, "buildingType", this.cmbCBuild.value);
        		this.ds_outClient.setColumn(0, "clientPhone", this.cmbNum.value+this.edtCphone1.value+this.edtCphone2.value);
        		this.ds_outClient.setColumn(0, "clientAddr1", "");
        		this.ds_outClient.setColumn(0, "clientAddr2", "");
        		this.ds_outClient.setColumn(0, "clientEmail", this.edtCemail.value);

        		this.ds_outIst.setColumn(0, "istReqVisitDate", this.cmbYear.value+this.cmbMonth.value+this.cmbDay.value+this.Radio00.value+this.cmbHour.value);

        		this.ds_outDealer.setColumn(0, "dealerBranch", this.edtDbranch.value);
        		this.ds_outDealer.setColumn(0, "dealerAddr1", this.cmbCity.value);
        		this.ds_outDealer.setColumn(0, "dealerAddr2", this.cmbGu.value);
        		this.ds_outDealer.setColumn(0, "dealerPhone", this.cmbNum00.value+this.edtDphone1.value+this.edtDphone2.value);
        		this.ds_outDealer.setColumn(0, "dealerName", this.edtDname.value);

        		this.ds_outIst.setColumn(0, "istReqCancelMsg", this.edtMsg.value);
        		this.ds_outIst.setColumn(0, "istReqCancelReason", this.edtCan.value);
        		this.ds_outIst.setColumn(0, "istReqState", this.cmbSta.value);
        		if(this.cmbSta.value == "IRREQCAN"){
        			this.ds_outIst.setColumn(0, "istReqCancelDate", this.calCan.value);
        			this.ds_outIst.setColumn(0, "istReqCancelMsg", this.edtMsg.value);
        			this.ds_outIst.setColumn(0, "istReqCancelReason", this.edtCan.value);
        		}
        		this.ds_outIst.setColumn(0, "pic", this.edtPic.value);

        		var strId    = "svcistStaUdt";
        		var strUrl   = "svc::istStaUdt";
        		var inData   = "ds_inputIst=ds_outIst ,ds_inputClient=ds_outClient ,ds_inputDealer=ds_outDealer";
        		var outData  = "resultMessage=resultMessage";
        		var param    = "loginId="+nexacro.getEnvironmentVariable("ev_userID");
        		var callBack = "fn_callbackUdt";
        		this.transaction(strId, strUrl, inData, outData, param, callBack);
        	}
        };

        this.fn_callbackUdt = function ()
        {
        	if(this.objApp.resultMessage == 'SUCCESS'){
        		this.alert("수정이 완료되었습니다.");
        	}

        	this.objApp.resultMessage = '';
        	this.close("refrashList");
        };

        this.btnList_onclick = function(obj,e)
        {
        //	trace(this.objApp.av_WorkFrame.frames[0].id);
        	this.close("refrashList");
        };

        this.btnAs_onclick = function(obj,e)
        {
        	this.close("btnAs");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.InstallInfo_onload,this);
            this.cmbCar1.addEventHandler("onitemchanged",this.cmbCar1_onitemchanged,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div00.form.Static02_00.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div05.form.Static01.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div05.form.Static02.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.btnUdt.addEventHandler("onclick",this.btnUdt_onclick,this);
            this.edtCphone2.addEventHandler("onchanged",this.edtCphone2_onchanged,this);
            this.cmbCity.addEventHandler("onitemchanged",this.cmbCity_onitemchanged,this);
            this.Div06.form.Static01.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.Div06.form.Static02.addEventHandler("onclick",this.Div00_Static00_00_onclick,this);
            this.cmbSta.addEventHandler("onitemchanged",this.cmbSta_onitemchanged,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnAs.addEventHandler("onclick",this.btnAs_onclick,this);
        };
        this.loadIncludeScript("InstallInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
