const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

//router variable with path to .router goes here
//app = express()

//app.use boilerplate stuff

// app.use(cors())
// app.use(express.json());

// app.use("/observations", observationsRouter);

// app.use(notFound);
// app.use(errorHandler);

module.exports = knex;
