package model

import "time"

type Data struct {
	Name          string         `json:"name" fake:"{firstname}"`
	Sentence      string         `json:"sentence" fake:"{sentence:3}"`
	Number        string         `json:"number" fake:"{number:1,10}"`
	Regex         string         `json:"regex" fake:"{regex:[abcdef]{5}}"`
	Map           map[string]int `json:"map" fakesize:"2"`
	Array         []string       `json:"array" fakesize:"2"`
	ArrayRange    []string       `json:"arrayRange" fakesize:"2,6"`
	Created       time.Time      `json:"created" fake:"{date}"`
	CreatedFormat time.Time      `json:"createdFormat" fake:"{year}-{month}-{day}" format:"2006-01-02"`
}

type DataSet struct {
	ID        string    `json:"id" fake:"{uuid}"`
	Number    string    `json:"number" fake:"{number:1,10}"`
	Regex     string    `json:"regex" fake:"{regex:[abcdef]{5}}"`
	CreatedAt time.Time `json:"createdAt" fake:"{year}-{month}-{day}" format:"2006-01-02"`
}

type Details struct {
	ID       string    `json:"id" fake:"{uuid}"`
	Sentence string    `json:"sentence" fake:"{sentence:4}"`
	Number   string    `json:"number" fake:"{number:1,100}"`
	Created  time.Time `json:"created" fake:"{date}"`
}
