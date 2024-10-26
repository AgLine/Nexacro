package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class DealerVO {
	private String dealerId;
	private String dealerName;				//딜러이름
	private String dealerPhone;				//딜러핸드폰
	private String dealerBranch;			//딜러지점
	private String dealerAddr1;				//딜러지역 시
	private String dealerAddr2;				//딜러지역 구
}
