package handler

import (
	"math/rand"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/paujim/react-table-with-json/model"
)

func (a *app) Details(c echo.Context) error {
	n := 1 + rand.Intn(19)
	data := []model.Details{}
	for i := 0; i < n; i++ {
		var fakeDetails model.Details
		_ = a.faker.Struct(&fakeDetails)
		data = append(data, fakeDetails)
	}

	return c.JSON(http.StatusOK, map[string]any{
		"headers": getJsonFields(model.Details{}),
		"data":    data,
	})
}
