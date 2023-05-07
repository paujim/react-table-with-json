package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func (*app) HealthCheck(c echo.Context) error {
	resp := map[string]string{
		"Message": "Everything is good!",
	}
	return c.JSON(http.StatusOK, resp)
}
