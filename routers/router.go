package routers

import (
	"github.com/astaxie/beego"
	"github.com/make3782/apiCenter/controllers"
	// "xiangqian.run/controllers"
)

func Init() {
	beego.Router("/", new(controllers.IndexController))
	beego.Router("/api/user/register", &controllers.UserController{}, "post:Register")
	beego.Router("/api/user/login", &controllers.UserController{}, "post:Login")

	beego.Router("/api/project/", &controllers.ProjectController{}, "get:List")
}
