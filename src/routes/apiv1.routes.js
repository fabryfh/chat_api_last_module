const userRoutes = require("../modules/user/user.routes");
const conversationsRoutes = require("../modules/conversations/conversations.routes");

const apiv1Routes = (app) => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/conversations", conversationsRoutes);
};

module.exports = apiv1Routes;
