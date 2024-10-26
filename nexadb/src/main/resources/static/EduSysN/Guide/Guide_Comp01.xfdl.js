(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_Comp01");
            this.set_titletext("공통컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">가나다</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">가나다라</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">가나다라마</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">가나다라마바</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">가나다라마바</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column0\">06</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column0\">07</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">라디오</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">라디오01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">C</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">U</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">D</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">7</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">8</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">9</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row><Row><Col id=\"Column1\">10</Col><Col id=\"Column2\">제목영역입니다.</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">1234567890</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column2\">첫번째데이터</Col><Col id=\"Column3\">첫번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column2\">첫번째데이터01</Col><Col id=\"Column3\">첫번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column2\">첫번째데이터02</Col><Col id=\"Column3\">첫번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column2\">첫번째데이터03</Col><Col id=\"Column3\">첫번째데이터03</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column2\">두번째데이터</Col><Col id=\"Column3\">두번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column2\">두번째데이터01</Col><Col id=\"Column3\">두번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column2\">두번째데이터02</Col><Col id=\"Column3\">두번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column2\">세번째데이터</Col><Col id=\"Column3\">세번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column2\">세번쨰데이터01</Col><Col id=\"Column3\">세번쨰데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column2\">세번쨰데이터02</Col><Col id=\"Column3\">세번쨰데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column2\">세번쨰데이터03</Col><Col id=\"Column3\">세번쨰데이터03</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column2\">네번째데이터</Col><Col id=\"Column3\">네번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column2\">네번째데이터01</Col><Col id=\"Column3\">네번째데이터01</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column2\">네번째데이터02</Col><Col id=\"Column0\">14</Col><Col id=\"Column3\">네번째데이터02</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column2\">다섯번째데이터</Col><Col id=\"Column0\">15</Col><Col id=\"Column3\">다섯번째데이터</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column2\">다섯번째데이터01</Col><Col id=\"Column0\">16</Col><Col id=\"Column3\">다섯번째데이터01</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">01</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">02</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마바</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">에디트</Col><Col id=\"Column2\">123456</Col><Col id=\"Column4\">20171217</Col><Col id=\"Column5\">www.link.com</Col><Col id=\"Column6\">김성명</Col><Col id=\"Column7\">가나다라마바사</Col><Col id=\"Column8\">123456789</Col><Col id=\"Column10\">버튼</Col><Col id=\"Column3\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">가나다라마바</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column4\">123456789</Col><Col id=\"Column5\">가나다라마바사</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_03_03_03_03_03_03_00_00_00_00_00","109","1090","877","255",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_GArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_04","109","162","877","122",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","10","1007","100","338",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Calendar");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_03_00_00_00_00","109","1007","220","84",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00_00_00_00_00_00","328","1007","220","84",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01_00_00_00_00_00","547","1007","220","84",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02_00_00_00_00_00","766","1007","220","84",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","10","931","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Radio");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_03_00_00_00","109","931","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00_00_00_00_00","328","931","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01_00_00_00_00","547","931","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02_00_00_00_00","766","931","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","10","808","100","124",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("ListBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01_00_00_00","547","808","220","124",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02_00_00_00","766","808","220","124",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00_00_00_00","328","808","220","124",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_03_00_00","109","808","220","124",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","10","732","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Combo");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_03_00","109","732","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00_00_00","328","732","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01_00_00","547","732","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02_00_00","766","732","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","10","656","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_03","109","656","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00_00","328","656","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01_00","547","656","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02_00","766","656","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03","109","580","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_00","328","580","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_01","547","580","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_03_02","766","580","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03","109","435","220","146",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_00","328","435","220","146",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_01","547","435","220","146",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_03_02","766","435","220","146",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03","109","359","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_00","328","359","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_01","547","359","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_03_02","766","359","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03","109","283","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_00","328","283","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_01","547","283","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_02","766","283","220","77",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","109","80","220","83",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00","328","80","220","83",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01","547","80","220","83",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02","766","80","220","83",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","109","50","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","80","100","204",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Static");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","283","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","10","359","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("MaskEdit");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","10","435","100","146",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("TextArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","10","580","100","77",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_GLabel");
            obj.set_text("CheckBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","120","91","129","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사\r\nABCDEFG abcdefg\r\n1234567890");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","339","91","129","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("가나다라마바사\r\nABCDEFG abcdefg\r\n1234567890");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","120","166","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","120","206","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Sub Title");
            obj.set_cssclass("sta_WF_TitleSub");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","119","293","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","338","293","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","776","293","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","557","293","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("가나다라마");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","557","335","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("class = edt_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","119","369","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("123456");
            obj.set_format("###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","338","369","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_format("###,###");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","776","369","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_format("###,###");
            obj.set_value("123456");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","557","369","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("###,###");
            obj.set_value("123456");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","119","445","150","90",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","338","445","150","90",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","776","445","150","90",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","557","445","150","90",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("가나다\n가나다라\n가나다라마바\n가나다라마바사\n가나다라마바사아\n가나다라마바사아자");
            obj.set_cssclass("txt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","119","742","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","119","818","150","96",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","338","742","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_enable("false");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","776","742","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_readonly("true");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","557","742","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_cssclass("cbo_WF_Essential");
            obj.set_text("가나다");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","338","818","150","94",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","119","666","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","338","666","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","776","666","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","557","666","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("spn_WF_Essential");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","119","1017","150","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("27");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","338","1017","150","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("28");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","776","1017","150","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("29");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","557","1017","150","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("30");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","260","1109","200","220",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("31");
            obj.set_value("20171219");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar10","635","1110","150","26",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("32");
            obj.set_value("20171219");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","119","590","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","338","590","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("체크박스");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","119","941","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","338","941","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_enable("false");
            obj.set_direction("vertical");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27","294","171","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","284","166","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","557","411","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("class=msk_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","557","547","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("class=txt_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","557","708","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("class=spn_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","557","784","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("class=cbo_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","557","1059","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("class=cal_WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","557","1110","172","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("type=spin");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","10","10","322","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Components  Guide - 공통컴포넌트");
            obj.set_cssclass("sta_WF_TitleMain");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","10","50","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","328","50","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("disabled");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","547","50","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","766","50","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_GTitle");
            obj.set_text("readonly");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","284","206","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00","294","211","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00","294","300","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","284","295","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00","294","376","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00","284","371","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00","294","596","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00","284","591","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00","294","673","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00","284","668","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_00","284","744","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00_00","294","749","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_00_01","294","1024","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_00_01","284","1019","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static35_00","124","1110","112","16",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("type=monthonly");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","120","246","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("TypeTitle");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_01","294","251","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","284","246","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27_00_00_00_00_01","294","945","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("h26");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00_00_00_01","284","941","9","26",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static122_00","342","173","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("class = sta_WF_TitleMain");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static122_00_00","340","213","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("class = sta_WF_TitleSub");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static122_00_01","344","253","172","16",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("class = sta_WF_TypeTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1028,1350,this,function(p){});
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
        this.loadIncludeScript("Guide_Comp01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
