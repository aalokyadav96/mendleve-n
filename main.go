package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

func main() {
	router := httprouter.New()
	router.GET("/", Index)
	router.GET("/register", Index)
	router.GET("/login", Index)
	router.GET("/about", Index)
	router.GET("/profile", Index)
	router.GET("/settings", Index)
	router.GET("/dashboard", Index)
	router.GET("/favicon.ico", Ignore)
	// router.GET("/hello/:name", Hello)
	// router.GET("/event/:name", EventDetails)
	router.GET("/api/events", getEvents)
	router.POST("/api/event", createEvent)
	router.GET("/api/event/:eventid", getEvent)
	router.PUT("/api/event/:eventid", editEvent)
	router.DELETE("/api/event/:eventid", deleteEvent)
	router.POST("/api/event/:eventid/review", addReview)
	router.POST("/api/event/:eventid/media", addMedia)
	router.POST("/api/event/:eventid/merch", createMerch)
	router.GET("/api/event/:eventid/merch/:merchid", getMerch)
	router.PUT("/api/event/:eventid/merch/:merchid", editMerch)
	router.DELETE("/api/event/:eventid/merch/:merchid", deleteMerch)
	router.POST("/api/place", createPlace)
	router.GET("/api/places", getPlaces)
	router.GET("/api/place/:placeid", getPlace)
	router.PUT("/api/place/:placeid", editPlace)
	router.DELETE("/api/place/:placeid", deletePlace)
	router.POST("/api/place/:placeid/review", addReview)
	router.POST("/api/place/:placeid/media", addMedia)
	router.POST("/api/place/:placeid/merch", createMerch)
	router.GET("/api/place/:placeid/merch/:merchid", getMerch)
	router.PUT("/api/place/:placeid/merch/:merchid", editMerch)
	router.DELETE("/api/place/:placeid/merch/:merchid", deleteMerch)

	router.POST("/api/upload", uploadFile)
	router.POST("/api/register", register)
	router.POST("/api/login", login)
	router.POST("/api/logout", logout)

	// CORS setup
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Update with your frontend origin
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowCredentials: true,
	})

	// Serve static files (HTML, CSS, JS)
	router.ServeFiles("/css/*filepath", http.Dir("css"))
	router.ServeFiles("/js/*filepath", http.Dir("js"))
	router.ServeFiles("/uploads/*filepath", http.Dir("uploads"))

	log.Fatal(http.ListenAndServe(":4000", c.Handler(router)))
}
