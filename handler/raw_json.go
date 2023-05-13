package handler

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/paujim/react-table-with-json/model"
)

func (a *app) RawJson(c echo.Context) error {
	var fakeData model.Data
	_ = a.faker.Struct(&fakeData)

	return c.JSON(http.StatusOK, fakeData)
}
