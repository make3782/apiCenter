package controllers

type IndexController struct {
	BaseController
}

func (c *IndexController) Get() {
	c.Data["title"] = "title good"
	c.ServeJSON()
}
