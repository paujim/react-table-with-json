package core

import "github.com/labstack/echo/v4"

type App interface {
	HealthCheck(c echo.Context) error
	RawJson(c echo.Context) error
	DataSet(c echo.Context) error
	Details(c echo.Context) error
}
