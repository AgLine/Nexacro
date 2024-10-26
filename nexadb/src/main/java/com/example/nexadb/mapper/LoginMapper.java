package com.example.nexadb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexadb.login.vo.LoginVO;

@Mapper
public interface LoginMapper {
	/*
    아이디체크
    */
    int idCheck(LoginVO loginVO);

    /*
    비밀번호체크
    */
    int pwdCheck(LoginVO loginVO);
    
    LoginVO getInfo(LoginVO loginVO);
    
    List<LoginVO> userAs(String authorityId);
}
