import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as cors from "cors";

import router from "./router/v1";
import config from "./config/main";

// init express
const app = express();

// init mongoose
mongoose.connect(config.db);

// express middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());
app.use(cors());

// router
router(app);

// init server 
const port = process.env.NODE_ENV !== config.test_env ? config.port : config.test_port;
const server = app.listen(port, () => console.log(`Server listening in port ${port}`));
export default server;