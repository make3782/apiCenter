package controllers

import (
	"github.com/astaxie/beego/logs"
)

type UserController struct {
	BaseController
}

type User struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func (this *UserController) Register() {
	txtEmail := this.Ctx.Input.Param(":txtEmail")
	logs.Alert(txtEmail)
}

/**
 * 用户登陆
 */
func (this *UserController) Login() {
	txtEmail := this.GetString("email")
	txtPassword := this.GetString("txtpassword")

	this.Ctx.Output.Header("Access-Control-Allow-Origin", "*")
	if txtEmail == "" || txtPassword == "" {
		this.Data["json"] = GetAjaxRtn(-1, "邮箱或密码为空")
		this.ServeJSON()
	}

	// 验证...

	// 验证通过
	user := &User{1, "wzx"}
	this.SetSession("GUID", user.Id)
	this.Data["json"] = GetAjaxRtn(0, "", user)
	this.ServeJSON()
}
