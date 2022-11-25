package main

import (
    "github.com/EggSolution/skiTeamWebsite/routes"
    "net/http"
    _"fmt"
    "log"
)

func main(){
    routes.RoutesInit();

    log.Fatal(http.ListenAndServe(":4040", nil));
}
