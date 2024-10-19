package main

import (
	"crypto/md5"
	"fmt"
	"html/template"
	"io"
	rndm "math/rand"
	"net/http"
	"os"
	"path/filepath"

	"github.com/julienschmidt/httprouter"
)

var tmpl = template.Must(template.ParseGlob("index.html"))

func uploadFile(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	if r.Method == http.MethodPost {
		err := r.ParseMultipartForm(10 << 20) // 10 MB limit
		if err != nil {
			http.Error(w, "Unable to parse form", http.StatusBadRequest)
			return
		}

		file, fileHeader, err := r.FormFile("file")
		if err != nil {
			http.Error(w, "Unable to get file", http.StatusBadRequest)
			return
		}
		defer file.Close()

		// Ensure uploads directory exists
		if err := os.MkdirAll("./uploads", os.ModePerm); err != nil {
			http.Error(w, "Unable to create upload directory", http.StatusInternalServerError)
			return
		}

		out, err := os.Create(filepath.Join("./uploads", fileHeader.Filename))
		if err != nil {
			http.Error(w, "Unable to create file", http.StatusInternalServerError)
			return
		}
		defer out.Close()

		if _, err = io.Copy(out, file); err != nil {
			http.Error(w, "Unable to save file", http.StatusInternalServerError)
			return
		}

		fmt.Fprintf(w, "File uploaded successfully!")
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

//==================

// func sendImageAsBytes(w http.ResponseWriter, _ *http.Request, a httprouter.Params) {
// 	buf, err := os.ReadFile("./images/" + a.ByName("imageName"))
// 	if err != nil {
// 		log.Print(err)
// 	}
// 	w.Header().Set("Content-Type", "image/png")
// 	w.Write(buf)
// }

func CSRF(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Fprint(w, GenerateName(8))
}

func GenerateName(n int) string {
	var letters = []rune("abcdefghijklmnopqrstuvwxyz0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ")

	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rndm.Intn(len(letters))]
	}
	return string(b)
}

// func renderError(w http.ResponseWriter, message string, statusCode int) {
// 	w.WriteHeader(statusCode)
// 	w.Write([]byte(message))
// }

func EncrypIt(strToHash string) string {
	data := []byte(strToHash)
	return fmt.Sprintf("%x", md5.Sum(data))
}
