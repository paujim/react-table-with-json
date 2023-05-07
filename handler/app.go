package handler

import (
	"github.com/brianvoe/gofakeit/v6"
	"github.com/paujim/react-table-with-json/core"
)

var _ = core.App(&app{})

type app struct {
	faker *gofakeit.Faker
}

func NewApp(seed int64) core.App {
	return &app{faker: gofakeit.New(seed)}
}
