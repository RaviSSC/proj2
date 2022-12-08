var router = require("express").Router();
const { route } = require(".");
var messagesCtrl = require("../controllers/messages");

// POST /

router.post("/", messagesCtrl.create);

// GET /messages
router.get("/", messagesCtrl.index);
router.get("/new", messagesCtrl.  createMessage);
router.get("/:id/edit", messagesCtrl.editMessage);

// DELETE
router.delete("/:id", messagesCtrl.delMessage);

// PUT
router.put("/:id", messagesCtrl.updateMessage);



module.exports = router;