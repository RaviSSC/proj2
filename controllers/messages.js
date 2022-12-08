const Message = require("../models/messages");

module.exports = {
  createMessage,
  index,
  deleteMessage,
  delMessage,
  updateMessage,
  editMessage,
};

//show all messages
function index(req, res) {
  Message.find({}, function (err, messages) {
    res.render("messages/index", {
      title: "All Messages",
      messages,
      user: req.user,
    });
  });
}

//redirects to new.ejs to create a new Message form
function createMessage(req, res) {
    Message.find({}, function (err, messages) {
    res.render("messages/new", {
      title: "Add message",
      messages,
      user: req.user,
    });
  });
}
//creates a new Message and redirects back to Message index
async function create(req, res) {
  req.body.user = req.user._id;
  const message = await Message.create(req.body);
  res.redirect("/messages");
  // const drinker = new Drinker(req.body);
  // Drinker.findById(req.params.id, function (err, drinker) {
  //   user.drinker.push(req.body.drinkerId);
  //   drinker.save(function (err) {
  //     if (err) return res.redirect("/drinkers/new");
  //     res.redirect("/drinkers");
  //   });
  // });
}

// function to edit/update/

function editMessage(req, res) {
    Message.findById(req.params.id, function (err, Message) {
    if (err) console.log(err);
    res.render("messages/edit", { title: "Message", Message, user: req.user });
  });
}

// function to delete Message information
function delMessage(req, res) {
  console.log(req.user);
  Message.findOneAndDelete(
    { _id: req.params.id, user: req.user },
    function (err, Message) {
      console.log(Message);
      if (err) console.log(err);
      res.redirect("/messages");
    }
  );
}

// function to edit/update Message information
function updateMessage(req, res) {
    Message.findByIdAndUpdate(req.params.id, req.body, function (err, Message) {
    if (err) console.log(err);
    res.redirect("/Messages");
  });
}