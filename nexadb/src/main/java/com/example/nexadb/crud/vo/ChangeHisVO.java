package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class ChangeHisVO {
	private String hisId;			//히스토리아이디
	private String receptionNum;	//접수번호
	private String hisUpdateName;	//변경자이름
	private String hisUpdateDate;	//변경일시
	private String hisBeforeState;	//변경전상태
	private String hisAfterState;	//변경후상태
	private String asirState;		//AS IR구분
	
	private String date1; //기간 조회용
	private String date2;
}