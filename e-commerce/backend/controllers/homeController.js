class homeController {
  static home(req, res) {
    res.send("<h1>Welcome to my app, This is Home Page</h1>");
  }
}

module.exports = homeController;
