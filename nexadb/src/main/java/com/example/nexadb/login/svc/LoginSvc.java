package com.example.nexadb.login.svc;

import java.util.List;

import com.example.nexadb.login.vo.LoginVO;

public interface LoginSvc {
	
	public boolean loginCheck(LoginVO loginVO);
	
	public LoginVO getInfo(LoginVO loginVO);
	
	public List<LoginVO> userAs(String authorityId);
}
