package main

import (
	"context"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client

func init() {
	ctx := context.Background()
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, _ = mongo.Connect(ctx, clientOptions)
}

func findOne(ctx context.Context, collection *mongo.Collection, filter interface{}, result interface{}) error {
	return collection.FindOne(ctx, filter).Decode(result)
}

func insertOne(ctx context.Context, collection *mongo.Collection, document interface{}) error {
	_, err := collection.InsertOne(ctx, document)
	return err
}

func updateOne(ctx context.Context, collection *mongo.Collection, filter interface{}, update interface{}) error {
	_, err := collection.UpdateOne(ctx, filter, update)
	return err
}

func deleteOne(ctx context.Context, collection *mongo.Collection, filter interface{}) error {
	_, err := collection.DeleteOne(ctx, filter)
	return err
}
