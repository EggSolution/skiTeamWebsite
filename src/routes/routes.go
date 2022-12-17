package routes

import (
	"fmt"
	"html/template"
	"net/http"
	"os"
	"runtime"

	_ "github.com/go-sql-driver/mysql"
)

type secPageData struct {
	Section string
}

func main() {
	fmt.Println("ciao");
}

func RoutesInit() {
	// static file system
	fs := http.FileServer(http.Dir("./static"));
	http.Handle("/static/", http.StripPrefix("/static", fs));
	// routes
	http.HandleFunc("/", mainRoute);
	http.HandleFunc("/info", secRoute);
	http.HandleFunc("/newsreg", newsregisterRoute);
	http.HandleFunc("/admin", adminRoute);
	http.HandleFunc("/msg", msgRoute);
}

func mainRoute(w http.ResponseWriter, r *http.Request) {
	Cwd, _ := os.Getwd();
	Os := runtime.GOOS;

	// html template
	switch Os {
	case "windows":
		template, _ := template.ParseFiles(Cwd + "\\static\\pages\\index.html");
		template.Execute(w, "");
		break
	default:
		template, _ := template.ParseFiles(Cwd + "/static/pages/index.html");
		template.Execute(w, "");
	}
}

func secRoute(w http.ResponseWriter, r *http.Request) {
	Cwd, _ := os.Getwd();
	Os := runtime.GOOS;

	section := r.URL.Query().Get("sec");

	pageData := new(secPageData);
	pageData.Section = section;

	// html template
	switch Os {
	case "windows":
		template, _ := template.ParseFiles(Cwd + "\\static\\pages\\secPage.html");
		template.Execute(w, pageData);
		break
	default:
		template, _ := template.ParseFiles(Cwd + "/static/pages/secPage.html");
		template.Execute(w, pageData);
	}
}

func adminRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao4");
}

func newsregisterRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao5");
}

func msgRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ciao5");
}
