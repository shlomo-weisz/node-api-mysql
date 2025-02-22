import express from "express";
import cors from "cors";

import UserRouter from "./routers/user-routes.js";
import SubscriptionRouter from "./routers/subscription-routes.js";
import SubscriptionTypeRouter from "./routers/subscription-type-routes.js";
import { syncModels } from "./database/index.js";

const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
app.use(cors());

//routes
app.use("/users", new UserRouter().getRouter());
app.use("/subscriptions", new SubscriptionRouter().getRouter());
app.use("/subscriptions-type", new SubscriptionTypeRouter().getRouter());

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
    }
);

