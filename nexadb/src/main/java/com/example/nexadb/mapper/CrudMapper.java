package com.example.nexadb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexadb.crud.vo.AuthorityVO;
import com.example.nexadb.crud.vo.ChangeHisVO;
import com.example.nexadb.crud.vo.ClientVO;
import com.example.nexadb.crud.vo.ComboVO;
import com.example.nexadb.crud.vo.CrudVO;
import com.example.nexadb.crud.vo.DealerVO;
import com.example.nexadb.crud.vo.IstStaVO;
import com.example.nexadb.crud.vo.IstreqVO;
import com.example.nexadb.crud.vo.UserVO;

@Mapper
public interface CrudMapper {
	List<CrudVO> selectAll();
	
	//콤보관리
	List<ComboVO> comboSelectAll(ComboVO comboVO);
	
	String comboGroup(ComboVO comboVO);
	
	void comboInsert(ComboVO comboVO);
	
	List<ComboVO> comboGroupSelect(ComboVO comboVO);
	
	List<ComboVO> comboSerch(ComboVO comboVO);
	
	//권한관리
	List<AuthorityVO> authSelectAll();
	
	void authInsert (AuthorityVO authorityVO);
	
	int idChk (String id);
	
	int nameChk(String name);
	
	List<AuthorityVO> authSerch(AuthorityVO authorityVO);
	
	//사용자관리
	List<UserVO> userSelectAll();
	
	//설치신청접수
	int clientChk (String phone);
	
	int dealerChk(String phone);
	
	int istReqCnt(String receptionNum);
	
	int clientCnt();
	
	int dealerCnt();
	
	void clientInsert(ClientVO clientVO);
	
	void dealerInsert(DealerVO dealerVO);
	
	void istReqInsert(IstreqVO istreqVO);
	
	//설치현황
	List<IstStaVO> istStaSelectAll(int startRow, int endRow);
	
	String istStaGetName(String clientPhone);
	
	List<IstStaVO> istStaSerch(int startRow, int endRow, IstStaVO istStaVO);
	
	IstreqVO istStaSelectOne(String receptionNum);
	
	ClientVO istStaClientOne(String phone);
	
	DealerVO istStaDealetOne(String phone);
	
	//설치현황 수정
	void istreqUdt(IstreqVO istreqVO);
	
	void clientUdt(ClientVO clientVO);
	
	void dealerUdt(DealerVO dealerVO);
	
	//AS등록
	//AS접수 ID생성
	public int asReqCnt(String asId);
	
	//상태변경이력
	List<ChangeHisVO> changeHisSelectAll(int startRow, int endRow);
	
	void changeInsert(ChangeHisVO changeHisVO);
	
	int changeHisCnt(String istReqDate);
	
	List<ChangeHisVO> changeSerch(int startRow, int endRow, ChangeHisVO changeHisVO);
}
