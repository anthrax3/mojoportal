﻿Type.registerNamespace("Sys.Extended.UI.HtmlEditor.ToolbarButtons");Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector=function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector.initializeBase(this,[n])};Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector.prototype={callMethod:function(){if(!Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector.callBaseMethod(this,"callMethod"))return!1},setColor:function(n){Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector.callBaseMethod(this,"setColor",[n]);this._designPanel._execCommand("backcolor",!1,n)}};Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector.registerClass("Sys.Extended.UI.HtmlEditor.ToolbarButtons.BackColorSelector",Sys.Extended.UI.HtmlEditor.ToolbarButtons.ColorSelector);