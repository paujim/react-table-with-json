package handler

import (
	"math/rand"
	"net/http"
	"reflect"

	"github.com/labstack/echo/v4"
	"github.com/paujim/react-table-with-json/model"
)

func (a *app) DataSet(c echo.Context) error {
	n := 5 + rand.Intn(5)
	data := []model.DataSet{}
	for i := 0; i < n; i++ {
		var fakeDS model.DataSet
		a.faker.Struct(&fakeDS)
		data = append(data, fakeDS)
	}

	return c.JSON(http.StatusOK, map[string]any{
		"headers": getJsonFields(model.DataSet{}),
		"data":    data,
	})
}

func getJsonFields(obj any) []string {
	headers := []string{}
	val := reflect.ValueOf(obj)
	for i := 0; i < val.Type().NumField(); i++ {
		headers = append(headers, val.Type().Field(i).Tag.Get("json"))
	}
	return headers
}
