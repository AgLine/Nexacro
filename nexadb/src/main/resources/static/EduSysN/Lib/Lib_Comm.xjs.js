//XJS=Lib_Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /**
         * 값이 존재하는지 여부 체크
         */
        this.lfn_isNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.lfn_transaction = function(sId, sUrl, inData, outData, sArg, sCallBack, isAsync)
        {
        	if (this.lfn_isNull(sCallBack)) sCallBack = "fn_callback";

        	if ((isAsync != true) && (isAsync != false)) isAsync = true;

            var sSvcId  = sId + ":" + sCallBack;
        	var sSvcUrl = sUrl;

        	if (this.lfn_isNull(sArg)) {
        		sArg = "";
        	}

            sArg += " in_var1="+nexacro.wrapQuote(this.titletext) + " in_var2="+this.name
        	var nDataType = 0;

            trace(sSvcId + " : " + sSvcUrl + " : " + inData + " : " + outData + " : " + sArg + " : " + isAsync + " : " + nDataType);

        	this.transaction( sSvcId, sSvcUrl, inData, outData, sArg, "lfn_callback", isAsync, nDataType, false);
        };


        this.lfn_callback = function(svcID, errorCode, errorMsg)
        {
        	var sSvcId    = svcID.split(":")[0];
            var sCallback = svcID.split(":")[1];

        	// 에러 공통 처리
        	if(errorCode != 0){
        		this.alert("error");
                return;
        	}

        	// form에 callback 함수가 있을때
        	if (this[sCallback]) {
                this.lookupFunc(sCallback).call(sSvcId, errorCode, errorMsg);
            }
        };

        this.lfn_openPopup = function(sPopupType, sPopupId, nLeft, nTop, nWidth, nHeight, nRight, nBottom, sUrl, oArg, sPopupCallback)
        {
            if(sPopupType == "modal"){
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, nRight, nBottom, sUrl);

        		newChild.set_dragmovetype("all");
        		newChild.set_openalign("center middle");
        		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        		newChild.showModal(this.getOwnerFrame(), oArg, this, sPopupCallback);
            }
            else if(sPopupType == "modeless"){
                var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize=true titletext=modeless";
                var objApp = nexacro.getApplication();

                nLeft = (objApp.mainframe.width  / 2) - Math.round(nWidth / 2);
                nTop  = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;
                nLeft = system.clientToScreenX(this, nLeft);
                nTop  = system.clientToScreenY(this, nTop);

        		var arrPopFrame = nexacro.getPopupFrames();
        		if (arrPopFrame[sPopupId]) {
        			if (system.navigatorname == "nexacro") {
        				arrPopFrame[sPopupId].setFocus();
        			}
                    else {
        				arrPopFrame[sPopupId]._getWindowHandle().focus();
        			}
        		}
        		else {
        			nexacro.open(sPopupId, sUrl, this.getOwnerFrame(), oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
        		}
            }
        };

        this.lfn_getMsg = function (sMsgID, arrWord)
        {
        	var objApp = nexacro.getApplication();
        	var sMsg = objApp.gds_message.lookup("MSG_ID", sMsgID, "MSG_TEXT");

        	if(!this.lfn_isNull(arrWord)){
        		for(var i=0; i<arrWord.length; i++){
        			//{0}, {1}, {2} - arrWord[0], arrWord[1], arrWord[2]
        			var sIdx = "{"+ i.toString() +"}";// {0} 이라고 쓰여있는것을
        			sMsg = sMsg.replace(sIdx, arrWord[i]); // 들어온 값으로 바꿔준다
        		}
        	}
        	return sMsg;

        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
