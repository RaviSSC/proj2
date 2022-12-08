function index(req, res) {
    res.render("index", { title: "Message Board" });
  }
  
  module.exports = {index}