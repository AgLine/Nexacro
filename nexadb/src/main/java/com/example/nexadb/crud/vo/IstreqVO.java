package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class IstreqVO {
	private String istReqContractNum;		//계약번호
	private String receptionNum;			//접수번호
	private String istReqDate;				//접수일
	private String istReqVehiNum;			//신청대수
	private String istReqType;				//신청구분(개인,법인)
	private String istReqVisitDate;			//실사희망일시
	private String istReqCancelMsg;			//취소메세지
	private String istReqCancelReason;		//취소사유
	private String istReqCancelDate;		//취소일시
	private String istReqState;				//상태
	private String istReqCar;				//차량회사
	private String istReqCarName;			//차량이름
	private String istReqCoo;				//업체
	private String istReqCharge;			//충전기타입
	
	private String clientPhone;				//고객폰번호
	private String dealerPhone;				//딜러폰번호
	private String pic;						//담당자
	
	private String clientName;
	private String clientAddr;
	private String clientEmail;
	
	private String istReqBeforeState;
}
