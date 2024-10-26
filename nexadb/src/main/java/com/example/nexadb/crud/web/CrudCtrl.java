package com.example.nexadb.crud.web;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexadb.crud.svc.CrudSvc;
import com.example.nexadb.crud.vo.AuthorityVO;
import com.example.nexadb.crud.vo.ChangeHisVO;
import com.example.nexadb.crud.vo.ClientVO;
import com.example.nexadb.crud.vo.ComboVO;
import com.example.nexadb.crud.vo.CrudVO;
import com.example.nexadb.crud.vo.DealerVO;
import com.example.nexadb.crud.vo.IstStaVO;
import com.example.nexadb.crud.vo.IstreqVO;
import com.example.nexadb.crud.vo.UserVO;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class CrudCtrl {
	
	@Autowired
	private CrudSvc crudSvc;
	
	@RequestMapping("/selectAll")
	public NexacroResult selectAll(   @ParamVariable(name="name") String name
									, @ParamVariable(name="id") String id
									, @ParamVariable(name="tel") String tel){
		
		NexacroResult result = new NexacroResult();
		
		List<CrudVO> list = new ArrayList<>();
		list = crudSvc.selectAll();
		
		result.addDataSet("out_list", list);
//		System.out.println(name);
//		System.out.println(id);
//		System.out.println(tel);
		return result;
	}
	
	//페이징포함
	@RequestMapping("/combo")
	public NexacroResult combo(@ParamVariable(name="page") int page){
		
		NexacroResult result = new NexacroResult();
		ComboVO comboVO = new ComboVO();
		
		comboVO.setEndRow(page*10);
		comboVO.setStatrRow((page-1)*10+1);
		List<ComboVO> list = new ArrayList<>();
		list = crudSvc.comboSelectAll(comboVO);
		
		System.out.println(comboVO);
		result.addDataSet("out_comboCode", list);
		return result;
	}
	
	@RequestMapping("/comboInsert")
	public void comboInsert(  @ParamVariable(name="comboName") String comboName
							, @ParamVariable(name="comboTitle") String comboTitle
							, @ParamVariable(name="comboCode") String comboCode){
		
		ComboVO comboVO = new ComboVO();
		
		comboVO.setComboCode(comboCode);
		comboVO.setComboTitle(comboTitle);
		comboVO.setComboName(comboName);
		if(!crudSvc.comboGroup(comboVO).equals(null)) {
			comboVO.setComboGroup(crudSvc.comboGroup(comboVO));
		}
		comboVO.setComboState("U");
		crudSvc.comboInsert(comboVO);
		System.out.println(crudSvc.comboGroup(comboVO));
		
	}
	
	@RequestMapping("/comboGroup")
	public NexacroResult comboGroup(@ParamVariable(name="comboGroup") String comboGroup){
		
		NexacroResult result = new NexacroResult();
		
		ComboVO comboVO = new ComboVO();
		comboVO.setComboGroup(comboGroup);
		
		List<ComboVO> list = new ArrayList<>();
		list = crudSvc.comboGroupSelect(comboVO);
		
		//System.out.println(list);
		result.addDataSet("out_combo", list);
		return result;
	}
	
	@RequestMapping("/comboSerch")
	public NexacroResult cpmboSerch( @ParamVariable(name="comboTitle") String title
								 ,@ParamVariable(name="comboName") String name){
		
//		System.out.println("TITLE:::"+title);
//		System.out.println("NAME:::"+name);
		
		NexacroResult result = new NexacroResult();
		ComboVO comboVO = new ComboVO();
		
		comboVO.setComboName(name);
		comboVO.setComboTitle(title);
		
		List<ComboVO> list = new ArrayList<>();
		list = crudSvc.comboSerch(comboVO);
		
		result.addDataSet("out_combo",list);

//		System.out.println("serch :::"+list);
		return result;
	}
	
	@RequestMapping("/istreqInsert")
	public NexacroResult istreqInsert( @ParamDataSet(name="ds_input") DataSet input){
		
		NexacroResult result = new NexacroResult();
		IstreqVO istreqVO = new IstreqVO();
		ClientVO clientVO = new ClientVO();
		DealerVO dealerVO = new DealerVO();
		ChangeHisVO changeHisVO = new ChangeHisVO();
		
		String tmp = input.getObject(0, "receptionNum").toString();
		
		tmp = tmp + String.format("%02d", crudSvc.istReqCnt(tmp) + 1);

		istreqVO.setPic(input.getObject(0, "pic").toString());
		
		istreqVO.setIstReqCar(input.getObject(0, "istReqCar").toString());
		istreqVO.setIstReqCarName(input.getObject(0, "istReqCarName").toString());
		istreqVO.setIstReqCoo(input.getObject(0, "istReqCoo").toString());
		istreqVO.setIstReqCharge(input.getObject(0, "istReqCharge").toString());
		
		istreqVO.setIstReqContractNum(input.getObject(0, "istReqContractNum").toString());
		istreqVO.setReceptionNum(tmp);
		istreqVO.setIstReqDate(input.getObject(0, "istReqDate").toString());
		istreqVO.setIstReqVehiNum(input.getObject(0, "istReqVehiNum").toString());
		istreqVO.setIstReqType(input.getObject(0, "istReqType").toString());
		istreqVO.setIstReqState("IRREQ");
		istreqVO.setClientName(input.getObject(0, "clientName").toString());
		istreqVO.setClientEmail(input.getObject(0, "clientEmail").toString());
		clientVO.setClientName(input.getObject(0, "clientName").toString());
		clientVO.setBuildingType(input.getObject(0, "buildingType").toString());
		clientVO.setClientPhone(input.getObject(0, "clientPhone").toString());
		clientVO.setClientEmail(input.getObject(0, "clientEmail").toString());
		clientVO.setClientState("Y");
		
		istreqVO.setIstReqVisitDate(input.getObject(0, "istReqVisitDate").toString());
		
		dealerVO.setDealerName(input.getObject(0, "dealerName").toString());
		dealerVO.setDealerBranch(input.getObject(0, "dealerBranch").toString());
		dealerVO.setDealerPhone(input.getObject(0, "dealerPhone").toString());
		dealerVO.setDealerAddr1(input.getObject(0, "dealerAddr1").toString());
		dealerVO.setDealerAddr2(input.getObject(0, "dealerAddr2").toString());
		
		istreqVO.setClientPhone(input.getObject(0, "clientPhone").toString());
		istreqVO.setDealerPhone(input.getObject(0, "dealerPhone").toString());
		
		changeHisVO.setReceptionNum(tmp);
		tmp = input.getObject(0, "istReqDate").toString();
		tmp = "HT" + tmp + String.format("%03d", crudSvc.changeHisCnt(tmp) + 1);
		changeHisVO.setHisId(tmp);
		changeHisVO.setHisUpdateName(input.getObject(0, "pic").toString());
		changeHisVO.setHisAfterState("IRREQ");
		changeHisVO.setAsirState("IR");
		
		
		System.out.println("상태변경:::"+changeHisVO);
		System.out.println("설치신청:::"+istreqVO);
		System.out.println("고객정보:::"+clientVO);
		System.out.println("딜러정보:::"+dealerVO);
		
		
		if(crudSvc.clientChk(clientVO.getClientPhone()) == 0) {
			clientVO.setClientId("client"+Integer.toString(crudSvc.clientCnt()+1));
			crudSvc.clientInsert(clientVO);
		}
		
		if(crudSvc.dealerChk(dealerVO.getDealerPhone()) == 0) {
			dealerVO.setDealerId("dealer"+Integer.toString(crudSvc.dealerCnt()+1));
			crudSvc.dealerInsert(dealerVO);
		}
		
		crudSvc.istReqInsert(istreqVO);
		crudSvc.changeInsert(changeHisVO);
		
		result.addVariable("resultMessage", "SUCCESS");
		return result;
	}

	@RequestMapping("/auth")
	public NexacroResult auth(){
		
		NexacroResult result = new NexacroResult();
		
		
		List<AuthorityVO> list = new ArrayList<>();
		list = crudSvc.authSelectAll();
		
		//System.out.println(list);
		result.addDataSet("out_auth", list);
		return result;
	}
	
	@RequestMapping("/authInsert")
	public NexacroResult authAdd( @ParamVariable(name="authorityId") String id
								 ,@ParamVariable(name="authorityName") String name
								 ,@ParamVariable(name="authorityMenu") String menu){
		
//		System.out.println("ID:::"+id);
//		System.out.println("NAME:::"+name);
//		System.out.println("MENU:::"+menu);
		NexacroResult result = new NexacroResult();
		AuthorityVO authorityVO = new AuthorityVO();
		
		authorityVO.setAuthorityId(id);
		authorityVO.setAuthorityName(name);
		authorityVO.setAuthorityMenu(menu);
		
		if(crudSvc.idChk(id) == 1) {//권한아이디 중복
			result.addVariable("resultMessage", "idDuplicate");
			return result;
		}
		
		if(crudSvc.nameChk(name) == 1) {//권한이름 중복
			result.addVariable("resultMessage", "nameDuplicate");
			return result;
		}
		crudSvc.authInsert(authorityVO);
		result.addVariable("resultMessage", "SUCCESS");
		
		return result;
	}
	
	@RequestMapping("/authSerch")
	public NexacroResult authSerch( @ParamVariable(name="authorityId") String id
								 ,@ParamVariable(name="authorityName") String name){
		
//		System.out.println("ID:::"+id);
//		System.out.println("NAME:::"+name);
		
		NexacroResult result = new NexacroResult();
		AuthorityVO authorityVO = new AuthorityVO();
		
		authorityVO.setAuthorityId(id);
		authorityVO.setAuthorityName(name);
		
		List<AuthorityVO> list = new ArrayList<>();
		list = crudSvc.authSerch(authorityVO);
		
		result.addDataSet("out_auth",list);

//		System.out.println("serch :::"+list);
		return result;
	}
	
	@RequestMapping("/user")
	public NexacroResult user(){
		
		NexacroResult result = new NexacroResult();
		
		List<UserVO> list = new ArrayList<>();
		list = crudSvc.userSelectAll();
		
		//System.out.println(list);
		result.addDataSet("out_user", list);
		return result;
	}
	
	
	
	@RequestMapping("/istSta")
	public NexacroResult istSta(@ParamVariable(name="page") int page){
		
		NexacroResult result = new NexacroResult();
		List<IstStaVO> list = new ArrayList<>();
		
		list = crudSvc.istStaSelectAll((page-1)*10+1, page*10);
		
		result.addDataSet("out_istSta", list);
		return result;
	}
	
	@RequestMapping("/istStaSerch")
	public NexacroResult istStaSerch(@ParamVariable(name="page") int page
									,@ParamVariable(name="clientName") String clientName
									,@ParamVariable(name="clientAddr") String clientAddr
									,@ParamVariable(name="clientPhone") String clientPhone
									,@ParamVariable(name="istReqState") String istReqState){
		
		NexacroResult result = new NexacroResult();
		List<IstStaVO> list = new ArrayList<>();
		
		IstStaVO istStaVO = new IstStaVO();
		
		istStaVO.setClientName(clientName);
		istStaVO.setClientAddr(clientAddr);
		istStaVO.setClientPhone(clientPhone);
		istStaVO.setIstReqState(istReqState);
		
		list = crudSvc.istStaSerch((page-1)*10+1, page*10, istStaVO);
		
		result.addDataSet("out_istSta", list);
		return result;
	}
	
	@RequestMapping("/istStainfo")
	public NexacroResult istStainfo( @ParamVariable(name="receptionNum") String receptionNum){
		
		NexacroResult result = new NexacroResult();
		//System.out.println("pri:::"+receptionNum);
		
		IstreqVO istreqVO = new IstreqVO();
		ClientVO clientVO = new ClientVO();
		DealerVO dealerVO = new DealerVO();
		
		istreqVO = crudSvc.istStaSelectOne(receptionNum);
		clientVO = crudSvc.istStaClientOne(istreqVO.getClientPhone());
		dealerVO = crudSvc.istStaDealetOne(istreqVO.getDealerPhone());
		
		/*
		System.out.println(istreqVO);
		System.out.println(clientVO);
		System.out.println(dealerVO);
		*/
		
 		result.addDataSet("out_istreq",istreqVO);
 		result.addDataSet("out_client",clientVO);
 		result.addDataSet("out_dealer",dealerVO);
		
 		return result;
	}
	
	@RequestMapping("/istStaUdt")
	public NexacroResult istStaUdt( @ParamDataSet(name="ds_inputIst") DataSet inputIst
								   ,@ParamDataSet(name="ds_inputClient") DataSet inputClient
								   ,@ParamDataSet(name="ds_inputDealer") DataSet inputDealer
								   ,@ParamVariable(name="loginId") String loginId){
		NexacroResult result = new NexacroResult();
		
		IstreqVO istreqVO = new IstreqVO();
		ClientVO clientVO = new ClientVO();
		DealerVO dealerVO = new DealerVO();
		ChangeHisVO changeHisVO = new ChangeHisVO();
		
		istreqVO.setReceptionNum(inputIst.getObject(0, "receptionNum").toString());
		istreqVO.setIstReqCar(inputIst.getObject(0, "istReqCar").toString());
		istreqVO.setIstReqCarName(inputIst.getObject(0, "istReqCarName").toString());
		istreqVO.setIstReqCoo(inputIst.getObject(0, "istReqCoo").toString());
		istreqVO.setIstReqCharge(inputIst.getObject(0, "istReqCharge").toString());
		
		istreqVO.setIstReqVehiNum(inputIst.getObject(0, "istReqVehiNum").toString());
		
		istreqVO.setClientName(inputClient.getObject(0, "clientName").toString());
		clientVO.setClientName(inputClient.getObject(0, "clientName").toString());
		clientVO.setBuildingType(inputClient.getObject(0, "buildingType").toString());
		clientVO.setClientPhone(inputClient.getObject(0, "clientPhone").toString());
		clientVO.setClientEmail(inputClient.getObject(0, "clientEmail").toString());
		clientVO.setClientId(inputClient.getObject(0, "clientId").toString());
		
		istreqVO.setIstReqVisitDate(inputIst.getObject(0, "istReqVisitDate").toString());
		
		dealerVO.setDealerName(inputDealer.getObject(0, "dealerName").toString());
		dealerVO.setDealerBranch(inputDealer.getObject(0, "dealerBranch").toString());
		dealerVO.setDealerPhone(inputDealer.getObject(0, "dealerPhone").toString());
		dealerVO.setDealerAddr1(inputDealer.getObject(0, "dealerAddr1").toString());
		dealerVO.setDealerAddr2(inputDealer.getObject(0, "dealerAddr2").toString());
		dealerVO.setDealerId(inputDealer.getObject(0, "dealerId").toString());
		
		istreqVO.setClientPhone(inputIst.getObject(0, "clientPhone").toString());
		istreqVO.setDealerPhone(inputIst.getObject(0, "dealerPhone").toString());
		
		if(inputIst.getObject(0, "istReqState").toString().equals("IRREQCAN")) {//상태가 취소로 바뀐다면 해당컬럼들
			istreqVO.setIstReqCancelMsg(inputIst.getObject(0, "istReqCancelMsg").toString());
			istreqVO.setIstReqCancelReason(inputIst.getObject(0, "istReqCancelReason").toString());
			istreqVO.setIstReqCancelDate(inputIst.getObject(0, "istReqCancelDate").toString());
		}
		istreqVO.setIstReqState(inputIst.getObject(0, "istReqState").toString());
		istreqVO.setPic(inputIst.getObject(0, "pic").toString());
		
		crudSvc.istreqUdt(istreqVO);
		crudSvc.clientUdt(clientVO);
		crudSvc.dealerUdt(dealerVO);
		
		if(!inputIst.getObject(0, "istReqBeforeState").toString().equals(inputIst.getObject(0, "istReqState").toString())) {
			changeHisVO.setReceptionNum(inputIst.getObject(0, "receptionNum").toString());
			LocalDate currentDate = LocalDate.now();
	        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
	        String formattedDate = currentDate.format(formatter);
	        
			changeHisVO.setHisId("HT" + formattedDate + String.format("%03d", crudSvc.changeHisCnt(formattedDate) + 1));
			changeHisVO.setHisUpdateName(loginId);
			changeHisVO.setHisBeforeState(inputIst.getObject(0, "istReqBeforeState").toString());
			changeHisVO.setHisAfterState(inputIst.getObject(0, "istReqState").toString());
			changeHisVO.setAsirState("IR");
			crudSvc.changeInsert(changeHisVO);
		}
		
		
//		System.out.println(istreqVO);
//		System.out.println(clientVO);
//		System.out.println(dealerVO);
//		System.out.println(changeHisVO);
//		System.out.println(loginId);
		
		result.addVariable("resultMessage", "SUCCESS");
		
		return result;
	}
	
	@RequestMapping("/asReq")
	public NexacroResult asReq(@ParamVariable(name="receptionNum") String receptionNum){
		NexacroResult result = new NexacroResult();
	    
	    IstreqVO istreqVO = new IstreqVO();
	    
	    istreqVO = crudSvc.istStaSelectOne(receptionNum);
	    
	    System.out.println(istreqVO);
	    result.addDataSet("out_istReq", istreqVO);
	    result.addVariable("resultMessage", "SUCCESS");
	    return result;
	}
	
	@RequestMapping("/asInsert")
	public NexacroResult asInsert(@ParamVariable(name="receptionNum") String receptionNum){
		NexacroResult result = new NexacroResult();
	    
	    IstreqVO istreqVO = new IstreqVO();
	    
	    istreqVO = crudSvc.istStaSelectOne(receptionNum);
	    
	    System.out.println(istreqVO);
	    result.addDataSet("out_istReq", istreqVO);
	    return result;
	}
	
	@RequestMapping("/changeHis")
	public NexacroResult changeHis( @ParamVariable(name="page") int page){
		
		NexacroResult result = new NexacroResult();
		List<ChangeHisVO> list = new ArrayList<>();
		
		list = crudSvc.changeHisSelectAll((page-1)*10+1, page*10);
		
		result.addDataSet("out_change", list);
		return result;
	}
	
	@RequestMapping("/changeSerch")
	public NexacroResult changeSerch( @ParamVariable(name="date1") String date1
									, @ParamVariable(name="date2") String date2
									, @ParamVariable(name="hisUpdateName") String hisUpdateName
									, @ParamVariable(name="asirState") String asirState
									, @ParamVariable(name="hisAfterState") String hisAfterState){
		
		NexacroResult result = new NexacroResult();
		List<ChangeHisVO> list = new ArrayList<>();
		ChangeHisVO changeHisVO = new ChangeHisVO();
		
		changeHisVO.setDate1(date1);
		changeHisVO.setDate2(date2);
		changeHisVO.setHisUpdateName(hisUpdateName);
		changeHisVO.setAsirState(asirState);
		changeHisVO.setHisAfterState(hisAfterState);
		
		System.out.println(changeHisVO);
		list = crudSvc.changeSerch(0, 0, changeHisVO);
		
		result.addDataSet("out_change",list);
		
		return result;
	}
	
//	@RequestMapping("/selectAll")
//	public NexacroResult selectAll(HttpServletRequest request) throws ServletException, IOException{
//		
//		ServletInputStream inputStream = request.getInputStream();
//	    String data = StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
//	    
//	    System.out.println("message body = " + data);
//	    
//		NexacroResult result = new NexacroResult();
//		
//		List<CrudVO> list = new ArrayList<>();
//		list = crudSvc.selectAll();
//		
//		result.addDataSet("out_list", list);
//		
//		return result;
//	}
	
}
