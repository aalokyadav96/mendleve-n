package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"go.mongodb.org/mongo-driver/bson"
)

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tmpl.ExecuteTemplate(w, "index.html", nil)
}

func Ignore(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, "", nil)
}

func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}

func EventDetails(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	var event Event
	event.Description = "체리블렛"
	event.EventID = ps.ByName("name")
	event.Title = "blep"
	json.NewEncoder(w).Encode(event)
}

func getEvents(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	ctx := r.Context()
	collection := client.Database("eventdb").Collection("events")

	var events []Event
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, "Error fetching events", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var event Event
		if err := cursor.Decode(&event); err != nil {
			http.Error(w, "Error decoding event", http.StatusInternalServerError)
			return
		}
		events = append(events, event)
	}
	json.NewEncoder(w).Encode(events)
}

func getPlaces(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	ctx := r.Context()
	collection := client.Database("eventdb").Collection("places")

	var places []Place
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, "Error fetching places", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var place Place
		if err := cursor.Decode(&place); err != nil {
			http.Error(w, "Error decoding event", http.StatusInternalServerError)
			return
		}
		places = append(places, place)
	}
	json.NewEncoder(w).Encode(places)
}

func createEvent(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	ctx := r.Context()
	var event Event
	if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	event.EventID = "e" + GenerateName(14)
	// TODO : check if id already exists
	collection := client.Database("eventdb").Collection("events")
	if err := insertOne(ctx, collection, event); err != nil {
		http.Error(w, "Error saving event", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(event)
}

func getEvent(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context()
	id := ps.ByName("eventid")
	collection := client.Database("eventdb").Collection("events")
	var event Event
	if err := findOne(ctx, collection, bson.M{"eventid": id}, &event); err != nil {
		http.Error(w, "Event not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(event)
}

func editEvent(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	id := ps.ByName("eventid")
	var event Event

	if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	// Update the event in MongoDB
	collection := client.Database("eventdb").Collection("events")
	if err := updateOne(ctx, collection, bson.M{"eventid": id}, bson.M{"$set": event}); err != nil {
		http.Error(w, "Error updating event", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(event)
}

func deleteEvent(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	id := ps.ByName("eventid")

	// Delete the event from MongoDB
	collection := client.Database("eventdb").Collection("events")
	if err := deleteOne(ctx, collection, bson.M{"eventid": id}); err != nil {
		http.Error(w, "Error deleting event", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func addReview(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	var review Review

	if err := json.NewDecoder(r.Body).Decode(&review); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	review.ReviewID = "r" + GenerateName(18)
	// Validate rating
	if review.Rating < 1 || review.Rating > 5 {
		http.Error(w, "Rating must be between 1 and 5", http.StatusBadRequest)
		return
	}

	// Add review to MongoDB
	collection := client.Database("eventdb").Collection("events")
	if err := updateOne(ctx, collection, bson.M{"eventid": eventID}, bson.M{"$push": bson.M{"reviews": review}}); err != nil {
		http.Error(w, "Error adding review", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func addMedia(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	var media Media

	if err := json.NewDecoder(r.Body).Decode(&media); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	media.ID = GenerateName(16)

	// Add media to MongoDB
	collection := client.Database("eventdb").Collection("events")
	if err := updateOne(ctx, collection, bson.M{"eventid": eventID}, bson.M{"$push": bson.M{"media": media}}); err != nil {
		http.Error(w, "Error adding media", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func createMerch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	var merch Merch

	if err := json.NewDecoder(r.Body).Decode(&merch); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	merch.EventID = eventID
	merch.MerchID = "m" + GenerateName(16)

	// Insert merch into MongoDB
	collection := client.Database("eventdb").Collection("merch")
	if err := insertOne(ctx, collection, merch); err != nil {
		http.Error(w, "Error saving merch", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(merch)
}

func getMerch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	merchID := ps.ByName("merchid")

	collection := client.Database("eventdb").Collection("merch")
	var merch Merch
	if err := findOne(ctx, collection, bson.M{"eventid": eventID, "merchid": merchID}, &merch); err != nil {
		http.Error(w, "Merch not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(merch)
}

func editMerch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	merchID := ps.ByName("merchid")
	var merch Merch

	if err := json.NewDecoder(r.Body).Decode(&merch); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	// Update the merch in MongoDB
	collection := client.Database("eventdb").Collection("merch")
	if err := updateOne(ctx, collection, bson.M{"eventid": eventID, "merchid": merchID}, bson.M{"$set": merch}); err != nil {
		http.Error(w, "Error updating merch", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(merch)
}

func deleteMerch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	eventID := ps.ByName("eventid")
	merchID := ps.ByName("merchid")

	// Delete the merch from MongoDB
	collection := client.Database("eventdb").Collection("merch")
	if err := deleteOne(ctx, collection, bson.M{"eventid": eventID, "merchid": merchID}); err != nil {
		http.Error(w, "Error deleting merch", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func createPlace(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	var place Place

	if err := json.NewDecoder(r.Body).Decode(&place); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	place.PlaceID = "p" + GenerateName(14)

	// Insert place into MongoDB
	collection := client.Database("eventdb").Collection("places")
	if err := insertOne(ctx, collection, place); err != nil {
		http.Error(w, "Error saving place", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(place)
}

func getPlace(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	placeID := ps.ByName("placeid")

	collection := client.Database("eventdb").Collection("places")
	var place Place
	if err := findOne(ctx, collection, bson.M{"placeid": placeID}, &place); err != nil {
		http.Error(w, "Place not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(place)
}

func editPlace(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	placeID := ps.ByName("placeid")
	var place Place

	if err := json.NewDecoder(r.Body).Decode(&place); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	// Update the place in MongoDB
	collection := client.Database("eventdb").Collection("places")
	if err := updateOne(ctx, collection, bson.M{"placeid": placeID}, bson.M{"$set": place}); err != nil {
		http.Error(w, "Error updating place", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(place)
}

func deletePlace(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	ctx := r.Context() // Get the context from the request
	placeID := ps.ByName("placeid")

	// Delete the place from MongoDB
	collection := client.Database("eventdb").Collection("places")
	if err := deleteOne(ctx, collection, bson.M{"placeid": placeID}); err != nil {
		http.Error(w, "Error deleting place", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
