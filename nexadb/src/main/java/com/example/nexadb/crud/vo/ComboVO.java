package com.example.nexadb.crud.vo;

import lombok.Data;

@Data
public class ComboVO {
	private String comboCode;
	private String comboName;
	private String comboTitle;
	private String comboState;
	private String comboGroup;
	
	private Integer statrRow;
	private Integer endRow;
}
