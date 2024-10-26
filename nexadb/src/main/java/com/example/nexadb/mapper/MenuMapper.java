package com.example.nexadb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.nexadb.menu.vo.MenuVO;

@Mapper
public interface MenuMapper {
	List<MenuVO> menuSelect(List<String> splitName);
	
	String menuNameSelect(String name);
}
