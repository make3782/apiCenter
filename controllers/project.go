package controllers

import (
	"github.com/astaxie/beego/logs"
)

type ProjectController struct {
	BaseController
}

type project struct {
	ProjectName string // 名称
	ProjectId   int    // uni id
	Uid         int    // 所属用户id
	ProjectDesc string // 项目描述
	IsPublic    bool   // 是否公开项目
}

type projects struct {
	P []*project
}

//List 获取用户项目列表
func (this *ProjectController) List() {
	uid := this.GetSession("GUID")
	logs.Alert("get uid is %v", uid)
	if uid == nil {
		this.Data["json"] = GetAjaxRtn(-1, "请勿非法提交")
		this.ServeJSON()
	}

	pj := make([]*project, 0)

	pj = append(pj, &project{"项目1", 1, 1, "我是项目描述1", false}, &project{"项目2", 2, 1, "我是项目描述2", true})
	//p := &projects{pj}

	this.Data["json"] = GetAjaxRtn(0, "success", pj)
	this.ServeJSON()
}
