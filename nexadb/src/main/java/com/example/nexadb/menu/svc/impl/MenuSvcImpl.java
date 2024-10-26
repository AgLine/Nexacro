package com.example.nexadb.menu.svc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexadb.mapper.MenuMapper;
import com.example.nexadb.menu.svc.MenuSvc;
import com.example.nexadb.menu.vo.MenuVO;

@Service
public class MenuSvcImpl implements MenuSvc{
	
	@Autowired
	private MenuMapper menuMapper;
	
	@Override
	public List<MenuVO> menuSelect(List<String> splitName) {
		return menuMapper.menuSelect(splitName);
	}
	
	@Override
	public String menuNameSelect(String name) {
		return menuMapper.menuNameSelect(name);
	}

}
