package routes

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
	"runtime"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	fmt.Println("ciao")
}

func RoutesInit() {
	// static file system
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
	// routes
	http.HandleFunc("/", mainRoute)
	http.HandleFunc("/auth", authRoute)
	http.HandleFunc("/reg", registerRoute)
	http.HandleFunc("/newseeg", newsregisterRoute)
	http.HandleFunc("/admin", adminRoute)
}

func mainRoute(w http.ResponseWriter, r *http.Request) {
	Cwd, _ := os.Getwd()
	Os := runtime.GOOS

	// html template
	switch Os {
	case "windows":
		template, _ := template.ParseFiles(Cwd + "\\static\\pages\\news.html")
		template.Execute(w, "")
		break
	default:
		template, _ := template.ParseFiles(Cwd + "/static/pages/news.html")
		template.Execute(w, "")
	}
}

func routeChiSiamo(w http.ResponseWriter, r *http.Request) {
	Cwd, _ := os.Getwd()
	Os := runtime.GOOS

	// html template
	switch Os {
	case "windows":
		template, _ := template.ParseFiles(Cwd + "\\static\\pages\\chiSiamo.html")
		template.Execute(w, "")
		break
	default:
		template, _ := template.ParseFiles(Cwd + "/static/pages/chiSiamo.html")
		template.Execute(w, "")
	}
}

func authRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao2")
}

func registerRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao3")
}

func adminRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao4")
}

func newsregisterRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao5")
}
