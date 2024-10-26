(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#262626"),
            						"font" : nexacro.FontObject("13px \"Verdana\",\"Malgun Gothic\"")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #23273c")
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #b3b5b8"),
            						"padding" : nexacro.PaddingObject("0px 2px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDec.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDec.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDec.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HDecP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VInc.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_VIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HInc.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HInc.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/scl_WF_HIncP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b3b5b8,0px none,0px none"),
            						"padding" : nexacro.PaddingObject("2px 0px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("bold 14px \"Verdana\""),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')"),
            								"padding" : nexacro.PaddingObject("0px 0px 8px")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinD.png')")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Max.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Close.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #b3b5b8,0px none,0px none"),
            						"color" : nexacro.ColorObject("#262626"),
            						"font" : nexacro.FontObject("14px \"Verdana\""),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/img_SB_Grip.png')")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0b1742")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c2c7e1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineV.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("URL('theme://images/sta_WF_GLineH.png') 5px 2px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"color" : nexacro.ColorObject("#0f4e8c")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GStatus" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("11px \"Verdana\""),
            									"color" : nexacro.ColorObject("#746f6f")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GSize" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 12px \"Dotum\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_guideRed" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("red"),
            									"font" : nexacro.FontObject("12px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_guideBlue" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("blue"),
            									"font" : nexacro.FontObject("12px \"Verdana\", \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Text1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px"),
            									"color" : nexacro.ColorObject("#fcfa6d"),
            									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_Text2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MDI_AreaBg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #717275")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_FrmTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleMain" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleSub1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleSub2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_LabelTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Verdana\", \"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailEssential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 12px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"border" : nexacro.BorderObject("1px solid #d3dce1"),
            									"color" : nexacro.ColorObject("#262626"),
            									"padding" : nexacro.PaddingObject("0px 20px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabeltext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 20px 0px 30px"),
            									"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"color" : nexacro.ColorObject("#0F4E8C")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 20px"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_DetailArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TitleSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 4px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_TypeTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 18px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_SearchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 20px"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\", \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_Contents" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("14px/22px \"Verdana\",\"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ArrContents" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
            									"font" : nexacro.FontObject("15px/22px \"Malgun Gothic\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_MainBoard" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("bold 18px \"Verdana,Malgun Gothic\""),
            									"padding" : nexacro.PaddingObject("24px 0px 0px 20px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_ErrMsg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 2px 0px 0px"),
            									"color" : nexacro.ColorObject("#ED1C24"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Verdana\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_msg_bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #0a2a70")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
            									"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Verdana\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_BF_LodingTxt" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#fcfa6d"),
            									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				],
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 10px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#888888")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					},
            					{
            						"edt_Login_id" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#0a7ce1"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#0a7ce1"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"nulltext" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_Login_pw" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#0a7ce1"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0a7ce1"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#0a7ce1"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"nulltext" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 0px 40px"),
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("16px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("0px 10px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#888888")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#eb174e")
            					}
            				},
            				"class" :
            				[
            					{
            						"msk_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            						"padding" : nexacro.PaddingObject("10px 10px 0px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("14px/24px \"Verdana\",\"MalgunGothic\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#888888")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_Login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\",\"Verdana\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #115095, 0px none"),
            									"padding" : nexacro.PaddingObject("4px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #509cc9, 1px solid #4b9dcd, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#b0dcf4")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc96b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc96b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc96b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc96b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#8bafd9"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_menu_s" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc26b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc26b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc26b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc26b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#ffc26b"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 26px 2px 26px"),
            									"color" : nexacro.ColorObject("#8bafd9"),
            									"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_Logout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#b8b8b8"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#b8b8b8"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            									"color" : nexacro.ColorObject("#6c6c6c"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\",\"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Home.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Max.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Min.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Verti" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Verti.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Verti.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Verti.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_Horz" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Horz.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Horz.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_Horz.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_MDI_AllX" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllX.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllX.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MDI_AllX.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_CRUD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6f748a"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #313340"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_POP_OK" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #2563de"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #133985"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #133985"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #133985"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Find" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SearchIcon.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SearchIcon.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_SearchIcon.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_PopSearch" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_RtlLogout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Status" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #143a84")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #143a84")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #143a84"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #143a84"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calMonthNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NextBtnN.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_calMonthPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnN.png\")"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnP.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnN.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FrmMain" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #145ea0, 1px solid #1461a6, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 13px/normal \"Verdana,Malgun Gothic\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #145ea0, 1px solid #1461a6, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 13px/normal \"Verdana,Malgun Gothic\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #134d8e, 1px solid #115095, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #134d8e, 1px solid #115095, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #163b75, 1px solid #163e7a, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #3173ac, 1px solid #1461a6, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_FrmSub" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #2b86bb, 1px solid #2b8cc4, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #125d9f, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #155a97, 1px solid #115095, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #509cc9, 1px solid #4b9dcd, 0px none"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Btn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #405475, 1px solid #4b638a, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #405475, 1px solid #4b638a, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #163b74, 1px solid #153e7a, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #163b74, 1px solid #153e7a, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #163c75, 1px solid #153e7a, 0px none"),
            									"padding" : nexacro.PaddingObject("4px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 1px solid #5c6d8a, 1px solid #5e718e, 0px none"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#b9c3d4")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Cancel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #a1a1a1, 1px solid #999999, 1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4, 1px solid #919191, 1px solid #898989, 1px solid #c4c4c4"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c0c0c0, 1px solid #7e7e7e, 1px solid #737373, 1px solid #c0c0c0"),
            									"padding" : nexacro.PaddingObject("4px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#333333")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d1d1d1, 1px solid #ababab, 1px solid #999999, 1px solid #d1d1d1"),
            									"padding" : nexacro.PaddingObject("2px 16px 0px 17px"),
            									"color" : nexacro.ColorObject("#a6a6a6")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Add.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Del" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Del.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5f7086"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5f7086"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #34465d"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #34465d"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #11233b"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8a8a8a"),
            									"color" : nexacro.ColorObject("#595959")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_Close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_boomark" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkN.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_boomark_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("0px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_boomarkS.png\")"),
            									"padding" : nexacro.PaddingObject("2px 0px 0px 0px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					},
            					"disabled" :
            					{
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxDS.png')")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"spn_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					}
            				]
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnbtnN.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DnbtnP.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtnN.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtnP.png')")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtnN.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtnP.png')")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnN.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpbtnP.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtnN.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtnP.png')")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtnN.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtnP.png')")
            											},
            											"disabled" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemN.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 10px")
            							},
            							"disabled" :
            							{
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemM.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemMS.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemDS.png')")
            							}
            						}
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#00b1eb")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 10px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#00b1eb")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					}
            				]
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnN.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnP.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropP.png')")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropP.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropP.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropP.png')")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnP.png')")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropbtnP.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #00b1eb")
            					},
            					"disabled" :
            					{
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_WF_Essential" :
            						{
            							"self" :
            							{
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ff9126")
            								}
            							}
            						}
            					}
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnDn.png')"),
            								"border" : nexacro.BorderObject("1px solid #c4c4c4,0px none,0px none,1px solid #919396")
            							},
            							"pushed" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_TypeSpnUp.png')"),
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #919396")
            							},
            							"pushed" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("14px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("14px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NextBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnN.png')"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnN.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtnP.png')")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnN.png')"),
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnM.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PrevBtnP.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#143a84")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ce2024")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#143a84")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ce2024")
            									},
            									"today" :
            									{
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#d8d9da")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 24px 8px 10px")
            							},
            							"disabled" :
            							{
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"color" : nexacro.ColorObject("#00b1eb")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4,1px solid #919396,0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            											"padding" : nexacro.PaddingObject("2px 10px"),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #d3d3d3"),
            											"padding" : nexacro.PaddingObject("2px 10px"),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #5692C2"),
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MDI_Tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_ExtraBtn.png')"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								},
            								"class" :
            								[
            									{
            										"tab_MDI_Tab" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/tab_MDI_ExtraBtn.png')")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/tab_MDI_ExtraBtnP.png')")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/tab_MDI_ExtraBtnP.png')")
            												},
            												"focused" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/tab_MDI_ExtraBtnP.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#888888")
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 20px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#00b1eb")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("7px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#00b1eb")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_Expand.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_Expand.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("10px \"Verdana\""),
            										"color" : nexacro.ColorObject("#919396")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("10px \"Verdana\""),
            										"color" : nexacro.ColorObject("#919396")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dddddd")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_Menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_WF_Board" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_mCombo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd,1px solid #dddddd,1px solid #dadada"),
            												"font" : nexacro.FontObject("bold 12px \"Verdana,Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#000000"),
            												"letterSpacing" : nexacro.CSSValueObject("-1px")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_mCombo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #ffffff,0px none,2px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("3px 10px"),
            															"color" : nexacro.ColorObject("#ea6214")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd"),
            												"padding" : nexacro.PaddingObject("2px"),
            												"font" : nexacro.FontObject("12px \"Verdana,Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#262626")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_Menu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#262626")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#262626")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#1E48CD"),
            															"font" : nexacro.FontObject("bold 13px \"Verdana\",\"Malgun Gothic\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_WF_Board" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"wordWrap" : "char",
            															"font" : nexacro.FontObject("13px \"Verdana,Malgun Gothic\"")
            														},
            														"mouseover" :
            														{
            															"font" : nexacro.FontObject("13px \"Verdana,Malgun Gothic\"")
            														},
            														"selected" :
            														{
            															"font" : nexacro.FontObject("13px \"Verdana,Malgun Gothic\"")
            														}
            													}
            												}
            											},
            											{
            												"grd_mCombo" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("1px solid #ffffff,0px none,1px solid #dddddd"),
            															"padding" : nexacro.PaddingObject("3px 10px")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #dddddd")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"cell_LF_Level1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_Menu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#b9c4da")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Noline" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCName" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCId" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCGender" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCLabel" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCValue" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCLabel" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCValue" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("14px \"Verdana\",\"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"selection" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("2px solid #00b1eb")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"subcell" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #dddddd")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #00b1eb")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #00b1eb")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_RdoType" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoType.png')")
            																},
            																"disabled" :
            																{
            																},
            																"mouseover" :
            																{
            																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoTypeM.png')")
            																},
            																"selected" :
            																{
            																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoTypeS.png')")
            																},
            																"mouseover_selected" :
            																{
            																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoTypeMS.png')")
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChk.png')")
            							},
            							"disabled" :
            							{
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_CellChkS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #00b1eb")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #00b1eb")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 10px")
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("0px 10px")
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("8px 8px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("13px/20px \"Verdana\", \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #5eb7ff")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("10px 10px 0px"),
            								"wordWrap" : "char",
            								"font" : nexacro.FontObject("14px/24px \"Verdana\",\"MalgunGothic\"")
            							},
            							"disabled" :
            							{
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #000000")
            							}
            						}
            					},
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"class" :
            												[
            													{
            														"grd_WF_Board" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"wordWrap" : "char",
            																	"font" : nexacro.FontObject("13px/19px \"Verdana,Malgun Gothic\"")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"focused" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																}
            															}
            														}
            													}
            												]
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            								"padding" : nexacro.PaddingObject("5px 0px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c4c4c4")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/grd_WF_ExpandIcon.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollBtn.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpBtn.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_LF_Menu" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeCollBtn.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeExpBtn.png')")
            																		}
            																	}
            																}
            															},
            															{
            																"grd_WF_Rtl" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeExpBtnRTL.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCollBtnRTL.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
            									},
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeImg.png')")
            									}
            								}
            							},
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"class" :
            														[
            															{
            																"grd_WF_Rtl" :
            																{
            																	"self" :
            																	{
            																		"enabled" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeimgRTL.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImgLTR.png')"),
            																			"rtlIcon" : nexacro.UrlObject("URL('theme://images/grd_WF_TreeCollImgRTL.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImgLTR.png')"),
            																			"rtlIcon" : nexacro.UrlObject("URL('theme://images/grd_WF_TreeExpImgRTL.png')")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')")
            									},
            									"disabled" :
            									{
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            									},
            									"mouseover_selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 5px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/stp_WF_ItemN.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/stp_WF_ItemS.png')")
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #000000")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #eaebec")
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c4c4"),
            										"padding" : nexacro.PaddingObject("8px 0px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_WF_Detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d3dce1")
            								}
            							}
            						}
            					},
            					{
            						"div_LF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5692C2")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c4c4c4")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d8d9da")
            							},
            							"selected" :
            							{
            							}
            						}
            					},
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_mCombo" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				},
            				"class" :
            				[
            					{
            						"lstv_WF_BdyFormat1" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d8d9da,1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyFormat2" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarExpicon.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d8d9da")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"ListViewBandControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none,1px solid #d8d9da,1px solid #d8d9da")
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"cellprogressbar" :
            					{
            						"parent" :
            						{
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"View" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c4c4c4")
            					}
            				},
            				"class" :
            				[
            					{
            						"View_WF_Area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncP.png")] = { width:7, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecP.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncP.png")] = { width:3, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinD.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_SB_Grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_Essential.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/edt_Login_idN.png")] = { width:30, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/edt_Login_idS.png")] = { width:30, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/edt_Login_pwN.png")] = { width:30, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/edt_Login_pwS.png")] = { width:30, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxN.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnN.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnN.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemN.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropbtnN.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropbtnP.png")] = { width:12, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropN.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnN.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnN.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnP.png")] = { width:10, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnN.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnM.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Expand.png")] = { width:5, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChk.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellChkS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ExpandIcon.png")] = { width:18, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_ItemN.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/stp_WF_ItemS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/img_logo.png")] = { width:340, height:40 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MenuLine.png")] = { width:1, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Home.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Max.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Min.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Verti.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Horz.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_AllX.png")] = { width:19, height:19 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtn.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtnP.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchIcon.png")] = { width:15, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/icon_search.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_DetailEssIcon.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_DotIcon.png")] = { width:10, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoType.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LtrLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RtlLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeimgRTL.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgLTR.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgRTL.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgLTR.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgRTL.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_MainImg.png")] = { width:790, height:289 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Del.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Msg_Alert.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Msg_Confirm.png")] = { width:35, height:35 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:10, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_boomarkN.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_boomarkS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_AllMnu.png")] = { width:17, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_boomarkD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_btn_OS_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_btn_O_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_btn_S_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/cmb_dropbtn_P_E.png")] = { width:9, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgAvata.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgFrozen.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgInception.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgIronman.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgStarwars.png")] = { width:96, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgTitanic.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp10.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp11.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp12.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp13.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp14.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp15.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp16.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp17.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp18.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp19.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp20.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprM.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprW.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_OS_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_O_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_btn_S_E.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_O_E.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_downbtn_P_E.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_O_E.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_upbtn_P_E.png")] = { width:19, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_TF_NexacroN.png")] = { width:156, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubtitleIcon.png")] = { width:12, height:10 };
	};
}
)();
