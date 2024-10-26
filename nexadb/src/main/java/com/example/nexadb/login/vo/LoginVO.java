package com.example.nexadb.login.vo;

import lombok.Data;

@Data
public class LoginVO {
	private String userName;
	private String userId;
	private String userPassword;
	private String authorityId;
	private String msg;
}