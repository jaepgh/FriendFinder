function htmlRoutes() {

    this.handleRoutes = function (app, path) {
        app.get("/", function (req, res) {
            res.sendFile(path + "/home.html");
        });
        
        app.get("/survey", function (req, res) {
            res.sendFile(path + "/survey.html");
        });
    }
    
}

module.exports = htmlRoutes;