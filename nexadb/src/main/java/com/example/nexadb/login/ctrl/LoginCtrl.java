package com.example.nexadb.login.ctrl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexadb.login.svc.LoginSvc;
import com.example.nexadb.login.vo.LoginVO;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class LoginCtrl {
	
	@Autowired
	private LoginSvc loginSvc;
	
	@RequestMapping("loginSession")
	public NexacroResult LoginSession() {
		
		NexacroResult result = new NexacroResult();
		LoginVO loginVO = new LoginVO();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication instanceof OAuth2AuthenticationToken) {
		    OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;
		    OAuth2User user = oauthToken.getPrincipal();
		    
		    System.out.println(user);
		    
		    loginVO.setUserId(user.getAttribute("sub"));
		    //loginVO.setEmail(user.getAttribute("email"));
		    loginVO.setUserName(user.getAttribute("name"));
		    
		}
		
		return result;
	}
	
	@RequestMapping("loginAction")
	public NexacroResult loginAction( @ParamVariable(name="paramPw") String pw
									, @ParamVariable(name="paramId") String id) {
		NexacroResult result = new NexacroResult();
		
		LoginVO loginVO = new LoginVO();
		
		loginVO.setUserId(id);
		loginVO.setUserPassword(pw);
		
		if(loginSvc.loginCheck(loginVO)) {
			loginVO = loginSvc.getInfo(loginVO);
			loginVO.setMsg("T");
		}else {
			loginVO.setMsg("F");
		}
		System.out.println(loginVO);
		result.addDataSet("out_user",loginVO);
		return result;
	}
	
	@RequestMapping("userAs")
	public NexacroResult userAs( @ParamVariable(name="authorityId") String authorityId) {
		NexacroResult result = new NexacroResult();
		
		List<LoginVO> list = new ArrayList<>();
		
		list = loginSvc.userAs(authorityId);
		
		System.out.println(list);
		result.addDataSet("out_asEng",list);
		return result;
	}
}
