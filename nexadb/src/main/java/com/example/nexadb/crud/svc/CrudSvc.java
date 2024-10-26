package com.example.nexadb.crud.svc;

import java.util.List;

import com.example.nexadb.crud.vo.AuthorityVO;
import com.example.nexadb.crud.vo.ChangeHisVO;
import com.example.nexadb.crud.vo.ClientVO;
import com.example.nexadb.crud.vo.ComboVO;
import com.example.nexadb.crud.vo.CrudVO;
import com.example.nexadb.crud.vo.DealerVO;
import com.example.nexadb.crud.vo.IstStaVO;
import com.example.nexadb.crud.vo.IstreqVO;
import com.example.nexadb.crud.vo.UserVO;

public interface CrudSvc {
	
	public List<CrudVO> selectAll();
	
	//콤보박스관리
	//콤보박스관리 전체조회
	public List<ComboVO> comboSelectAll(ComboVO comboVO);
	
	//콤보insert때 Group컬럼값 찾아오기 
	public String comboGroup(ComboVO comboVO); 
	
	//새로은 콤보insert
	public void comboInsert(ComboVO comboVO);
	
	//그룹별로 조회
	public List<ComboVO> comboGroupSelect(ComboVO comboVO);
	
	//콤보검색
	public List<ComboVO> comboSerch(ComboVO comboVO);
	
	//권한관리
	//권한관리 전체조회
	public List<AuthorityVO> authSelectAll();
	
	//새로운 권한insert
	public void authInsert(AuthorityVO authorityVO);
	
	//권한 아이디 중복검사
	public int idChk(String id);
	
	//권한 이름 중복검사
	public int nameChk(String name);
	
	//권한검색
	public List<AuthorityVO> authSerch(AuthorityVO authorityVO);
	
	//사용자관리
	//사용자관리 조회
	public List<UserVO> userSelectAll();
	
	//설치신청
	//고객 중복검사
	public int clientChk(String phone);
	
	//딜러 중복검사
	public int dealerChk(String phone);
	
	//딜러 수 조회
	public int dealerCnt();
	
	//고객 수 조회
	public int clientCnt();
	
	//접수ID생성
	public int istReqCnt(String receptionNum);
	
	//고객정보insert
	public void clientInsert(ClientVO clientVO);
	
	//딜러정보 insert
	public void dealerInsert(DealerVO dealerVO);
	
	//설치신청 insert
	public void istReqInsert(IstreqVO istreqVO);
	
	//설치현황
	//설치현황 조회
	public List<IstStaVO> istStaSelectAll(int stratRow, int endRow);
	
	//설치현황 이름찾기
	public String istStaGetName(String clientPhone);
	
	//설치현황 serch
	public List<IstStaVO> istStaSerch(int stratRow, int endRow, IstStaVO istStaVO);
	
	//접수 단건조회
	public IstreqVO istStaSelectOne(String receptionNum);
	
	//고객정보 단건조회
	public ClientVO istStaClientOne(String phone);
	
	//딜러정보 단건조회
	public DealerVO istStaDealetOne(String phone);
	
	//설치현황 수정
	//접수수정
	public void istreqUdt(IstreqVO istreqVO);
	
	//회원정보수정
	public void clientUdt(ClientVO clientVO);
	
	//딜러정보수정 
	public void dealerUdt(DealerVO dealerVO);
	
	//AS등록
	//AS 설치접수번호조최

	//AS접수 ID생성
	public int asReqCnt(String asId);
	
	//상태변경이력
	//상태변경 조회 select
	public List<ChangeHisVO> changeHisSelectAll(int startRow, int endRow);
	
	//상태변경 insert
	public void changeInsert(ChangeHisVO changeHisVO);
	
	//상태변경 ID 생성
	public int changeHisCnt(String istReqDate);
	
	//상태변경 serch
	List<ChangeHisVO> changeSerch(int startRow, int endRow, ChangeHisVO changeHisVO);
}
