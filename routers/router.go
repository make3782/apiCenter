package routers

import (
	"github.com/astaxie/beego"
	"github.com/make3782/apiCenter/controllers"
)

func Init() {
	beego.Router("/", new(controllers.IndexController))
}
