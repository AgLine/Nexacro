package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class AuthorityVO {
	
	private String authorityId;		//권한아이디
	private String authorityName;	//권한이름
	private String authorityMenu;	//권한메뉴
}
