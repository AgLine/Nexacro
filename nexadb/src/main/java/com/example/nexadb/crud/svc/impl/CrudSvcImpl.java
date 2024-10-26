package com.example.nexadb.crud.svc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.example.nexadb.mapper.CrudMapper;

@Service
public class CrudSvcImpl implements CrudSvc{
	@Autowired
	private CrudMapper crudMapper;
	
	@Override
	public List<CrudVO> selectAll() {
		return crudMapper.selectAll();
	}
	
	@Override
	public List<ComboVO> comboSelectAll(ComboVO comboVO) {
		return crudMapper.comboSelectAll(comboVO);
	}
	
	@Override
	public String comboGroup(ComboVO comboVO) {
		return crudMapper.comboGroup(comboVO);
	}
	
	@Override
	public void comboInsert(ComboVO comboVO) {
		crudMapper.comboInsert(comboVO);
	}
	
	@Override
	public List<ComboVO> comboGroupSelect(ComboVO comboVO) {
		return crudMapper.comboGroupSelect(comboVO);
	}
	
	@Override
	public List<AuthorityVO> authSelectAll() {
		return crudMapper.authSelectAll();
	}
	
	@Override
	public void authInsert(AuthorityVO authorityVO) {
		crudMapper.authInsert(authorityVO);
	}
	
	@Override
	public int idChk(String id) {
		return crudMapper.idChk(id);
	}
	
	@Override
	public int nameChk(String name) {
		return crudMapper.nameChk(name);
	}
	
	@Override
	public List<AuthorityVO> authSerch(AuthorityVO authorityVO) {
		return crudMapper.authSerch(authorityVO);
	}
	
	@Override
	public List<ComboVO> comboSerch(ComboVO comboVO) {
		return crudMapper.comboSerch(comboVO);
	}
	
	@Override
	public List<UserVO> userSelectAll() {
		return crudMapper.userSelectAll();
	}
	
	@Override
	public int clientChk(String phone) {
		return crudMapper.clientChk(phone);
	}
	
	@Override
	public int dealerChk(String phone) {
		return crudMapper.dealerChk(phone);
	}
	
	@Override
	public int istReqCnt(String receptionNum) {
		return crudMapper.istReqCnt(receptionNum);
	}
	
	@Override
	public int clientCnt() {
		return crudMapper.clientCnt();
	}
	
	@Override
	public int dealerCnt() {
		return crudMapper.dealerCnt();
	}
	
	@Override
	public void clientInsert(ClientVO clientVO) {
		crudMapper.clientInsert(clientVO);
	}
	
	@Override
	public void dealerInsert(DealerVO dealerVO) {
		crudMapper.dealerInsert(dealerVO);
	}
	
	@Override
	public void istReqInsert(IstreqVO istreqVO) {
		crudMapper.istReqInsert(istreqVO);
	}
	
	@Override
	public List<IstStaVO> istStaSelectAll(int startRow, int endRow) {
		return crudMapper.istStaSelectAll(startRow, endRow);
	}
	
	@Override
	public String istStaGetName(String clientPhone) {
		return crudMapper.istStaGetName(clientPhone);
	}
	
	@Override
	public List<IstStaVO> istStaSerch(int stratRow, int endRow, IstStaVO istStaVO) {
		return crudMapper.istStaSerch(stratRow, endRow, istStaVO);
	}
	
	@Override
	public IstreqVO istStaSelectOne(String receptionNum) {
		return crudMapper.istStaSelectOne(receptionNum);
	}
	
	@Override
	public ClientVO istStaClientOne(String phone) {
		return crudMapper.istStaClientOne(phone);
	}
	
	@Override
	public DealerVO istStaDealetOne(String phone) {
		return crudMapper.istStaDealetOne(phone);
	}
	
	@Override
	public void istreqUdt(IstreqVO istreqVO) {
		crudMapper.istreqUdt(istreqVO);
	}
	
	@Override
	public void clientUdt(ClientVO clientVO) {
		crudMapper.clientUdt(clientVO);
	}
	
	@Override
	public void dealerUdt(DealerVO dealerVO) {
		crudMapper.dealerUdt(dealerVO);
	}
	
	@Override
	public int asReqCnt(String asId) {
		return crudMapper.asReqCnt(asId);
	}
	
	@Override
	public List<ChangeHisVO> changeHisSelectAll(int startRow, int endRow) {
		return crudMapper.changeHisSelectAll(startRow, endRow);
	}
	
	@Override
	public void changeInsert(ChangeHisVO changeHisVO) {
		crudMapper.changeInsert(changeHisVO);
	}
	
	@Override
	public int changeHisCnt(String istReqDate) {
		return crudMapper.changeHisCnt(istReqDate);
	}
	
	@Override
	public List<ChangeHisVO> changeSerch(int startRow, int endRow, ChangeHisVO changeHisVO) {
		return crudMapper.changeSerch(startRow, endRow, changeHisVO);
	}
}
