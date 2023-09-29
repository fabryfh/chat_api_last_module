const { Conversation, User } = require("../../models");

const createConversation = async (req, res, next) => {
  try {
    const { userId, participantId } = req.body;
    // creo la conversación
    const conversation = await Conversation.create({ createdBy: userId });
    // agregar a los participantes a la conversacion --> creandolos en la tabla pivote
    const { id } = conversation;
    const user = await User.findByPk(userId);
    const participant = await User.findByPk(participantId);
    await conversation.addUser(user);
    await conversation.addUser(participant);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createConversation,
};
