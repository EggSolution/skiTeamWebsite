package routes

import (
    "fmt"
    "net/http"
)

func main(){
    fmt.Println("ciao");
}

func RoutesInit(){
    // static file system
    fs := http.FileServer(http.Dir("./static"))
    http.Handle("/static/", http.StripPrefix("/static", fs))
    // routes
    http.HandleFunc("/", mainRoute);
    http.HandleFunc("/auth", authRoute);
    http.HandleFunc("/reg", registerRoute);
    http.HandleFunc("/newseeg", newsregisterRoute);
    http.HandleFunc("/admin", adminRoute);
}

func mainRoute(w http.ResponseWriter, r *http.Request){
    fmt.Fprint(w, "ciao1");
}

func authRoute(w http.ResponseWriter, r *http.Request){
    fmt.Fprint(w, "ciao2");
}

func registerRoute(w http.ResponseWriter, r *http.Request){
    fmt.Fprint(w, "ciao3");
}

func adminRoute(w http.ResponseWriter, r *http.Request){
    fmt.Fprint(w, "ciao4");
}

func newsregisterRoute(w http.ResponseWriter, r *http.Request){
    fmt.Fprint(w, "ciao5");
}
