package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
)

type ajaxRtn struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

// BaseController 继承beego的controller
type BaseController struct {
	beego.Controller
}

// GetAjaxRtn 返回json串
func GetAjaxRtn(code int, msg string, v ...interface{}) string {
	var rtn *ajaxRtn
	if len(v) > 0 {
		rtn = &ajaxRtn{Code: code, Msg: msg, Data: v[0]}
	} else {
		rtn = &ajaxRtn{Code: code, Msg: msg}
	}

	data, _ := json.Marshal(rtn)
	return string(data)
}
