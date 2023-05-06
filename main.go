package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./ui/build"))
	http.Handle("/", fs)

	log.Print("Listening on :5000...")

	err := http.ListenAndServe(":5000", nil)
	if err != nil {
		log.Fatal(err)
	}

}
