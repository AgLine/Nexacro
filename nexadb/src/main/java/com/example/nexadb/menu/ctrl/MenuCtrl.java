package com.example.nexadb.menu.ctrl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexadb.menu.svc.MenuSvc;
import com.example.nexadb.menu.vo.MenuVO;
import com.example.nexadb.menu.vo.UnderMenuVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class MenuCtrl {
	
	@Autowired
	private MenuSvc menuSvc;
	
	@RequestMapping("/menu")
	public NexacroResult menu(@ParamVariable(name="auth") String auth){
		
		NexacroResult result = new NexacroResult();
		
		String name = menuSvc.menuNameSelect(auth);
		
		List<String> splitName = Arrays.asList(name.split(","));
		
		List<MenuVO> tmplist = new ArrayList<>();
		List<UnderMenuVO> list = new ArrayList<>();
		
		tmplist = menuSvc.menuSelect(splitName);
		for(int i=0; i<tmplist.size(); i++) {
			//System.out.println(tmplist.get(i));
			UnderMenuVO tmp = new UnderMenuVO();
			tmp.setMENU_ID(tmplist.get(i).getMenuId());
			tmp.setMENU_LEVEL(tmplist.get(i).getMenuLevel());
			tmp.setFORM_URL(tmplist.get(i).getFormUrl());
			tmp.setMENU_AUTH(tmplist.get(i).getMenuAuth());
			tmp.setMENU_GROUP(tmplist.get(i).getMenuGroup());
			tmp.setMENU_NAME(tmplist.get(i).getMenuName());
			
			list.add(tmp);
		}
		System.out.println(tmplist);
		result.addDataSet("out_menu", list);
		return result;
	}
}	
