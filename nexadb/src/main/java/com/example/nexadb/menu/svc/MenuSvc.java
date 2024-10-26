package com.example.nexadb.menu.svc;

import java.util.List;

import com.example.nexadb.crud.vo.AuthorityVO;
import com.example.nexadb.menu.vo.MenuVO;

public interface MenuSvc {
	//메뉴조회
	public List<MenuVO> menuSelect(List<String> splitName);
	
	//권한메뉴조회
	public String menuNameSelect(String name);
}
