package main

import (
	"log"
	"os"
	"path/filepath"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/paujim/react-table-with-json/handler"
)

func getStaticPath() string {
	exec, _ := os.Executable()
	exPath := filepath.Dir(exec)
	pathToStatic := filepath.Join(exPath, "ui", "build")
	return pathToStatic
}

func main() {
	e := echo.New()

	app := handler.NewApp(0)

	e.Use(middleware.Logger())

	pathToStatic := getStaticPath()

	if _, err := os.Stat(pathToStatic); os.IsNotExist(err) {
		log.Println("unable to find static files")
	}

	e.Static("/", pathToStatic)
	g := e.Group("api")
	g.Use(middleware.CORS())
	g.GET("", app.HealthCheck)
	g.GET("/json", app.RawJson)
	g.GET("/ds", app.DataSet)
	g.GET("/details", app.Details)

	e.Logger.Fatal(e.Start(":5000"))
}
