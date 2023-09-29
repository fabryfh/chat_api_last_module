const { Router } = require("express");
const { createConversation } = require("./conversations.controllers");

const router = Router();

// crear conversaciones
// crear conversaciones grupales
// obtener todas las conversaciones
// obtener una conversacion con todos los mensajes

router.post("/", createConversation);

module.exports = router;
