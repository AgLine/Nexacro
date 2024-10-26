package com.example.nexadb.config;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcRegistrations;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.MultipartFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import com.nexacro.uiadapter.spring.core.context.ApplicationContextProvider;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMappingExceptionResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;
import com.nexacro.uiadapter.spring.core.resolve.NexacroRequestMappingHandlerAdapter;
import com.nexacro.uiadapter.spring.core.view.NexacroFileView;
import com.nexacro.uiadapter.spring.core.view.NexacroView;
import com.nexacro.uiadapter.spring.dao.DbVendorsProvider;
import com.nexacro.uiadapter.spring.dao.Dbms;
import com.nexacro.uiadapter.spring.dao.dbms.Hsql;
import com.example.nexadb.config.WebAppConfig;
import com.nexacro.java.xapi.tx.PlatformType;
//import com.nexacro.xeni.services.GridExportImportServlet;

@Configuration
public class NexacroConfig extends WebAppConfig implements WebMvcRegistrations{
	/**
   * Spring의 ApplicationContext를 제공한다.
   * @return
   */
	@Bean
	@Lazy(false)
	public ApplicationContextProvider applicationContextProvider() {
    
		return new ApplicationContextProvider();
	}
	
	@Override
	public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
		return new NexacroRequestMappingHandlerAdapter();
	}
	
	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
		NexacroMethodArgumentResolver nexacroResolver = new NexacroMethodArgumentResolver();
		resolvers.add(nexacroResolver);
		
		super.addArgumentResolvers(resolvers);
	}
	
	@Override
	public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> handlers) {
		NexacroHandlerMethodReturnValueHandler returnValueHandler = new NexacroHandlerMethodReturnValueHandler();
		
		NexacroFileView nexacroFileView = new NexacroFileView();
		NexacroView nexacroView = new NexacroView();
		nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
		nexacroView.setDefaultCharset("UTF-8");
		
		returnValueHandler.setView(nexacroView);
		returnValueHandler.setFileView(nexacroFileView);
		
		handlers.add(returnValueHandler);
		
		super.addReturnValueHandlers(handlers);
	}
	
	@Override
	public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {
		NexacroView nexacroView = new NexacroView();
		nexacroView.setDefaultContentType(PlatformType.CONTENT_TYPE_XML);
		nexacroView.setDefaultCharset("UTF-8");
		
		NexacroMappingExceptionResolver nexacroException = new NexacroMappingExceptionResolver();
		
		nexacroException.setView(nexacroView);
		nexacroException.setShouldLogStackTrace(true);
		nexacroException.setShouldSendStackTrace(true);
		nexacroException.setDefaultErrorMsg("fail.common.msg");
		nexacroException.setMessageSource(messageSource());
		nexacroException.setOrder(1);
		resolvers.add(nexacroException);
		
		super.configureHandlerExceptionResolvers(resolvers);
	}
	
}

