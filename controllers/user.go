package controllers

import (
	"github.com/astaxie/beego/logs"
)

type UserController struct {
	BaseController
}

func (this *UserController) Register() {
	txtEmail := this.Ctx.Input.Param(":txtEmail")
	logs.Alert(txtEmail)
}

func (this *UserController) Login() {

}
