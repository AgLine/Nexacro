package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class ClientVO {
	private String clientId;				//고객기본키
	private String clientName;				//고객이름
	private String buildingType;			//건물구분(APT아파트,VILLA빌라,HOUSE주택)
	private String clientPhone;				//고객핸드폰
	private String clientEmail;				//고객이메일
	private String clientAddr1;				//고객주소1
	private String clientAddr2;				//고객주소2
	private String clientState;				//상태
}
