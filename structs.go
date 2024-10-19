package main

type Review struct {
	ReviewID string `json:"reviewid" bson:"reviewid"`
	EventID  string `json:"eventid" bson:"eventid"` // Reference to Event ID
	UserID   string `json:"userid" bson:"userid"`   // Reference to User ID
	Rating   int    `json:"rating" bson:"rating"`   // Rating out of 5
	Comment  string `json:"comment" bson:"comment"` // Review comment
	Date     string `json:"date" bson:"date"`       // Date of the review
}

type Media struct {
	ID      string `json:"id" bson:"id"`
	EventID string `json:"eventid" bson:"eventid"` // Reference to Event ID
	Type    string `json:"type" bson:"type"`       // e.g., "image", "video"
	URL     string `json:"url" bson:"url"`         // URL of the media
	Caption string `json:"caption" bson:"caption"` // Optional caption for the media
}

type Merch struct {
	MerchID string  `json:"merchid" bson:"merchid"`
	EventID string  `json:"eventid" bson:"eventid"` // Reference to Event ID
	Name    string  `json:"name" bson:"name"`
	Price   float64 `json:"price" bson:"price"`
	Stock   int     `json:"stock" bson:"stock"` // Number of items available
}

type Place struct {
	PlaceID  string   `json:"placeid" bson:"placeid"`
	Name     string   `json:"name" bson:"name"`
	Location string   `json:"location" bson:"location"`
	Capacity int      `json:"capacity" bson:"capacity"`
	Merch    []Merch  `json:"merch" bson:"merch"`     // Ensure this is included
	Reviews  []Review `json:"reviews" bson:"reviews"` // Ensure this is included
}

type Event struct {
	EventID     string   `json:"eventid" bson:"eventid"`
	Title       string   `json:"title" bson:"title"`
	Date        string   `json:"date" bson:"date"`
	Description string   `json:"description" bson:"description"`
	Place       string   `json:"place" bson:"place"`
	Media       []Media  `json:"media" bson:"media"`
	Reviews     []Review `json:"reviews" bson:"reviews"`
}

type User struct {
	UserID   string `json:"userid" bson:"userid"`
	Username string `json:"username" bson:"username"`
	Email    string `json:"email" bson:"email"`
	Password string `json:"password" bson:"password"`
	Role     string `json:"role" bson:"role"`
}
