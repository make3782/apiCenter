package main

import (
	"github.com/astaxie/beego"
	"github.com/make3782/apiCenter/routers"
)

func main() {
	routers.Init()
	beego.Run()
}
