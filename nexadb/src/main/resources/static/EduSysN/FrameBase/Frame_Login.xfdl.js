(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Login");
            this.set_titletext("Login");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_sizeBase","0","0","49.33%","50.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_login","st_sizeBase:-182","st_sizeBase:-175","370","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1ps solid red");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","40","100","289","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("아이디");
            obj.set_inputfilter("none,space,dot,comma");
            obj.set_cssclass("edt_Login_id");
            obj.set_text("admin");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("st_errMsg1","40","152","289","15",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_ErrMsg");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_pw","40","175","289","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호");
            obj.set_cssclass("edt_Login_pw");
            obj.set_text("admin");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","40","250","289","50",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("st_errMsg2","40","228","289","15",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("Static2");
            obj.set_cssclass("sta_WF_ErrMsg");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","80","30","220","30",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_image("url(\'theme://images/sta_TF_NexacroN.png\')");
            obj.set_stretch("fixaspectratio");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_login.form
            obj = new Layout("default","",0,0,this.div_login.form,function(p){});
            this.div_login.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",390,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_login.form.edt_id","value","ds_login","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_login.form.edt_pw","value","ds_login","PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Login.xfdl", function() {
        /************************************************************************************************
         * 폼변수 선언 영역
         ************************************************************************************************/
        this.objApp 	  = this.gfn_getApplication();
        this.objMainframe = this.objApp.mainframe;


        /************************************************************************************************
         * 폼 이벤트 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.Frame_Login_onload = function(obj,e)
        {
        //  this.Form_Login_onsize();
        };

        /*
        //화면 center 이동
        this.Form_Login_onsize = function()
        {
        	var nLeft = (this.objMainframe.width / 2)  - Math.round((this.div_login.form.getOffsetWidth()) / 2);
        	var nTop  = (this.objMainframe.height / 2) - Math.round((this.div_login.form.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.div_login.form.setOffsetLeft(0);
        	}
        	else
        	{
        		this.div_login.setOffsetLeft(nLeft);
        		this.div_login.setOffsetTop(nTop);
        	}
        };
        */

        this.div_login_btn_login_onclick = function(obj,e)
        {
        	var sId = this.div_login.form.edt_id.value;
        	var sPw = this.div_login.form.edt_pw.value;

        	if(this.gfn_isNull(sId)){
        		this.div_login.form.st_errMsg1.set_text("* " + this.gfn_getMessage("msg.err.validator.required", ["아이디"]));
        		this.div_login.form.st_errMsg1.set_visible(true);
        		this.div_login.form.edt_id.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(sPw)){
        		this.div_login.form.st_errMsg2.set_text("* " + this.gfn_getMessage("msg.err.validator.required", ["패스워드"]));
        		this.div_login.form.st_errMsg2.set_visible(true);
        		this.div_login.form.edt_pw.setFocus();
        		return;
        	}

        	this.fn_login(sId, sPw);
        };

        this.fn_login = function(pId, pPw)
        {

            var strId    = "svcLogin";
        	var strUrl   = "svc::loginAction";
        	var inData   = "";
        	var outData  = "gds_user=out_user";
        	var strArg   = "paramId=" + nexacro.wrapQuote(pId) + " paramPw=" + nexacro.wrapQuote(pPw);
        	var callBack = "fn_callback";
        	this.transaction(strId, strUrl, inData, outData, strArg, callBack);

        	//this.fn_callback("svcLogin", 0, "SUCC");
        }

        this.fn_callback = function(svcID, errCode, errMsg)
        {
        //     if(svcID == "svcLogin"){
        // 		this.fn_setFrame();
        //     }

        	if(this.objApp.gds_user.getColumn(0,"msg") == "F"){
        		this.alert("틀림틀림틀림");
        	}else{
        		this.fn_setFrame();
        	}
        }

        /**
        * 로그인 성공시 처리 프레임 변경 등...
        * @return
        * @example
        * @memberOf
        */
        this.fn_setFrame = function()
        {
            //Login Frame Size 0
        	this.objApp.av_VFrameSet.set_separatesize("0,70,*,25");

            //Env Variable
        	nexacro.setEnvironmentVariable("ev_userID"  , this.objApp.gds_user.getColumn(0,"userId"));
        	nexacro.setEnvironmentVariable("ev_userName", this.objApp.gds_user.getColumn(0,"userName"));
        	nexacro.setEnvironmentVariable("ev_authorty", this.objApp.gds_user.getColumn(0,"authorityId"));

        	trace("이름 :: " + nexacro.getEnvironmentVariable("ev_userName"));
        	trace("아이디 :: " + nexacro.getEnvironmentVariable("ev_userID"));
        	trace("권한 :: " + nexacro.getEnvironmentVariable("ev_authorty"));
        //	trace("row갯수 :: " +this.objApp.gds_user.getRowCount());
            //상위 메뉴 선택 상태
        	this.objApp.av_TopFrame.form.reload();
        	this.objApp.av_LeftFrame.form.fn_changeMenu(nexacro.getEnvironmentVariable("ev_authorty"));

        };

        this.Edit_oninput = function(obj,e)
        {
        	this.div_login.form.st_errMsg1.visible == true ? this.div_login.form.st_errMsg1.set_visible(false) : "";
        	this.div_login.form.st_errMsg2.visible == true ? this.div_login.form.st_errMsg2.set_visible(false) : "";
        };



        this.fn_api_login = function ()
        {
        	var strId    = "svcApiLogin";
        	var strUrl   = "http://localhost:9090/oauth2/authorization/google";
        	var inData   = "";
        	var outData  = "";
        	var strArg   = " ";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, strArg, callBack);
        };

        this.fn_callbackApi = function ()
        {
        	var strId    = "svcApiLogin";
        	var strUrl   = "svc::loginSession";
        	var inData   = "";
        	var outData  = "ds_userInfo=out_list";
        	var strArg   = "";
        	var callBack = "";
        	this.transaction(strId, strUrl, inData, outData, strArg, callBack);
        	this.fn_setFrame();
        };
        this.fn_openExternalLink = function() {
            // 원하는 외부 사이트 URL
            var externalURL = "http://localhost:9090/oauth2/authorization/google";

            // 외부 브라우저에서 URL 열기
            system.execBrowser(externalURL);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Frame_Login_onload,this);
            this.div_login.form.edt_id.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_login.form.edt_pw.addEventHandler("oninput",this.Edit_oninput,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
        };
        this.loadIncludeScript("Frame_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
