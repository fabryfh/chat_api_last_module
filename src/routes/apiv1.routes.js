const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const userRoutes = require("../modules/user/user.routes");
const conversationsRoutes = require("../modules/conversations/conversations.routes");
const messageRoutes = require('../modules/message/message.routes');

const apiv1Routes = (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/conversations", conversationsRoutes);
  app.use("/api/v1/messages", messageRoutes);
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc)); //Cualquiera con este endpoint debería ser capaz de visualizar la documentación.
};

module.exports = apiv1Routes;
