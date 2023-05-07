package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/paujim/react-table-with-json/handler"
)

func main() {
	e := echo.New()

	app := handler.NewApp(0)

	e.Use(middleware.Logger())
	e.Static("/", "./ui/build")
	g := e.Group("api")
	g.Use(middleware.CORS())
	g.GET("/", app.HealthCheck)
	g.GET("/json", app.RawJson)
	g.GET("/ds", app.DataSet)
	g.GET("/details", app.Details)

	e.Logger.Fatal(e.Start(":5000"))
}
