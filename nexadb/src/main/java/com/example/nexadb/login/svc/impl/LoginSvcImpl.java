package com.example.nexadb.login.svc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexadb.login.svc.LoginSvc;
import com.example.nexadb.login.vo.LoginVO;
import com.example.nexadb.mapper.LoginMapper;

@Service
public class LoginSvcImpl implements LoginSvc{
	
	@Autowired
	private LoginMapper loginMapper;
	
	@Override
	public boolean loginCheck(LoginVO loginVO) {
		if(loginMapper.idCheck(loginVO) == 1) {
			if(loginMapper.pwdCheck(loginVO) == 1) {
				return true;
			}else {
				return false;
			}
		}else {
			return false;
		}
	}
	
	
	@Override
	public LoginVO getInfo(LoginVO loginVO) {
		return loginMapper.getInfo(loginVO);
	}
	
	@Override
	public List<LoginVO> userAs(String authorityId) {
		return loginMapper.userAs(authorityId);
	}
}
